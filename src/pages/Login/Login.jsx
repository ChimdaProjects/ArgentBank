import NavBar from "../../components/NavBar/NavBar";
import SignIn from "../../components/SignIn/SignIn";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react";


const Login = () => {
    return (
        <Fragment>
            <NavBar />
            <SignIn />
            <Footer />
        </Fragment>
    )
}

export default Login;