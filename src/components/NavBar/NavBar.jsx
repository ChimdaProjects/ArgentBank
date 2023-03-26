// react
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// features
import { logout } from "../../features/auth/authSlice";
// style
import "./navBar.scss"
//img
import logo from "../../assets/argentBankLogo.png";

/**
 * Display the navbar of the site
 * @param { boolean } success - state 
 * @returns { JSX } react component
 */
const NavBar = ({success}) => {
    // state selector
    const {userDatas} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    // logout when the user clicks to logout button
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div> 
                { success ? (
                    <>
                        <button className="main-nav-item" > 
                            <i className="fa fa-user-circle"></i>
                                {userDatas.firstName}
                        </button>
                        
                        <button className="main-nav-item" onClick={handleLogout}>
                            <i className="fa fa-sign-out"></i>
                                Sign out
                        </button>
                    </>
                ) :
                (
                    <NavLink className="main-nav-item" to="/signin">
                    <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                )
                }
                
            </div>
        </nav>
    )
}

export default NavBar;