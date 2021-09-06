import React, { useState } from "react";
import EditUser from "./EditUser";

function Search(props) {
  const [tempSearchValue, setTempSearchValue] = useState("");
  const [userObj, setUserObj] = useState({});
  const connectAddButton = props.connectAddButton;
  const showForm = props.showForm;
  const showEdit = props.showEdit;
  const connectSearch = props.connectSearchProps;
  const connectFormEdit = props.connectFormEdit;
  const userEditObj = props.userEditObj;
  const getUserEditInfoApp = props.getUserEditInfo;

  const checkShowButtonHandle = () => {
    if(showForm ===  true){
      return <div className="btn btn-block btn-outline-danger" onClick={() => connectAddButton()}>Đóng Lại</div>;
    }
    else{
      return <div className="btn btn-block btn-outline-primary" onClick={() => connectAddButton()}>Thêm Mới</div>;
    }
  }

  const isChangeHandle = (e) => {
    setTempSearchValue(e.target.value);
    connectSearch(tempSearchValue);
  }

  const getUserEditInfo = (info) => {
    setUserObj(info);
    getUserEditInfoApp(info);
  }

  const isShowEditForm = () => {
    if(showEdit === true){
      return <EditUser getUserEditInfo={(info) => getUserEditInfo(info)} userEditObj={userEditObj} changeEditStatus = {() => connectFormEdit()}/> 
    }
  }

  return (
    <div className="col-12">
      {isShowEditForm()}
      <div className="form-group">
        <div className="btn-group">
          <input
            type="text"
            className="form-control"
            placeholder="nhap tu khoa"
            onChange={(e)=>isChangeHandle(e)}
          />
          <div className="btn btn-success" onClick={(dldasdsd) => connectSearch(tempSearchValue)}>Search</div>
        </div>
        <div className="btn-group">
          {checkShowButtonHandle()}
        </div>
      </div>
    </div>
  );
}

export default Search;
