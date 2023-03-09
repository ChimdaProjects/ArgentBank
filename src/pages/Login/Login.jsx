import NavBar from "../../components/NavBar/NavBar";
import SignIn from "../../components/SignIn/SignIn";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const Login = () => {
    const {userInfo, success } = useSelector(
        (state) => state.auth
    )
    const navigate = useNavigate();
    // redirect authenticated user to profile page
    useEffect(() => {
        if (success) {
            navigate('/profile');
        }
    }, [userInfo]);
    
    return (
        <Fragment>
            <NavBar success={success} />
            <SignIn />
            <Footer />
        </Fragment>
    )
}

export default Login;