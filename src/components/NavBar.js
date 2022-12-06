import { NavLink } from 'react-router-dom';
import React from 'react';
import '../navStyles/NavBar.css';
import img from '../images/planet.png';

const NavBar = () => {
  const nav = (
    <div className="navBar">
      <div className="navBarHead">
        <img src={img} alt="Logo" className="navImage" />
        <h1>Space Travelers Hub</h1>
      </div>
      <div className="navBarMenu">
        <NavLink exact activeClassName="active" className="rocketsLink" to="/">ROCKETS</NavLink>
        <NavLink activeClassName="active" className="missionsLink" to="/missions">MISSIONS</NavLink>
        <NavLink activeClassName="active" className="profileLink" to="/profile">PROFILE</NavLink>
      </div>
    </div>
  );
  return nav;
};

export default NavBar;
