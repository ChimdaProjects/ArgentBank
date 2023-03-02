import Transaction from "../Transaction/Transaction";

const TransactionsList = () => {
    return ( 
        <div>
            <h2 className="sr-only">Accounts</h2>
            <Transaction/>
            <Transaction />
            <Transaction />
        </div>
     );
}
 
export default TransactionsList;