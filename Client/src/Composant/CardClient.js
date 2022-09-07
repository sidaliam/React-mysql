import React, { useState } from "react";
import { MoreHoriz } from "@mui/icons-material";


const CardClient = ({ client }) => {
    const [idclient,setidclient]=useState(0)

  return (
    <div>
      <li className="card-client">
        <div className="infos">
          <MoreHoriz className="more-horiz" style={{ color: "grey" }} onClick={()=>setidclient(client.id_client)}/>

          <span id="span">{client.nom_client[0]}</span>
          <h4> {client.nom_client}</h4>
          <h4>  {client.prenom_client}</h4>
          <h5>  {client.ville_client}</h5>
        
          

       
        </div>
      </li>
      
    </div>
  );
};

export default CardClient;
