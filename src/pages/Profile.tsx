import { Link } from "react-router-dom"
import Button from "../components/Button"

export default function Profile() {
    return (
        <>
            <nav>
                <Link to="edit">Edit Profile</Link>
                <Link to="preferences">Preferences</Link>
                <Link to="security">Security</Link>
            </nav>

            <form action="submit" method="post">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="last-name" />
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="first-name" />
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input type="date" name="date " />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="address">Address</label>
                <input type="text" name="address" />
                <label htmlFor="country">Country</label>
                <input type="text" name="country" />

                <Button styles={""} arialabeltext={"button"} children={""}></Button>
            </form>
        </>
    )
}
