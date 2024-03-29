import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux';
import "../welcomeUser/welcomeUser.scss"

function WelcomeUser() {
    const user = useSelector((state) => state.user);
    return (
        <div className="header">
            <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
            <NavLink to="/UserNameChange">
            <button className="edit-button">Edit Name</button>
            </NavLink>
        </div>
    )
}

export default WelcomeUser