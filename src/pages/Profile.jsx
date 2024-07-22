import { Link } from "react-router-dom"

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
            <input type="text" name="date " />
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" />
        </form>
        </>
    )
}