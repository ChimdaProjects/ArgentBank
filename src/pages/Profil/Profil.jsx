import { Fragment } from "react";
import EditUserName from "../../components/EditUserName/EditUserName";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import User from "../../components/User/User"
import { useSelector } from "react-redux";

const Profil = () => {
    const {success } = useSelector(
        (state) => state.auth
    )
    return ( 
        <Fragment>
            <NavBar  success={success}/>
            <main className="main bg-dark">
                <User  />
                <EditUserName />
                <TransactionsList />
            </main>
            <Footer />
        </Fragment>
      );
}
 
export default Profil; 
