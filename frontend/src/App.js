import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destop from './pages/LandingPage';
import Information from './pages/Information';
import "./styles/index.css";
import "./styles/font/font.css"
import Project from './pages/DetailsProject';
import Test from './testing/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Destop />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/information" element={<Information />}>
      </Route>
      <Route path="/test" element={<Test />}/>
      </Routes>
    </Router>
  );
};

export default App;
