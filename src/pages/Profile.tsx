import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FormInput from "../components/FormInput";

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

        <Button styles={""} arialabeltext={"button"} children={""}></Button>
      </form>
    </>
  );
}
