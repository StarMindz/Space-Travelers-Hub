import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import { Missions, Rockets } from './components/pages/Missions';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes className="appContainer">
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;
