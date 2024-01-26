import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import "../userNameEdit/userNameEdit.scss"

function UserNameEdit() {
    return (
        <div>
            <section className="update-name">
                <FontAwesomeIcon icon={faRightLeft} />  
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
        </div>
    )
}

export default UserNameEdit