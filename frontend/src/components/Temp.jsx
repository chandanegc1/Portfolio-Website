import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './temp.css'; // Import your CSS file containing animation styles

export const Home = () => (
  <div className="fade-in">
    <h2>Home</h2>
    <Link to="/about">About</Link>
  </div>
);

export const About = () => (
  <div className="fade-in">
    <h2>About</h2>
    <Link to="/">Home</Link>
  </div>
);


