import React from "react";

function TableDataRow(props) {
    const data = props.data;
    const deleteUserTableData = props.deleteUserTableData;

    const permissionShow = () => {
        if(data.permission == 1){
            return "Admin";
        }
        else if(data.permission == 2){
            return "Moderator";
        }
        else {
            return "User";
        }
    }
    const editUserRow = props.editUserRow;
    const changeEditStatus = props.changeEditStatus;
    const editUserClick = () => {
      editUserRow();
      changeEditStatus();
    }

    const deleteUserClick = (id) =>{
      deleteUserTableData(id);
    }
  return (
    <tr>
      <td scope="row">{data.name}</td>
      <td>{data.tel}</td>
      <td>{permissionShow()}</td>
      <td>
        <div className="btn-group">
          <div className="btn btn-warning sua" onClick={() => editUserClick()}>
            <i className="fa fa-edit" />
            Edit
          </div>
          <div className="btn btn-danger xoa" onClick={(id) => deleteUserClick(data.id)}>
            <i className="fa fa-delete" />
            Delete
          </div>
        </div>
      </td>
    </tr>
  );
}

export default TableDataRow;
