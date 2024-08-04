import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destop from './pages/LandingPage';
import Information from './pages/Information';
import "./styles/index.css";
import "./styles/font/font.css"
import Project from './pages/DetailsProject';

const App = () => {
  return (
    <Router>
      <Routes>
      {/* Todo: fix this typo */}
        <Route path="/" element={<Destop />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/information" element={<Information />}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
