import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to La Pizza Ristorante Italiano</h1>
        <p>Experience the best pizzas in Portugal!</p>
        <div className="cta-buttons">
          <Link to="/" className="btn">View Menu</Link>
          <Link to="/" className="btn">Reserve a Table</Link>
          <Link to="/" className="btn">Order Online</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
