import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import "../accountUserProps/accountUserProps.scss"

function AccountProps(props) {
    return (
        <section className={"acount" +(props.color ?"dark-mode": "")}>
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        {props.title}
                    </h3>
                    <p className="account-amount">
                        {props.price}
                    </p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    {props.color ? (
                        <FontAwesomeIcon icon = {faAngleRight} />
                    ) :
                    (
                        <button className="transaction-button">
                            View transactions
                        </button>
                    )}
                </div>
            </section>
    )
}

export default AccountProps