import AccountProps from "../accountUserProps/accountProps"
import "../accountUser/accountUser.scss"

function AccountUser() {
    return (
        <>
            <AccountProps title= "Argent Bank Checking (x8349)" price="$2,082.79" />
            <AccountProps title= "Argent Bank Savings (x6712)" price="$10,928.42" />
            <AccountProps title= "Argent Bank Checking (x8349)" price="$184.30" />
        </>
    )
}

export default AccountUser