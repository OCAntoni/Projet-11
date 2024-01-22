import { NavLink } from "react-router-dom"
import WelcomeUser from "../components/welcomeUser/welcomeUser"
import AccountUser from "../components/accountUser/accountUser"
import Footer from "../components/footer/footer"
import Logo from "../assets/argentBankLogo.png"
import "../styles/main.scss"

function User() {
    return (
        <div>
            <nav className="main-nav">
                <NavLink to="/">
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink to="/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </NavLink>
                    <NavLink to="/" className="main-nav-item">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                </div>
            </nav>
            <main className="main bg-dark">
                <WelcomeUser />
                <h2 className="sr-only">Accounts</h2>
                <AccountUser />
            </main>
        <Footer />
    </div>
    )
}

export default User