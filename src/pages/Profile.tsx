import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/_atoms/Button";
import FormInput from "../components/_atoms/FormInput";

export default function Profile() {
  const [userImage, setUserImage] = useState("");

  if (!userImage) {
    fetch("/database/db.json")
      .then((response) => response.json())
      .then((data) => {
        const user = data.users.id;
        setUserImage(user.image);
      })
      .catch((error) => {
        console.error("Error retrieving user image:", error);
      });
  }

  return (
    <>
      <nav>
        <Link to="edit">Edit Profile</Link>
        <Link to="preferences">Preferences</Link>
        <Link to="security">Security</Link>
      </nav>

      <img src={userImage} alt="user avatar" />

      <form action="submit" method="post">
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
        />
        <FormInput
          placeholder={"Insert here your email address..."}
          label={"Email"}
          id={"email"}
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

        <Button
          styles="p-3 bg-bgblack text-txwhite rounded-md font-semibold "
          arialabeltext={"button"}
        ></Button>
      </form>
    </>
  );
}
