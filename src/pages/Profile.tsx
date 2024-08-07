import editIcon from "../assets/edit-icon.svg"
import ButtonComponent from "../components/_atoms/Button/Button"
import CarouselNav from "../components/_atoms/CarouselNav/CarouselNav"
import FormInput from "../components/_atoms/Input/FormInput"
import { useAvatar, useFetchData } from "../hook/useHooks"

export default function Profile() {
    const { userAvatar, changeAvatar } = useAvatar()
    const { formData, errors, handleInputChange, handleSave } = useFetchData()

    return (
        <section className="dark:bg-dkrbgblue">
            <CarouselNav />
            <div className="flex">
                <div className="block smx:w-full lg:flex justify-center">
                    <div className="flex justify-center p-10 smx:justify-center">
                        <div className="relative">
                            <div className="lg:sticky lg:top-[14.9rem] flex flex-col items-end">
                                <img className="relative z-0" src={userAvatar} alt="user avatar" />
                                <button
                                    type="button"
                                    className="absolute bg-bgblack rounded-md p-1 z-10 bottom-0 right-10 smx:right-6"
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
                    </div>

                    <form
                        onSubmit={handleSave}
                        className="grid grid-cols-2 gap-x-4 gap-y-5 px-1 py-4 md:w-full lg:flex lg:flex-col"
                    >
                        <div>
                            <FormInput
                                placeholder={"Insert here your last name..."}
                                label={"Last Name"}
                                id={"lastName"}
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                            {errors.lastName && (
                                <p className="text-red-500">{errors.lastName[0]}</p>
                            )}
                        </div>
                        <div>
                            <FormInput
                                placeholder={"Insert here your first name..."}
                                label={"First Name"}
                                id={"firstName"}
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                            {errors.firstName && (
                                <p className="text-red-500">{errors.firstName[0]}</p>
                            )}
                        </div>
                        <div className="col-span-2">
                            <FormInput
                                placeholder={"Insert here your date of birth..."}
                                label={"Date of Birth"}
                                id={"dateOfBirth"}
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                            />
                            {errors.dateOfBirth && (
                                <p className="text-red-500">{errors.dateOfBirth[0]}</p>
                            )}
                        </div>
                        <div className="col-span-2">
                            <FormInput
                                placeholder={"Insert here your email address..."}
                                label={"Email"}
                                id={"email"}
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className="text-red-500">{errors.email[0]}</p>}
                        </div>
                        <div>
                            <FormInput
                                placeholder={"Insert here your home address..."}
                                label={"Address"}
                                id={"address"}
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                            {errors.address && <p className="text-red-500">{errors.address[0]}</p>}
                        </div>
                        <div>
                            <FormInput
                                placeholder={"Insert here your residing country..."}
                                label={"Country"}
                                id={"country"}
                                value={formData.country}
                                onChange={handleInputChange}
                            />
                            {errors.country && <p className="text-red-500">{errors.country[0]}</p>}
                        </div>

                        <ButtonComponent
                            type="submit"
                            arialabeltext={"save edits button"}
                            bgcolor="bg-bgblack"
                            textColor="text-txwhite"
                            styles="h-12 p-3 text-txwhite rounded-md font-semibold col-span-2 w-full smx:justify-self-center smx:justify-center smx:w-1/2 lg:ml-36"
                        >
                            Save
                        </ButtonComponent>
                    </form>
                </div>
            </div>
        </section>
    )
}
