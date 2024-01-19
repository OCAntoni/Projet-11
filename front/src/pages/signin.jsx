import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from "../components/nav/nav"
import Footer from "../components/footer/footer"
import "../styles/main.scss"

function Signin() {
    return (
        <div className="body">
            <Nav />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <NavLink to="/user">
                        <button className="sign-in-button">Sign In</button>
                        </NavLink>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Signin