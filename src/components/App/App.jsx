//router

// components
import { Routes, Route } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import Login from '../../pages/Login/Login'
import Profil from '../../pages/Profil/Profil';
import './App.css';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route  
            element = { < Homepage /> }
            path = "/"
          />
          <Route 
            element= { < Login /> }
            path = "/signin"
          />
          <Route 
            element= {<Profil />}
            path="/profile"
          />
        </Routes>
   
    </div>
  );
}

export default App;
