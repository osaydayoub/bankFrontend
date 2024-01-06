import React from "react";
import "./User.css"

function User({ user }) {
  return (
    <div className="user-container">
      <p>{`ID: ${user.ID}`}</p>
      <p>{`cash: ${user.cash}`}</p>
      <p>{`credit: ${user.credit}`}</p>
    </div>
  );
}

export default User;
