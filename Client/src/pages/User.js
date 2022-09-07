import React, { useEffect, useState } from 'react';
import Menu from '../Composant/Menu';
import Navbar from '../Composant/Navbar';
import axios from 'axios';
import Card from '../Composant/Card';
const User = () => {
    useEffect(() => {
        axios
          .get(
            "http://localhost:3003/userinformation"
          )
          .then((res) => setuserlist(res.data));
      }, []);
    const[userlist,setuserlist]=useState([])

    
        
        return (
            <div>
    
                <Navbar/>
                <Menu/>
                <div className="user-section">
                
                

                {userlist.map((val,index)=>{
                    return <Card key ={index} user={val}/>   
                            
                    })}


                </div>
                
                  


                
                
                

            </div>
        );


    }
    

    
   

export default User;