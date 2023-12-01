import React from 'react';
import "./Header.css";

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  };

  return (
    <div className='header'>
        <div className="left-header">
            <img src="/linkedin.png" alt="" />
            <div className="header-search">
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </div>
        </div>

        <div className="right-header">
          <HeaderOption title="Home" Icon={HomeIcon} />
          <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
          <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
          <HeaderOption title="Messaging" Icon={ChatIcon} />
          <HeaderOption title="Jobs" Icon={NotificationsIcon} />
          <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
        </div>
    </div>
  )
}

export default Header