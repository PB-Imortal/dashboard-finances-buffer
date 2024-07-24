import { useState } from "react"

import FormInput from "../components/_atoms/Input/FormInput"
import ButtonComponent from "../components/_atoms/Button/Button"
import CarouselNav from "../components/_atoms/CarouselNav"

import editIcon from "../assets/edit-icon.svg"

export default function Profile() {
    const [userAvatar, setUserAvatar] = useState(
        "https://xsgames.co/randomusers/assets/avatars/pixel/49.jpg"
    )

    const changeAvatar = () => {
        const newAvatarUrl = `https://xsgames.co/randomusers/avatar.php?g=pixel&${new Date().getTime()}`
        setUserAvatar(newAvatarUrl)
    }

    return (
        <>
            <CarouselNav />
            <div className="block smx:flex smx:justify-center smx:items-center">
    <div className="flex justify-center p-10 smx:justify-center smx:items-center">
                    <div className="relative">
                        <img
                            className="smx:mb-60"
                            src={userAvatar}
                            alt="user avatar"
                        />
                        <button
                            type="button"
                            className="bg-bgblack rounded-md z-1 max-w-md absolute right-3 bottom-0 p-2 group smx:mb-60"
                        >
                            <img
                                className="w-full h-full"
                                src={editIcon}
                                alt="edit button"
                                onClick={changeAvatar}
                            />
                            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
                                Change Avatar
                            </div>
                        </button>
                    </div>
                </div>

                <form
                    action="submit"
                    method="post"
                    className="grid grid-cols-2 gap-x-4 gap-y-5 px-1 md:w-full"
                >
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
                    <FormInput
                        placeholder={"Insert here your date of birth..."}
                        label={"Date of Birth"}
                        id={"date-of-birth"}
                        styles="col-span-2"
                    />
                    <FormInput
                        placeholder={"Insert here your email address..."}
                        label={"Email"}
                        id={"email"}
                        styles="col-span-2"
                    />

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

                    <ButtonComponent
                        arialabeltext={"send button"}
                        bgcolor="bg-bgblack"
                        textColor="text-txwhite"
                        styles="h-12 p-3 text-txwhite rounded-md font-semibold col-span-2 w-full min-[440px]:justify-self-center min-[440px]:justify-center lg:w-1/2"
                    >
                        Save
                    </ButtonComponent>
                </form>
            </div>
        </>
    )
}
