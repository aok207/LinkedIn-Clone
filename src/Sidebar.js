import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);
    
    const recentItem = (topic) => (
        <div className="sidebar-recent-item">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <img src="https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <Avatar className='sidebar-avatar' src={user.photoUrl}>{user.displayName[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar-stats'>
            <div className="sidebar-stat">
                <p>Who viewed you: </p>
                <p className="sidebar-stat-number">2,500</p>
            </div>
            <div className="sidebar-stat">
                <p>Views on post: </p>
                <p className="sidebar-stat-number">2,448</p>
            </div>         
        </div>

        <div className="sidebar-bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("SoftwareEngineering")}
            {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar