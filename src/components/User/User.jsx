import "./user.scss"
import { setOpenEdit } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
    const dispatch = useDispatch();
    const {userDatas} = useSelector((state) => state.user)

    return (
        <div className="header">
            <h1>Welcome back<br />{userDatas.firstName} {userDatas.lastName} ! </h1>
            <button className="edit-button" onClick={() => dispatch(setOpenEdit()) }>Edit Name</button>
      </div>  
   
      );
}
 
export default User;
