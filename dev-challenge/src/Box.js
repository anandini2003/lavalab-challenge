import React, { useState } from 'react';
import './Box.css';

const Box = ({ appName, description, iconPath }) => {
  const [connected, setConnected] = useState(false);

  const handleConnectToggle = () => {
    setConnected((prevState) => !prevState);
  };

  return (
    <div className="box">
      <div className="boxTopRow">
        <div className="icon">
          <img src={iconPath} alt={`${appName} Icon`} className="appIcon" />
        </div>
        <button
          className={`connectButton ${connected ? 'connected' : ''}`}
          onClick={handleConnectToggle}
        >
          {connected ? 'Connected' : 'Connect'}
        </button>
      </div>
      <div className="appName">{appName}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Box;
