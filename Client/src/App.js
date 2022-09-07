import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import User from "./pages/User";
import Client from "./pages/Client";
import ConnectionModal from "../src/Composant/ConnectionModal"

function App() {


  return (
   
      <Routes>
        <Route path="/user" element={<User/>}/> 
        <Route path="/" element={<ConnectionModal/>}/> 
        <Route path="/client" element={<Client/>}/> 
      </Routes>
   
    
      
  );
}

export default App;
