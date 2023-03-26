import Transaction from "../Transaction/Transaction";

/**
 * Display the list of transactions
 * @returns { JSX } - react component
 */
const TransactionsList = () => {
    return ( 
        <div>
            <h2 className="sr-only">Accounts</h2>
            <Transaction 
                typeAccount="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                balance="Available Balance"

            />
            <Transaction typeAccount="Argent Bank Savings (x6724)"
            amount="$10,928.42" balance="Available Balance"/>
            <Transaction 
                typeAccount="Argent Bank Credit Card (x5201)" 
                amount="$184.30"
                balance="Current balance"
            />
        </div>
     );
}
 
export default TransactionsList;