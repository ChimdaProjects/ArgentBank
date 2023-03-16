//router

// components
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import Login from '../../pages/Login/Login'
import Profil from '../../pages/Profil/Profil';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
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
            element= {
              <PrivateRoute>
                  <Profil />
              </PrivateRoute>
            }
            path="/profile"
          />
          <Route 
            element={ <Homepage />}
            path="/logout"
          />
          <Route 
            path='*'
            element= {
              <Navigate to="/"/>
            }
          />
        </Routes>
   
    </div>
  );
}

export default App;
