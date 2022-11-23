import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Missions from './components/pages/Missions';
import Rockets from './components/pages/Rockets';
import Profile from './components/pages/profile';
import store from './redux/configureStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes className="appContainer">
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
