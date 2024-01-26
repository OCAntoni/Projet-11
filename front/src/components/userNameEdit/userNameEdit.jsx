import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import "../userNameEdit/userNameEdit.scss"

function UserNameEdit() {
    return (
        <div className="main bg-dark">
            <section className="update-name">
                <FontAwesomeIcon icon={faRightLeft} />  
                <h1>User Name change</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="userName">Username</label>
                        <input type="text" id="userName" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" />
                    </div>
                    <button type="submit" className="sign-in-button">Save changes</button>
                </form>
            </section>
        </div>
    )
}

export default UserNameEdit