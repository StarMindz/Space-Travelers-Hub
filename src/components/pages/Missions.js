import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const missionList = useSelector((state) => state.missions);
  const mission = (
    <div>
      {missionList.map((mission) => {
        const missionJsx = (
          <div className="singleBook">
            { mission.name }
          </div>
        );
        return missionJsx;
      })}
    </div>
  );
  return mission;
};

export default Missions;
