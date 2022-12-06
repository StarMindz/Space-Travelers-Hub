import React from 'react';
import { useSelector } from 'react-redux';
import '../../profileStyles/profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  // filter missions and rockets accordingly
  return (
    <div className="profileSection">
      <div className="profileColumn">
        <h2 className="profileHeadings">My Missions</h2>
        <ul className="missionsList">
          {missions.map((mission) => {
            if (mission.reserved === true) {
              return (
                <li className="missionItem" key={mission.mission_id}>{mission.mission_name}</li>
              );
            }
            return '';
          })}
        </ul>
      </div>
      <div className="profileColumn">
        <h2 className="profileHeadings">My Rockets</h2>
        <ul className="rocketsList">
          {rockets.map((rocket) => {
            if (rocket.reserved === true) {
              return (
                <li className="rocketItem" key={rocket.id}>{rocket.name}</li>
              );
            }
            return '';
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
