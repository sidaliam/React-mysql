import React from 'react';
import { Home } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { Email } from '@mui/icons-material';
import { BarChart } from '@mui/icons-material';

const Menu = () => {
    return (
        <div className='menu-section'>
            <NavLink to="/user">
               <Home  style={{color:'rgb(125,116,158)'}}/>
            </NavLink>

            <NavLink to="/client">
               <BarChart style={{color:'rgb(125,116,158)'}}/>
            </NavLink>
            
        </div>
    );
};

export default Menu;