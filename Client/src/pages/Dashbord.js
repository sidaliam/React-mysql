import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Menu from '../Composant/Menu';

const Dashbord = () => {
    const[authenticated,setauthenticated]=useState(null)
    useEffect(()=>{
        const logged=localStorage.getItem("authenticated");
        if(logged){
            setauthenticated(logged)
        }
    },[])
    if(!authenticated){
        return(
            <Navigate replace to="/Signin"/>

        );


    }
    else{
        
        return (
            <div>
                <h3> welcome to your dashbord</h3>
                <Menu/>
            </div>
        );

    }
    
};

export default Dashbord;