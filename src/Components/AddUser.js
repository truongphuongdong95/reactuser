import React, { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

function AddUser(props) {
  const [user, setUser] = useState({
    id: uuidv4(),
    name: "",
    tel: "",
    permission: "",
  });
  const addUser = props.addUser;

  const isChangeAddUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    //console.log(item)
  };
  
  const checkShowForm = () => {
    if (props.showForm === true) {
      return (
        <div className="col-3">
          <form>
            <div className="card text-left">
              <div
                className="card border-primary"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Add New User</div>
                <div className="card-body text-primary">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      aria-describedby="helpId"
                      placeholder="Username"
                      value={user.name}
                      onChange={(e) => isChangeAddUser(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="tel"
                      className="form-control"
                      aria-describedby="helpId"
                      placeholder="Phone"
                      value={user.tel}
                      onChange={(e) => isChangeAddUser(e)}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-select"
                      name="permission"
                      aria-label="Default select example"
                      onChange={(e) => isChangeAddUser(e)}
                    >
                      <option defaultValue>chon quyen mac dinh</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Mod</option>
                      <option value={3}>User</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="reset"
                      className="btn btn-block btn-primary"
                      onClick={(u) => addUser(user)}
                      value="Add New"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  
  };
  //console.log(user);
  return <div>{checkShowForm()}
  
  </div>;
}

export default AddUser;
