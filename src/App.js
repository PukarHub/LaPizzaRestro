import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer'; // Importing the Footer component
import Home from './pages/Home';
import Menu from './pages/Menu';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
        
        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
