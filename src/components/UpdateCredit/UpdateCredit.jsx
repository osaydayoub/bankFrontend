import React, { useState } from 'react'

function UpdateCredit({handler}) {
  const [userID, setuserID] = useState("");
  const [credit, setCredit] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    handler({
      id: userID,
      newCredit: credit,
    });
  }
  return (
    <div>
        <h3>Update Credit</h3>
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
          <label htmlFor="newCredit">New Credit</label>
          <br />
          <input
            type="number"
            id="newCredit"
            onChange={(e) => setCredit(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateCredit