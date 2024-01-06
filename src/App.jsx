import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/HomePage/Homepage";
import UsersPage from "./pages/UsersPage/UsersPage";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </>
  );
}

export default App;
