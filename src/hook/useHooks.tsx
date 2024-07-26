import { useEffect, useState } from "react"

export const useAvatar = () => {
    const [userAvatar, setUserAvatar] = useState(
        "https://xsgames.co/randomusers/assets/avatars/pixel/49.jpg"
    )

    const changeAvatar = () => {
        const newAvatarUrl = `https://xsgames.co/randomusers/avatar.php?g=pixel&${new Date().getTime()}`
        setUserAvatar(newAvatarUrl)
    }

    return {
        changeAvatar,
        userAvatar,
        setUserAvatar,
    }
}

export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState<{ width: number }>({
        width: window.innerWidth,
    })

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
            })
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return screenSize
}

export const useFetchData = () => {
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        dateOfBirth: "",
        email: "",
        address: "",
        country: "",
    })

    const [isDataLoaded, setIsDataLoaded] = useState(false)

    useEffect(() => {
        if (!isDataLoaded) {
            fetch("http://localhost:3000/users")
                .then((response) => response.json())
                .then((data) => {
                    if (data && data.length > 0) {
                        const user = data[0]
                        if (user) {
                            setFormData({
                                lastName: user.fullname.split(" ")[1] || "",
                                firstName: user.fullname.split(" ")[0] || "",
                                dateOfBirth: user.birthdate || "",
                                email: user.userid || "",
                                address: user.address || "",
                                country: user.country || "",
                            })
                        }
                    }
                    setIsDataLoaded(true)
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error)
                    setIsDataLoaded(true) 
                })
        }
    }, [isDataLoaded])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
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
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    console.log("Data saved successfully:", data)
                    alert("Data saved successfully")
                } else {
                    console.error("Error saving data")
                }
            })
            .catch((error) => console.error("Error:", error))
    }

    return { formData, handleInputChange, handleSave }
}
