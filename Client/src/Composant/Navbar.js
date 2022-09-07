import React from 'react';
import { Notifications } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { DownloadForOffline } from '@mui/icons-material';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <span> s </span>
            <Notifications className='Notif-bell'style={{color :'rgb(125,116,158)'}}/>
            <DownloadForOffline className='downloadicon' style={{color:'rgb(125,116,158)'}}/>
            <input type="text" placeholder='Recherche..' />
            <Search className='search-button' style={{color:'rgb(125,116,158)'}}/>
        </div>
    );
};

export default Navbar;