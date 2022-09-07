import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import User from './User';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const[usernamereg,setusernamereg]=useState("")
  const[userpassreg,setuserpassreg]=useState("")
  const navigate=useNavigate()
  const register =()=>{
    axios.post("http://localhost:3003/register",
    {
      username:usernamereg,
      password:userpassreg,
    }).then((response)=>{
      console.log(response.data)
      navigate("/user")
      
    })
    
  }

    return (
    <div className="signup-container">

      <div>
        <h3> s'inscrire </h3>
        <br />
          <form >
            <input type="text" placeholder="Pseud" onChange={(e)=>{setusernamereg(e.target.value)}} />
              <br />
            <input
               type="password"
               placeholder="mdpasse"
               required
               onChange={(e)=>{setuserpassreg(e.target.value)}}
            
            />
            <br />
          <input type="submit" value="valider  l'inscription" onClick={register} />
          </form>
        </div>
    </div>
    );
};

export default Signup;