import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketSlice';

const RocketItem = ({
  id,
  name,
  description,
  image,
  reserved,
}) => {
  const dispatch = useDispatch();

  const reserve = (element) => {
    const id = element.target.id.split('_')[0];
    dispatch(reserveRocket(id));
  };

  const rocket = (
    <div className="singleRocket" id={`${id}_container`}>
      <div className="imageContainer">
        <img className="rocketImage" src={image} alt="A Rocket" />
      </div>
      <div className="infoSection">
        <h1 className="rocketName">
          { name }
        </h1>
        <p className="rocketDescription">
          <span className={reserved ? 'displaySpan' : 'nodisplaySpan'}>reserved</span>
          { description }
        </p>
        <div className="buttonSection">
          <button id={`${id}_reserveButton`} className={reserved ? 'noReserve' : 'reserve'} type="submit" onClick={(element) => reserve(element)}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        </div>
      </div>
      <hr className="horizontalLine" />
    </div>
  );
  return rocket;
};

RocketItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reserved: PropTypes.bool,
};

RocketItem.defaultProps = {
  id: 0,
  name: '',
  description: '',
  image: '',
  reserved: false,
};

export default RocketItem;
