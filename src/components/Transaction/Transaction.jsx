import { useSelector } from "react-redux";
import "./transaction.scss"

/**
 * Display one transaction
 * @returns { JSX } - react component
 */
const Transaction = ({typeAccount, amount, balance}) => {
  const {openEdit} = useSelector((state) => state.user)
    return ( 
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{typeAccount}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{balance}</p>
        </div>
        <div className={openEdit? "account-content-wrapper-edit cta":"account-content-wrapper cta"}>
          <button className={openEdit? "transaction-button-edit":"transaction-button"}>View transactions</button>
        </div>
      </section>
     );
}
 
export default Transaction;