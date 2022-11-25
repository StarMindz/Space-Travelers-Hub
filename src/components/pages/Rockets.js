import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketSlice';
import { fetchMissions } from '../../redux/missions/missionSlice';
import RocketItem from '../RocketItem';
import '../../rocketStyles/Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rockets);

  useEffect(() => {
    setTimeout(() => dispatch(fetchRockets()), 1000);
    dispatch(fetchMissions());
  }, [dispatch]);

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
