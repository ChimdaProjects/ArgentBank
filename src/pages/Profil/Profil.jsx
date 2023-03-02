import { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Transaction from "../../components/Transaction/Transaction";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import User from "../../components/User/User"

const Profil = () => {
    return ( 
        <Fragment>
            <NavBar />
            <main className="main bg-dark">
                <User />
                <TransactionsList />
            </main>
            <Footer />
        </Fragment>
      );
}
 
export default Profil; 
