import React, { useState } from 'react';
import './Header.css'; 
import profilePicture from './icons/profile.jpg'; 

const Header = () => {
  const [popupMessage, setPopupMessage] = useState(null);

  const handleProfileButtonClick = () => {
    setPopupMessage('Profile picture clicked');
    setTimeout(() => {
      setPopupMessage(null);
    }, 2000);
  };

  return (
    <div className="navbar">
      <div className="header">
        <div className="left">
          <span className="hiveText">hive</span>
        </div>
        <div className="right">
          <button className="profileButton" onClick={handleProfileButtonClick}>
            <img src={profilePicture} alt="Profile" className="profileImage" />
          </button>
        </div>
      </div>
      {popupMessage && <div className="popup">{popupMessage}</div>}
    </div>
  );
};

export default Header;
