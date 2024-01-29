import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/logo_argent_bank.png"
import "../userNameEdit/userNameEdit.scss"

function UserNameEdit() {
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
                            test
                        </span>
                        <FontAwesomeIcon className="size" icon={faUserCircle} />
                    </NavLink>
                    <NavLink to="/userNameChange" className="green">
                        <FontAwesomeIcon className="size" icon={faGear} />
                    </NavLink>
                    <NavLink to="/" className="green">
                        <FontAwesomeIcon className="size" icon={faPowerOff} />
                    </NavLink>
                </div>
            </nav>
            <main className="main">
            <section className="update-name">
                <h1 className='title-update-name'>Edit user info</h1>
                <form className='update-name-form'>
                    <div className="update-name-input-wrapper">
                        <label htmlFor="userName">User name:</label>
                        <input type="text" id="userName" />
                    </div>
                    <div className="update-name-input-wrapper">
                        <label htmlFor="firstName">First name:</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div className="update-name-input-wrapper">
                        <label htmlFor="lastName">Last name:</label>
                        <input type="text" id="lastName" />
                    </div>
                    <div className='buttons-edit'>
                        <button type="submit" className="edit-button">Save</button>
                        <button type="button" className="edit-button">Cancel</button>
                    </div>
                </form>
            </section>
            </main>
        </>
    )
}

export default UserNameEdit