import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from '../RocketItem';
import '../../rocketStyles/Rocket.css';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rockets);

  const rocket = (
    <div>
      {rocketList.map((rocket) => {
        const rocketJsx = (
          <RocketItem
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            image={rocket.image}
            reserved={rocket.reserved}
          />
        );
        return rocketJsx;
      })}
    </div>
  );
  return rocket;
};

export default Rockets;
