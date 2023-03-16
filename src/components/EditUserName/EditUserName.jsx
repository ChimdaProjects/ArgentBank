import "./editUserName.scss"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { editProfile, setOpenEdit } from "../../features/user/userSlice";
import { profileUserEdit } from "../../features/user/userActions";

const EditUserName = () => {
    const inputFirstName = useRef();
    const inputLastName = useRef();
    const formRef = useRef();
    const dispatch = useDispatch();
    const {userDatas} = useSelector((state) => state.user);

    const handleSubmitEdit = () => {
        
        const data = {
            firstName : inputFirstName.current.value,
            lastName : inputLastName.current.value,
        }
        if (data.firstName.length > 0 && data.lastName.length > 0) {
            dispatch(profileUserEdit(data))
            inputFirstName.current.value="";
            inputLastName.current.value ="";

            dispatch(setOpenEdit({payload:false}));
        }
       
    }
    const cancelDisplayFormEdit = () => {
        const form = document.querySelector(".editUser");
        form.style.display="none";
        dispatch(setOpenEdit(false))
        
    }
    return ( 
        <div className="editUser">
            
                <div className="input-edit-wrapper">
                    <input className="input-edit" type="text" id="firstName" autoFocus placeholder={userDatas.firstName} ref = {inputFirstName}/>
                    <input className="input-edit" type="text" id="lastName" placeholder={userDatas.lastName} ref = {inputLastName} />
                </div>
                <div className="btn-edit-wrapper">
                    <button className="edit-btn" type="submit" value="Save" onClick={handleSubmitEdit} >Save</button>
                    <button className="edit-btn" type="submit" value="Cancel" onClick={cancelDisplayFormEdit}>Cancel</button> 
                </div>
              
          
        </div>
     );
}
 
export default EditUserName;