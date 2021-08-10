import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UserList from "./UserList.js";
import Login from "./Login.js";

ReactDOM.render(
  <React.StrictMode>
    <UserList />
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);
