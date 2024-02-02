import UserNameEdit from "../components/userNameEdit/userNameEdit"
import AccountProps from "../components/accountUserProps/accountProps"
import Footer from "../components/footer/footer"
import "../styles/main.scss"

function UserNameChange() {
    return (
        <>
            <UserNameEdit />
            <AccountProps color="dark-mode" title= "Argent Bank Checking (x8349)" price="$2,082.79" />
            <AccountProps color="dark-mode" title= "Argent Bank Savings (x6712)" price="$10,928.42" />
            <AccountProps color="dark-mode" title= "Argent Bank Checking (x8349)" price="$184.30" />
            <Footer />
        </>
    )
}

export default UserNameChange