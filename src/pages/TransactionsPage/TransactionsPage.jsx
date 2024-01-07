import React, { useState } from "react";
import "./TransactionsPage.css";
import Deposit from "../../components/Deposit/Deposit";
import axios from "axios";
import UpdateCredit from "../../components/UpdateCredit/UpdateCredit";
import Withdraw from "../../components/Withdraw/Withdraw";
import Transfer from "../../components/Transfer/Transfer";

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

  async function handelUpdateCredit({ id, newCredit }) {
    const Update = async () => {
      try {
        const res = axios.put(
          `${import.meta.env.VITE_API_LINK}/updateCredit`,
          null,
          {
            params: {
              id: id,
              newCredit: newCredit,
            },
          }
        );
        setTransactionToDisplay("");
      } catch (error) {
        console.log(error.response.data);
      }
    };
    await Update();
    console.log("handelUpdateCreditComleted");
  }

  async function handelWithdraw({ id, amount }) {
    const withdraw = async () => {
      try {
        const res = axios.put(
          `${import.meta.env.VITE_API_LINK}/withdrawMoney`,
          null,
          {
            params: {
              id: id,
              amount: amount,
            },
          }
        );
        setTransactionToDisplay("");
      } catch (error) {
        console.log(error.response.data);
      }
    };
    await withdraw();
    console.log("handelWithdraw");
  }

  async function handelTransfer({ idFrom, idTo, amount }) {
    const transferMoney = async () => {
      try {
        const res = axios.put(
          `${import.meta.env.VITE_API_LINK}/transferMoney`,
          null,
          {
            params: {
              idFrom:idFrom,
              idTo:idTo,
              amount:idTo,
            },
          }
        );
        setTransactionToDisplay("");
      } catch (error) {
        console.log(error.response.data);
      }
    };
    await transferMoney();
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
        {transactionToDisplay === updateCredit && (
          <>
            <UpdateCredit handler={handelUpdateCredit} />
          </>
        )}
        {transactionToDisplay === withdrawMoney && (
          <>
            <Withdraw handler={handelWithdraw} />
          </>
        )}
        {transactionToDisplay === transferFunds && (
          <>
            <Transfer handler={handelTransfer} />
          </>
        )}
      </div>
    </div>
  );
}

export default TransactionsPage;
