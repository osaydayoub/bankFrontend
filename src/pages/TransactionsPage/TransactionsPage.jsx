import React from "react";
import './TransactionsPage.css'

function TransactionsPage() {
  function handelDeposit() {
    console.log("handelDeposit");
  }
  function handelUpdateCredit() {
    console.log("handelUpdateCredit");
  }
  function handelWithdraw() {
    console.log("handelWithdraw ");
  }
  function handelTransfer() {
    console.log("handelTransfer");
  }

  const Transactions = [
    "Deposit",
    "Update Credit",
    "Withdraw Money",
    "Transfer Funds",
  ];
  const handlerArray = [
    handelDeposit,
    handelUpdateCredit,
    handelWithdraw,
    handelTransfer,
  ];
  return (
    <div className="TransactionsPage page">
      <h1>Transactions</h1>
      <div className="transactions_container">
        {Transactions.map((transaction, index) => {
          return (
            <button key={index} onClick={handlerArray[index]}>
              {transaction}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TransactionsPage;
