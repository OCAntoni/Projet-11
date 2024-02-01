import UserNameEdit from "../components/userNameEdit/userNameEdit"
import AccountUser from "../components/accountUser/accountUser"
import Footer from "../components/footer/footer"
import "../styles/main.scss"

function UserNameChange() {
    return (
        <>
            <UserNameEdit />
             <AccountUser color="dark-mode" />
            <Footer />
        </>
    )
}

export default UserNameChange