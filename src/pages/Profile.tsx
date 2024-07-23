import { useState } from "react"
import { Link } from "react-router-dom"
import FormInput from "../components/_atoms/FormInput"
import ButtonComponent from "../components/_atoms/Button"

export default function Profile() {
    const [userImage, setUserImage] = useState("")

    if (!userImage) {
        fetch("/database/db.json")
            .then((response) => response.json())
            .then((data) => {
                const user = data.users.id
                setUserImage(user.image)
            })
            .catch((error) => {
                console.error("Error retrieving user image:", error)
            })
    }

    return (
        <>
            <nav className="flex justify-center space-x-4">
                <Link to="edit">Edit Profile</Link>
                <Link to="preferences">Preferences</Link>
                <Link to="security">Security</Link>
            </nav>

            <div className="flex justify-center">
                <img src={userImage} alt="user avatar" />
            </div>
            <section className="h-dvh bg-bgwhite flex flex-col items-center lg:flex-row">
                <form action="submit" method="post" className="flex flex-col space-y-4">
                    <div className="flex flex-row">
                        <FormInput
                            placeholder={"Insert here your last name..."}
                            label={"Last Name"}
                            id={"last-name"}
                        />
                        <FormInput
                            placeholder={"Insert here your first name..."}
                            label={"First Name"}
                            id={"first-name"}
                        />
                    </div>
                    <FormInput
                        placeholder={"Insert here your date of birth..."}
                        label={"Date of Birth"}
                        id={"date-of-birth"}
                    />
                    <FormInput
                        placeholder={"Insert here your email address..."}
                        label={"Email"}
                        id={"email"}
                    />
                    <div className="flex flex-row">
                        <FormInput
                            placeholder={"Insert here your home address..."}
                            label={"Address"}
                            id={"address"}
                        />
                        <FormInput
                            placeholder={"Insert here your residing country..."}
                            label={"Country"}
                            id={"country"}
                        />
                    </div>
                    <ButtonComponent
                        arialabeltext={"send button"}
                        bgcolor="bgblack"
                        textColor="txwhite"
                        styles="h-12 p-4"
                    >
                        Save
                    </ButtonComponent>
                </form>
            </section>
        </>
    )
}
