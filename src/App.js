import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/pages/Header';
import Myprofile from './components/pages/profile';
import Rockets from './components/pages/Rockets';
import Footer from './components/pages/Footer';
import MissionsPage from './pages/MissionsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<MissionsPage />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
