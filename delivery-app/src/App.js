import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LoginPage from './pages/LoginPage';  
import AdminPage from './pages/AdminPage';  
import DriverPage from './pages/DriverPage';  
import Auth from './Auth';  

function App() {  
  return (
    <Router>  
      <Auth> {/* Wrap the application with AuthProvider */}
        <Routes>  
          <Route path="/" element={<LoginPage />} />  
          <Route path="/admin" element={<AdminPage />} />  
          <Route path="/driver" element={<DriverPage />} />  
        </Routes>  
      </Auth>  
    </Router>
  );  
}  

export default App;
