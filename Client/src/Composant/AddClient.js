import React from "react";
import { useState } from "react";
import axios from "axios";

const AddClient = () => {
  const [hide, sethide] = useState(false);
  const[clientname,setclientname]=useState("")
  const[prenomclient,setprenomclient]=useState("")
  const[phoneclient,setphoneclient]=useState("")
  const[phone2client,setphone2client]=useState("")
  const[emailclient,setemailclient]=useState("")
  const[villeclient,setvilleclient]=useState("")
  const[adresse,setadresse]=useState("")

  const addclient =()=>{
    axios.post("http://localhost:3003/addclient",
    {
      nom_client:clientname,
      prénom_client:prenomclient,
      phone_client:phoneclient,
      phone2_client:phone2client,
      email_client:emailclient,
      ville_client:villeclient,
      adresse_client:adresse,


    }).then((response)=>{
      console.log(response.data)
      
    })
    
  }

  return (
    <div className="add-client">
      <form id="formulaire" >
      <input type="text" required placeholder="nom client" onChange={(e)=>{setclientname(e.target.value)}} />
      <input type="text" placeholder="prénom client" onChange={(e)=>{setprenomclient(e.target.value)}} />
      <input type="text" placeholder="phone number" onChange={(e)=>{setphoneclient(e.target.value)}} />
      <input type="text" placeholder="phone number 2" onChange={(e)=>{setphone2client(e.target.value)}}/>
      <input type="text" placeholder="email"  onChange={(e)=>{setemailclient(e.target.value)}} />  
      <input type="text" placeholder="Ville" onChange={(e)=>{setvilleclient(e.target.value)}} />  
      <input type="text" placeholder="Adresse"  onChange={(e)=>{setadresse(e.target.value)}} />
      <input type="submit" value="Ajouter" onClick={addclient}/>
      <input
        id="btn-annuler"
        type="submit"
        value="Annuler"
        onClick={() => {
         this.close()
        }}
      />


      </form>
      
    </div>
  );
};

export default AddClient;
