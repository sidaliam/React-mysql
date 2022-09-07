import React, { useState } from "react";
import AddClient from "../Composant/AddClient";
import CardClient from "../Composant/CardClient";
import Menu from "../Composant/Menu";
import Navbar from "../Composant/Navbar";
import { useEffect } from "react";
import axios from "axios";


const Client = () => {
  const [signUp, setsignUp] = useState(true);
  const [clientlist, setclientlist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/Clientinformation")
      .then((res) => setclientlist(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <Menu />
      <div className="content">
        <div className="client-section">
          <input
            type="submit"
            value="ajouter client"
            onClick={() => setsignUp(false)}
          />
          {signUp ? null : <AddClient />}
        </div>
        <div className="client-information">
          {clientlist.map((val, index) => {
            return <CardClient key={index} client={val} />;
          })}
        </div>

      </div>
      
    </div>
  );
};

export default Client;
