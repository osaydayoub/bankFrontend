import React, { useState } from "react";
import "./TransactionsPage.css";
import Deposit from "../../components/Deposit/Deposit";
import axios from "axios";

function TransactionsPage() {
  const [transactionToDisplay, setTransactionToDisplay] = useState("");
  const Transactions = [
    "Deposit",
    "Update Credit",
    "Withdraw Money",
    "Transfer Funds",
  ];
  const [deposit, updateCredit, withdrawMoney, transferFunds] = Transactions;

  async function handelDeposit({ ID, amount }) {
    const deposit = async () => {
      try {
        const res = axios.put(
          `${import.meta.env.VITE_API_LINK}/depositCash`,
          null,
          {
            params: {
              id: ID,
              amount: amount,
            },
          }
        );
        setTransactionToDisplay("");
      } catch (error) {
        console.log(error.response.data);
      }
    };
    await deposit();
    console.log("handelDepositComleted");
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

  const handlerArray = [
    () => {
      setTransactionToDisplay(deposit);
    },
    () => {
      setTransactionToDisplay(updateCredit);
    },
    () => {
      setTransactionToDisplay(withdrawMoney);
    },
    () => {
      setTransactionToDisplay(transferFunds);
    },
  ];
  return (
    <div className="TransactionsPage page">
      <h1>Transactions</h1>
      <div className="transactions_container">
        {Transactions.map((transaction, index) => {
          return (
            <button
              className="btn-page"
              key={index}
              onClick={handlerArray[index]}
            >
              {transaction}
            </button>
          );
        })}
      </div>
      <div className="transaction-container">
        {transactionToDisplay === deposit && (
          <>
            <Deposit handleDeposit={handelDeposit} />
          </>
        )}
      </div>
    </div>
  );
}

export default TransactionsPage;
