import React, { useEffect, useState } from "react";
import "./UsersPage.css";
import axios from "axios";
import User from "../../components/User/User";
function UsersPage() {
  const [displayUsers, setDisplayUsers] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getUsersList = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_API_LINK);
        setUsers(res.data);
      } catch (error) {
        console.log("somthing rong happend!");
      }
    };
    getUsersList();
  }, []);

  function handleClick() {
    setDisplayUsers(true);
  }
  return (
    <div className="UsersPage page">
      <h1>UsersPage</h1>
      <button onClick={handleClick}>Click To get all users</button>
      {displayUsers && (
        <div className="users-container">
          {/* <h1>Users:</h1> */}
          {users && <div className="users">{users.map((u,index)=>{
            return <User key={index} user={u}/>
          })}</div>}
          <button onClick={() => setDisplayUsers(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default UsersPage;
