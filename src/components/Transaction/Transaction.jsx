import { useSelector } from "react-redux";
import "./transaction.scss"

const Transaction = () => {
  const {openEdit} = useSelector((state) => state.user)
    return ( 
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className={openEdit? "account-content-wrapper-edit cta":"account-content-wrapper cta"}>
          <button className={openEdit? "transaction-button-edit":"transaction-button"}>View transactions</button>
        </div>
      </section>
     );
}
 
export default Transaction;