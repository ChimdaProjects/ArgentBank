import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/**
 * Display the private route to protect the user profile
 * @param { Object } children - props
 * @returns 
 */
const PrivateRoute = ({children}) => {
    const { success } = useSelector(state => state.auth);
    if (!success) {
        return <Navigate to="/signin" />
    }
    return children;
}

export default PrivateRoute;