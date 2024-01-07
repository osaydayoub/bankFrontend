import React, { useEffect, useState } from "react";
import "./UsersPage.css";
import axios from "axios";
import User from "../../components/User/User";
import NewUser from "../../components/NewUser/NewUser";
function UsersPage() {
  const [dataIsAvilabale, setDataIsAvilabale] = useState(false);
  const [displayUsers, setDisplayUsers] = useState("");
  const [users, setUsers] = useState(null);
  const [allUsers, addUser] = ["allUsers", "addUser"];
  const getUsersList = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_API_LINK);
      setUsers(res.data);
    } catch (error) {
      console.log("somthing rong happend!");
    }
    setDataIsAvilabale(true);
  };
  useEffect(() => {
    getUsersList();
  }, []);

  // function handleGetAll() {
  //   setDisplayUsers(allUsers);
  // }
  async function handleAddUser({ ID, cash, credit }) {
    try {
      console.log("handleAddUser");

      const res = await axios.post(import.meta.env.VITE_API_LINK, {
        ID,
        cash,
        credit,
      });
      console.log(res.data);
    } catch (error) {
      console.log("somthing rong happend!");
    }
  }
  return (
    <div className="UsersPage page">
      <h1>UsersPage</h1>
      <div className="btn-users-container">
        <button className="btn-page" onClick={() => setDisplayUsers(allUsers)}>
          Click To get all users
        </button>
        <button className="btn-page" onClick={() => setDisplayUsers(addUser)}>
          Add New User
        </button>
      </div>

      {displayUsers === allUsers && (
        <div className="users-container">
          {!dataIsAvilabale && <h1>{`Data is loading...`}</h1>}
          {dataIsAvilabale && users && (
            <div className="users">
              {users.map((u, index) => {
                return <User key={index} user={u} />;
              })}
            </div>
          )}
          <div className="users-btn">
            <button onClick={() => setDisplayUsers("")}>Close</button>
            <button onClick={() => getUsersList()}>Refresh</button>
          </div>
        </div>
      )}

      {displayUsers === addUser && (
        <div className="add-container">
          <NewUser handleAddNewUser={handleAddUser} />
          <button onClick={() => setDisplayUsers("")}>Close</button>
        </div>
      )}
    </div>
  );
}

export default UsersPage;
