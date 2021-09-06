import React from 'react'
import { useState } from 'react';

function EditUser(props) {
    const changeEditStatus = props.changeEditStatus;
    const userEditObj = props.userEditObj;
    const getUserEditInfo = props.getUserEditInfo;
    const [userEdited, setUserEdited] = useState(userEditObj);

    const isChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setUserEdited((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    const saveHandle = () => {
      getUserEditInfo(userEdited);
      changeEditStatus();
    }

    return (
        <div className="row">
          <div className="card text-left">
            <div
              className="card border-primary"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">Edit New User</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    defaultValue={userEditObj.name}
                    type="text"
                    name="name"
                    className="form-control"
                    aria-describedby="helpId"
                    placeholder="Username"
                    onChange={(e) => isChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    defaultValue={userEditObj.tel}
                    type="text"
                    name="tel"
                    className="form-control"
                    aria-describedby="helpId"
                    placeholder="Phone"
                    onChange={(e) => isChange(e)}
                  />
                </div>
                <div className="form-group">
                  <select
                    defaultValue={userEditObj.permission}
                    className="form-select"
                    name="permission"
                    aria-label="Default select example"
                    onChange={(e) => isChange(e)}
                  >
                    <option defaultValue>chon quyen mac dinh</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Mod</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <button type="submit" value="save" className="btn btn-block btn-primary" onClick={()=> saveHandle()}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default EditUser
