import React from "react";
import TableDataRow from "./TableDataRow";

function TableData(props) {
  const dataUser = props.dataUserProps;
  const editUser = props.editUser;
  const connectFormEdit = props.connectFormEdit;
  const deleteUser = props.deleteUser;

  const deleteUserClick = (id) =>{
    deleteUser(id);
  }

  const mappingDataUserHandle = () =>
    dataUser.map((value, key) => (
      <TableDataRow
      deleteUserTableData={(id) => deleteUserClick(id)}
      changeEditStatus = {() => connectFormEdit()}
        editUserRow={(user) => editUser(value)}
        data={value}
        key={key}
      />
      
    ));
  return (
    <div className="col">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            
            <th>Ten</th>
            <th>Dien Thoai</th>
            <th>Quyen</th>
            <th>Thao Tac</th>
          </tr>
        </thead>
        <tbody>{mappingDataUserHandle()}</tbody>
      </table>
    </div>
  );
}

export default TableData;
