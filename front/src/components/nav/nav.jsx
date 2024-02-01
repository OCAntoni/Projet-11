import { NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../store/authSlice";
import { clearUser } from "../../store/userSlice";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/argentBankLogo.png"
import "../nav/nav.scss"

function Nav() {
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const handleSwitchPage = () => {
        navigate('/user');
    }

    const handleLogout = () => { 
        dispatch(logout());
        dispatch(clearUser());
        navigate('/');
    };

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
                {token ? ( //si token connexion présent afficher
                    <div className="link-logout">
                        <button onClick={handleSwitchPage} className="logout">
                            <p>{user.userName}</p>
                        </button>
                        <button onClick={handleLogout} className="logout">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            Sign Out</button>
                    </div>
                 ) : ( //si non présent afficher
                    <NavLink to="/signin" className="main-nav-item">
                        <FontAwesomeIcon icon={faUserCircle} />
                            Sign In
                    </NavLink>
                )}
                </div>
            </nav>
        </header>
    )
}

export default Nav