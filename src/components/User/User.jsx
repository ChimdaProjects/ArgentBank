import "./user.scss"
import { setOpenEdit } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

/**
 * Display the profile's user 
 * @returns { JSX } - react component
 */
const User = () => {
    const dispatch = useDispatch();
    const {userDatas, openEdit} = useSelector((state) => state.user);
    const handleEdit = () => {
        dispatch(setOpenEdit());
       
        if (openEdit) {
            const btnEdit = document.querySelector(".edit-button");
            btnEdit.style.display ="none";
        }
    }

    return (
        <div className="header">
            <h1 className={openEdit? "color-bk" : ""}>Welcome back<br />{openEdit ? "" : `${userDatas.firstName} ${userDatas.lastName} !`}  </h1>
            <button className="edit-button" onClick={handleEdit }>Edit Name</button>
      </div>  
   
      );
}
 
export default User;
