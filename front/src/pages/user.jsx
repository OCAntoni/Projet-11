import Nav from "../components/nav/nav"
import WelcomeUser from "../components/welcomeUser/welcomeUser"
import AccountUser from "../components/accountUser/accountUser"
import Footer from "../components/footer/footer"
import "../styles/main.scss"

function User() {
    return (
        <div className="body">
            <Nav />
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