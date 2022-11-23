import { NavLink } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  const nav = (
    <div className="navBar">
      <NavLink className="rockets" to="/">ROCKETS</NavLink>
      <NavLink className="missions" to="/missions">MISSiONS</NavLink>
      <NavLink className="profile" to="/profile">PROFILE</NavLink>
    </div>
  );
  return nav;
};

export default NavBar;
