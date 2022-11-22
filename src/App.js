import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Missions from './components/pages/Missions';
import Rockets from './components/pages/Rockets';
import Profile from './components/pages/profile';
import './App.css';

function App() {
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
