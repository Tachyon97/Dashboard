import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LoginPage from './pages/LoginPage';  
import AdminPage from './pages/AdminPage';  
import DriverPage from './pages/DriverPage';  

function App() {  
  return (  
  <Router>  
  <Routes>  
  <Route path="/" element={<LoginPage />} />  
  <Route path="/admin" element={<AdminPage />} />  
  <Route path="/driver" element={<DriverPage />} />  
  </Routes>  
  </Router>  
  );  
}  

export default App;
