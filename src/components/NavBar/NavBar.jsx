// style
import "./navBar.scss"
//img
import logo from "../../assets/argentBankLogo.png";
import { NavLink, redirect } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from "react";


const NavBar = ({success}) => {
    const {logout} = useSelector((state) => state.auth)
    const dispatch = useDispatch();
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
                
                    <NavLink className="main-nav-item" to="/logout"  onClick={handleLogout}>
                    <i className="fa fa-sign-out"></i>
                        Sign out
                        
                    </NavLink>
                 
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