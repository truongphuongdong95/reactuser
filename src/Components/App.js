import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import DataUser from "./Data.json";
function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState(DataUser);
  const [searchText, setSearchText] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [userEditObj, setUserEditObj] = useState({});
  const [userObj, setUserObj] = useState({});
  const changeShowEditHandle = () => {
    setShowEdit(!showEdit);
  }

  const changeShowFormHandle = () => {
    setShowForm(!showForm);
  };

  const connectSearchHandle = (dl) => {
    setSearchText(dl);
  };

  const editUserHandle = (user) => {
    setUserEditObj(user)
  }

  const getNewUserHandle = (user) => {
    setData([...data,user]);
  };

  const getUserEditInfo = (info) => {
    
    data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = Number(info.permission);
      }
    })
    localStorage.setItem('user',JSON.stringify(data));
  }

  const deleteUser = (id) =>{
    const tempData = data.filter(item => item.id != id);
    setData(tempData);
    localStorage.setItem('user',JSON.stringify(tempData));
  }

  var result = [];

  data.forEach((item) => {
    if (item.name.indexOf(searchText) !== -1) {
      result.push(item);
    }
  });

  useEffect(() => {
    if(localStorage.getItem('user') === null){
      localStorage.setItem('user',JSON.stringify(DataUser));
    }
    else{
      let temp = JSON.parse(localStorage.getItem('user'));
      setData(temp);
    }
  },[])

  useEffect(() => {
      localStorage.setItem('user',JSON.stringify(data));
  },[data])
  
  return (
    <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search
              connectSearchProps={(dt) => connectSearchHandle(dt)}
              showForm={showForm}
              connectAddButton={() => changeShowFormHandle()}
              showEdit={showEdit}
              connectFormEdit={() => changeShowEditHandle()}
              userEditObj={userEditObj}
              getUserEditInfo={(info) => getUserEditInfo(info)}
            />
            <TableData 
            deleteUser={(id) => deleteUser(id)}
            connectFormEdit={() => changeShowEditHandle()}
            editUser={(user) => editUserHandle(user)} dataUserProps={result.length > 0 ? result : data} />
            <AddUser
              addUser={(user) => getNewUserHandle(user)}
              showForm={showForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
