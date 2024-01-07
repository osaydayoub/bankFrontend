import React, { useState } from "react";

function Withdraw({handler}) {
    const [userID, setuserID] = useState("");
    const [withdraw, setWithdraw] = useState(0);
    function handleSubmit(e) {
      e.preventDefault();
      handler({
        id: userID,
        amount: withdraw,
      });
    }
  return (
    <div>
      <h3>Withdraw</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="userId">User Id</label>
          <br />
          <input
            type="text"
            id="userId"
            onChange={(e) => setuserID(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="withdraw">Withdraw Amount</label>
          <br />
          <input
            type="number"
            id="withdraw"
            onChange={(e) => setWithdraw(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
}

export default Withdraw;
