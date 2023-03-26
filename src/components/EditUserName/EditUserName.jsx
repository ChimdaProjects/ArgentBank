import "./editUserName.scss"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenEdit } from "../../features/user/userSlice";
import { profileUserEdit } from "../../features/user/userActions";

/**
 * Display the modal to edit data's profile (firstname and lastname)
 * @returns { JSX } component React
 */
const EditUserName = () => {
    const inputFirstName = useRef();
    const inputLastName = useRef();

    const dispatch = useDispatch();
    const {userDatas} = useSelector((state) => state.user);

    // Submit datas when the user clicks to save button
    const handleSubmitEdit = () => {
        // datas of inputs
        const data = {
            firstName : inputFirstName.current.value,
            lastName : inputLastName.current.value,
        }

        if (data.firstName.length > 0 && data.lastName.length > 0) {
            // dispatch action to update data's profile
            dispatch(profileUserEdit(data))
            //clear input
            inputFirstName.current.value="";
            inputLastName.current.value ="";
            // dispatch action to close the modale
            dispatch(setOpenEdit({payload:false}));
        } 
    }
    // Hide the modale when the user clicks to cancel button  
    const cancelDisplayFormEdit = () => {
        const form = document.querySelector(".editUser");
        form.style.display="none";
        // dispatch action to close the edit's modale
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