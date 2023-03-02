import "./editUserName.scss"
const EditUserName = () => {
    return ( 
        <div className="editUser">
            <form>
                <div className="input-edit-wrapper">
                    <input className="input-edit" type="text" id="firstName" placeholder="firstName"/>
                    <input className="input-edit" type="text" id="lastName" placeholder="lastName" />
                </div>
                <div className="btn-edit-wrapper">
                    <button className="edit-btn" type="submit" value="Save">Save</button>
                    <button className="edit-btn" type="submit" value="Cancel">Cancel</button> 
                </div>
              
            </form>
        </div>
     );
}
 
export default EditUserName;