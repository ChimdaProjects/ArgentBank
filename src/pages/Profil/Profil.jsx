// react
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../../features/user/userActions";
// components
import EditUserName from "../../components/EditUserName/EditUserName";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import User from "../../components/User/User"
import Loading from "../../components/Loading/Loading";

// style
import "./profil.scss"

/**
 * Display the user's profile page
 * @returns { JSX } react component
 */
const Profil = () => {
    const dispatch = useDispatch();
    // state
    const { success, loading } = useSelector(
        (state) => state.auth
    )
    const { openEdit } = useSelector(
        (state) => state.user
    )
    const data = useSelector((state) => state.userDatas);
    
    // fetch user's data at first render
    useEffect(() => { 
       dispatch(profileUser(data));
    }, [])

    return ( 
        <Fragment>
            <NavBar  success= { success } />
            { loading ? <Loading /> : 
            <main className= { openEdit ? "main bg-grey" : "main bg-dark" } >
                 <User />
                 { openEdit && <EditUserName /> }
                 <TransactionsList />
             </main>
            }
            <Footer />
        </Fragment>
      );
}
 
export default Profil; 
