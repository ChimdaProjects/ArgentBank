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

const Profil = () => {
    const dispatch = useDispatch();
    /*const getUserDatas = () => {
        axios
        .post("http://localhost:3001/api/v1/user/profile")
        .then((res) => dispatch(setUserDatas(res.data)));
       
    }*/
    const data = useSelector((state) => state.userDatas)
    useEffect(() => { 
       dispatch(profileUser(data))
    }, [])


    const {success } = useSelector(
        (state) => state.auth
    )
    const {openEdit} = useSelector(
        (state) => state.user
    )
    return ( 
        <Fragment>
            <NavBar  success={success}/>
            <main className="main bg-dark">
                <User />
                {openEdit && <EditUserName /> }
                
                <TransactionsList />
            </main>
            <Footer />
        </Fragment>
      );
}
 
export default Profil; 
