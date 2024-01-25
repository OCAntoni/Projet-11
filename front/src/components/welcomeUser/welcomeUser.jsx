import { NavLink, useNavigate } from "react-router-dom"
import "../welcomeUser/welcomeUser.scss"

function WelcomeUser() {
    return (
        <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <NavLink to="/UserNameChange">
            <button className="edit-button">Edit Name</button>
            </NavLink>
        </div>
    )
}

export default WelcomeUser