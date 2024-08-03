import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ActivateAccount from './components/Auth/ActivateAccount';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import CreateShortURL from './components/URLShortener/CreateShortURL';
import URLList from './components/URLShortener/URLList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activate/:token" element={<ActivateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-url" element={<CreateShortURL />} />
          <Route path="/urls" element={<URLList />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
