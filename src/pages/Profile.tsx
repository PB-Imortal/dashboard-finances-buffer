import ButtonComponent from "../components/_atoms/Button/Button";
import CarouselNav from "../components/_atoms/CarouselNav";
import FormInput from "../components/_atoms/Input/FormInput";
import editIcon from "../assets/edit-icon.svg";
import { useAvatar, useFetchData } from "../hook/useHooks";

export default function Profile() {
  const { userAvatar, changeAvatar } = useAvatar();
  const { formData, handleInputChange, handleSave } = useFetchData();

  return (
    <>
      <CarouselNav />
      <div className="block smx:flex smx:justify-center smx:items-center">
        <div className="flex justify-center p-10 smx:justify-center smx:items-center">
          <div className="relative">
            <img className="smx:mb-60" src={userAvatar} alt="user avatar" />
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
          onSubmit={handleSave}
          className="grid grid-cols-2 gap-x-4 gap-y-5 px-1 md:w-full"
        >
          <FormInput
            placeholder={"Insert here your last name..."}
            label={"Last Name"}
            id={"lastName"}
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <FormInput
            placeholder={"Insert here your first name..."}
            label={"First Name"}
            id={"firstName"}
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <FormInput
            placeholder={"Insert here your date of birth..."}
            label={"Date of Birth"}
            id={"dateOfBirth"}
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            styles="col-span-2"
          />
          <FormInput
            placeholder={"Insert here your email address..."}
            label={"Email"}
            id={"email"}
            value={formData.email}
            onChange={handleInputChange}
            styles="col-span-2"
          />
          <FormInput
            placeholder={"Insert here your home address..."}
            label={"Address"}
            id={"address"}
            value={formData.address}
            onChange={handleInputChange}
          />
          <FormInput
            placeholder={"Insert here your residing country..."}
            label={"Country"}
            id={"country"}
            value={formData.country}
            onChange={handleInputChange}
          />

          <ButtonComponent
            type="submit"
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
  );
}
