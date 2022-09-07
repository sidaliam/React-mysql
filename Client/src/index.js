import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Client from "./pages/Client";
import Dashbord from "./pages/Dashbord";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import User from "./pages/User";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectionModal from "./Composant/ConnectionModal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
