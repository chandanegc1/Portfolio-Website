import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Information from './pages/Information';
import Project from './pages/DetailsProject';
import Test from './testing/Test';

import "./styles/index.css";
import "./styles/font/font.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/information" element={<Information />}>
      </Route>
      <Route path="/test" element={<Test />}/>
      </Routes>
    </Router>
  );
};

export default App;
