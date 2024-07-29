import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileEditForm, ProfileForm } from "../common/functions/validations";
import { UserData } from "../components/_molecules/Statement/apiEntities";

export const useAvatar = () => {
    const [userAvatar, setUserAvatar] = useState(
        "https://xsgames.co/randomusers/assets/avatars/pixel/49.jpg"
    );

    const changeAvatar = () => {
        const newAvatarUrl = `https://xsgames.co/randomusers/avatar.php?g=pixel&${new Date().getTime()}`;
        setUserAvatar(newAvatarUrl);
    };

    return {
        changeAvatar,
        userAvatar,
        setUserAvatar,
    };
};

export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState<{ width: number }>({
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return screenSize;
};

type FormErrors = Partial<Record<keyof ProfileForm, string[]>>;

export const useFetchData = () => {
    const [formData, setFormData] = useState<ProfileForm>({
        lastName: "",
        firstName: "",
        email: "",
        address: "",
        country: "",
        dateOfBirth: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isDataLoaded) {
            fetch("http://localhost:3000/users")
                .then((response) => response.json())
                .then((data) => {
                    if (data && data.length > 0) {
                        const min: number = 0;
                        const max: number = data.length;
                        const randomNumber = Math.floor(Math.random() * (max - min + 1));

                        const user = data[randomNumber];

                        if (user) {
                            setFormData({
                                lastName: user.fullname.split(" ")[1] || "",
                                firstName: user.fullname.split(" ")[0] || "",
                                dateOfBirth: user.birthdate || "",
                                email: user.userid || "",
                                address: user.address || "",
                                country: user.country || "",
                            });
                        }
                    }
                    setIsDataLoaded(true);
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    setIsDataLoaded(true);
                });
        }
    }, [isDataLoaded]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        const validation = profileEditForm.safeParse({ ...formData, [id]: value });
        if (!validation.success) {
            const fieldErrors = validation.error.format();
            const newErrors: FormErrors = {};
            for (const key in fieldErrors) {
                if (fieldErrors[key as keyof ProfileForm]?._errors !== undefined) {
                    newErrors[key as keyof ProfileForm] = fieldErrors[key as keyof ProfileForm]?._errors || [];
                }
            }
            setErrors(newErrors);
        } else {
            setErrors({});
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        const validation = profileEditForm.safeParse(formData);
        if (!validation.success) {
            console.error("Validation errors:", validation.error.errors);
            const fieldErrors = validation.error.format();
            const newErrors: FormErrors = {};
            for (const key in fieldErrors) {
                if (fieldErrors[key as keyof ProfileForm]?._errors) {
                    newErrors[key as keyof ProfileForm] = fieldErrors[key as keyof ProfileForm]?._errors || [];
                }
            }
            setErrors(newErrors);
            alert("Validation errors:" + validation.error.errors);
            return;
        }

        const baseUrl = "http://localhost:3000/users";
        const userEmail = formData.email;

        try {
            const userExistsResponse = await fetch(`${baseUrl}?email=${userEmail}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            let method = "POST"; 
            let url = baseUrl; 
            if (userExistsResponse.ok) {
                const userExistsData = await userExistsResponse.json();
                if (userExistsData.length > 0) {
                    method = "PUT";
                    url = `${baseUrl}/${userExistsData[0].id}`; 
                }
            }

            const saveResponse = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userid: formData.email,
                    password: "",
                    fullname: `${formData.firstName} ${formData.lastName}`,
                    birthdate: formData.dateOfBirth,
                    accounting: {
                        transactions: [],
                        money: null,
                        expenses: null,
                        earnings: null,
                    },
                }),
            });

            const data = await saveResponse.json();
            if (saveResponse.ok) {
                console.log("Data updated successfully:", data);
                alert("Data updated successfully");
                navigate("/");
            } else {
                console.error("Error saving data:", data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return { formData, errors, handleInputChange, handleSave };
};

export const useUserData = () => {
    const [userData, setUserData] = useState<UserData>()

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUserData(data[0]))
    }, [])

    return(userData)
}