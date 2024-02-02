import { NavLink, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditUserName } from "../fetchs/fetch-profile";
import { updateUser } from "../../store/userSlice";
import { logout } from "../../store/authSlice";
import { clearUser } from "../../store/userSlice";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/logo_argent_bank.webp"
import "../userNameEdit/userNameEdit.scss"

function UserNameEdit() {
    const user = useSelector((state) => state.user);
    const token = useSelector ((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [newUserName, setNewUserName] = useState(user.userName);

    const handleSaveClick = async (e) => {
        e.preventDefault();
        const response = fetchEditUserName(token, newUserName)
        if(response !== "null") {
            dispatch(updateUser(newUserName));
            alert("User Name change performed succesfuly !")
        } else {
            alert("Error, change didn't work, please try again !")
        };
    };

    const handleCancelClick = async (e) => {
        e.preventDefault();
        navigate('/user');
    };

    const handleLogout = () => { 
        dispatch(logout());
        dispatch(clearUser());
        navigate('/');
    };
    
    return (
        <>
            <nav className="main-nav">
                <NavLink to="/" className="link-home">
                    <img className="logo-image" src={Logo} alt="Logo Argent Bank" />
                    <h1 className="logo-text">
                        <span className="logo-text-bank">
                            Argent
                        </span>
                        <span>
                            Bank
                        </span>
                    </h1>
                </NavLink>
                <div className="other-link">
                    <NavLink to="/user" className="green">
                        <span className="username">
                            {user.userName}
                        </span>
                        <FontAwesomeIcon className="size" icon={faUserCircle} />
                    </NavLink>
                    <NavLink to="/userNameChange" className="green">
                        <FontAwesomeIcon className="size" icon={faGear} />
                    </NavLink>
                    <NavLink to="/" className="green">
                        <FontAwesomeIcon onClick={handleLogout} className="size" icon={faPowerOff} />
                    </NavLink>
                </div>
            </nav>
            <main className="main">
            <section className="update-name">
                <h1 className='title-update-name'>Edit user info</h1>
                <form className='update-name-form'>
                    <div className="update-name-input-wrapper">
                        <label htmlFor="userName">User name:</label>
                        <input 
                            type="text" 
                            id="userName"
                            placeholder={user.userName} 
                            onChange={e => setNewUserName(e.target.value)}
                        />
                    </div>
                    <div className="update-name-input-wrapper">
                        <label htmlFor="firstName">First name:</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            disabled={true} 
                            defaultValue={user.firstName}
                        />
                    </div>
                    <div className="update-name-input-wrapper">
                        <label htmlFor="lastName">Last name:</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            disabled={true} 
                            defaultValue={user.lastName}
                        />
                    </div>
                    <div className='buttons-edit'>
                        <button onClick={handleSaveClick} type="submit" className="edit-button">Save</button>
                        <button onClick={handleCancelClick} type="button" className="edit-button">Cancel</button>
                    </div>
                </form>
            </section>
            </main>
        </>
    )
}

export default UserNameEdit