import React, { useState } from 'react';
import Header from './Header';
import Box from './Box';
import './App.css';

import FigmaIcon from './icons/figma.png';
import GoogleDriveIcon from './icons/google-drive.png';
import SlackIcon from './icons/slack.png';
import NotionIcon from './icons/notion.png';
import ConfluenceIcon from './icons/confluence.png';
import MiroIcon from './icons/miro-seeklogo.png';
import AirtableIcon from './icons/airtable.png';
import DovetailIcon from './icons/dovetail.png';

const App = () => {
  const [popupMessage, setPopupMessage] = useState(null);

  const appData = [
    { appName: 'Figma', description: "Stay up to date with your team's latest designs.", iconPath: FigmaIcon },
    { appName: 'Google Drive', description: 'Access all your documents and information.', iconPath: GoogleDriveIcon },
    { appName: 'Slack', description: 'Communicate seamlessly with your teammates.', iconPath: SlackIcon },
    { appName: 'Notion', description: 'Sync all your notes, team docs, and other important information.', iconPath: NotionIcon },
    { appName: 'Miro', description: 'Unlock the power of collaboration to distill insights from data.', iconPath: MiroIcon },
    { appName: 'Airtable', description: 'Keep your data organized in a spreadsheet-database format.', iconPath: AirtableIcon },
    { appName: 'Confluence', description: 'Create content, collaborate on work, and organize and share information.', iconPath: ConfluenceIcon },
    { appName: 'Dovetail', description: 'Organize and tag your research in a collaborative platform.', iconPath: DovetailIcon },
  ];

  const handleButtonClick = (message) => {
    setPopupMessage(message);
    setTimeout(() => {
      setPopupMessage(null);
    }, 2000);
  };

  return (
    <div>
      <Header />
      <div className="app">
        <h1>Connect your favorite tools.</h1>
        <div className="boxes">
          <div className="row">
            {appData.slice(0, 4).map((app, index) => (
              <Box key={index} appName={app.appName} description={app.description} iconPath={app.iconPath} />
            ))}
          </div>
          <div className="row">
            {appData.slice(4, 8).map((app, index) => (
              <Box key={index + 4} appName={app.appName} description={app.description} iconPath={app.iconPath} />
            ))}
          </div>
        </div>
        <div>
          <button className="backButton" onClick={() => handleButtonClick('Back button clicked')}>
            Back
          </button>
          <button className="finishButton" onClick={() => handleButtonClick('Finish button clicked')}>
            Finish
          </button>
        </div>
        {popupMessage && <div className="popup">{popupMessage}</div>}
      </div>
    </div>
  );
};

export default App;
