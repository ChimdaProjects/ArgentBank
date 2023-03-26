// style
import "./navBar.scss"
//img
import logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import { logout } from "../../features/auth/authSlice";
import { setOpenEdit } from "../../features/user/userSlice";

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
        dispatch(setOpenEdit(false))
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
                        <a className="main-nav-item"> 
                            <i className="fa fa-user-circle"></i>
                                {userDatas.firstName}
                        </a>
                        
                        <a className="main-nav-item"  onClick={handleLogout}>
                            <i className="fa fa-sign-out"></i>
                                Sign out
                        </a>
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