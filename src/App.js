import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//components
import LoginRegister from './components/LoginRegister';
import TrainTable from './components/TrainTable';
import SeatMap from './components/SeatMap';
import OtpInput from './components/OtpInput';
import Payment from './components/Payment';

import logo from './logo.svg';
import './App.css';

function App() {
  const [auth, setAuth] = useState(true)
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route
            exact
            path="/"
            element={
              !auth ? (
                <LoginRegister setAuth={setAuth}/>
              ) : (
                <Navigate to="/trains" replace />
              )
            }
          />
          <Route
            exact
            path="/trains"
            element={
              auth ? (
                <TrainTable/>
              ) : (
                <LoginRegister setAuth={setAuth}/>
              )
            }
          />
          <Route
            exact
            path="/seats"
            element={
              auth ? (
                <SeatMap/>
              ) : (
                <LoginRegister setAuth={setAuth}/>
              )
            }
          />
          <Route
            exact
            path="/otp"
            element={
              auth ? (
                <OtpInput/>
              ) : (
                <LoginRegister setAuth={setAuth}/>
              )
            }
          />
          <Route
            exact
            path="/payment"
            element={
              auth ? (
                <Payment/>
              ) : (
                <LoginRegister setAuth={setAuth}/>
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
