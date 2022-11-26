import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { fetchRockets } from './redux/rockets/rocketSlice';
import { fetchMissions } from './redux/missions/missionSlice';
import NavBar from './components/NavBar';
import Missions from './components/pages/Missions';
import Rockets from './components/pages/Rockets';
import Profile from './components/pages/profile';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchRockets()), 1000);
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <Router>
      <NavBar />
      <Routes className="appContainer">
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
