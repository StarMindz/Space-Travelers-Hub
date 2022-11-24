import React from 'react';
import Missions from '../MissionSection';
import '../../missionStyles/Missions.css';

const MissionsPage = () => (
  <div className="missions">
    <header className="missionHead">
      <h2 className="headerItem">Missions</h2>
      <h2 className="headerItem">Descriptions</h2>
      <h2 className="headerItem">Status</h2>
    </header>
    <Missions />
  </div>
);

export default MissionsPage;
