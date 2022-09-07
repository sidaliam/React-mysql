import React from "react";
import { Delete } from "@mui/icons-material";
import { EditRoad } from "@mui/icons-material";

const Card = ({ user }) => {
  return (
    <div>
      {()=>{changecolor}}
      <EditRoad style={{ color: "rgb(125,116,158)" }} className="button-edit" />
      <Delete style={{ color: "rgb(125,116,158)" }} className="button-delete" />
      <li className="card">
        <div className="infos">
          <span id="span" >
            {user.user_name[0]}
          </span>
          <h2> ID: {user.id_user}</h2>
          <h2> UserName: {user.user_name}</h2>
        </div>
      </li>
    </div>
  );
};

export default Card;
