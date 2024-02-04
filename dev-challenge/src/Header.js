import React from 'react';
import './Header.css'; 
import profilePicture from './icons/profile.jpg'; 

const Header = () => {
  return (
    <div className="navbar">
      <div className="header">
        <div className="left">
          <span className="hiveText">hive</span>
        </div>
        <div className="right">
          <button className="profileButton">
            <img src={profilePicture} alt="Profile" className="profileImage" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
