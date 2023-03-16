import { Fragment, useEffect } from "react";
import EditUserName from "../../components/EditUserName/EditUserName";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import User from "../../components/User/User"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserDatas } from "../../features/user/userSlice";
import { profileUser } from "../../features/user/userActions";
import "./profil.scss"
const Profil = () => {
    const dispatch = useDispatch();
    // state
    const { success } = useSelector(
        (state) => state.auth
    )
    const { openEdit } = useSelector(
        (state) => state.user
    )
    const data = useSelector((state) => state.userDatas);
    
    // fetch user's data at first render
    useEffect(() => { 
       dispatch(profileUser(data))
    }, [])

    return ( 
        <Fragment>
            <NavBar  success={success}/>
            <main className={openEdit ? "main bg-grey" : "main bg-dark" }>
                <User />
                { openEdit && <EditUserName /> }
                <TransactionsList />
            </main>
            <Footer />
        </Fragment>
      );
}
 
export default Profil; 
