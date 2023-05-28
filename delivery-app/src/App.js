import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import DriverPage from './pages/DriverPage';
import Auth from './Auth';

function App() {
  return (
    <Auth> {/* Wrap the application with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/driver" element={<DriverPage />} />
        </Routes>
      </Router>
    </Auth>
  );
}

export default App;
