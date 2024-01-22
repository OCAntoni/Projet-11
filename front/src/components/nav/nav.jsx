import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/argentBankLogo.png"
import "../nav/nav.scss"

function Nav() {
    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img 
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink to="/signin" className="main-nav-item">
                        <FontAwesomeIcon icon={faUserCircle} />
                            Sign In
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Nav