import "./editUserName.scss"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { editProfile, setOpenEdit } from "../../features/user/userSlice";

const EditUserName = () => {
    const inputFirstName = useRef();
    const inputLastName = useRef();
    const formRef = useRef();

    const dispatch = useDispatch();
    
    const handleSubmitEdit = (e) => {
        e.preventDefault();
        const data = {
            firstName : inputFirstName.current.value,
            lastName : inputLastName.current.value,
        }
        dispatch(editProfile(data))
        formRef.current.reset();
        dispatch(setOpenEdit(false));
    }
    const cancelDisplayFormEdit = () => {
        const form = document.querySelector(".editUser");
        form.style.display="none";
        
    }
    return ( 
        <div className="editUser">
            <form onSubmit={handleSubmitEdit} ref={formRef}>
                <div className="input-edit-wrapper">
                    <input className="input-edit" type="text" id="firstName" placeholder="firstName" ref = {inputFirstName}/>
                    <input className="input-edit" type="text" id="lastName" placeholder="lastName" ref = {inputLastName} />
                </div>
                <div className="btn-edit-wrapper">
                    <button className="edit-btn" type="submit" value="Save">Save</button>
                    <button className="edit-btn" type="submit" value="Cancel" onClick={cancelDisplayFormEdit}>Cancel</button> 
                </div>
              
            </form>
        </div>
     );
}
 
export default EditUserName;