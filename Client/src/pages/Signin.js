import React, { useEffect, useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import User from "./User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Signin = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loginstatuts, setloginstatuts] = useState(false);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const navigate = useNavigate();

  const login = () => {
    Axios.post("http://localhost:3003/login", {
      username: username,
      password: password,
    }).then((res) => {
      console.log(res.data);
      localStorage.setItem("authenticated", true);
      localStorage.clear();
      
      
      
      
    },navigate("/user"));
  };

  return (
    <div className="login-container">
      <div className="login">
        <form>
          <h3> se connecter</h3>
          <br />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <br />

          <input
            type="password"
            placeholder="mot-de-passe"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="se connecter" onClick={() => login()} />
        </form>
      </div>
    </div>
  );
};

export default Signin;
