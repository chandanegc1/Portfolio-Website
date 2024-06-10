import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Information from './pages/Information';
import News from './pages/News';
import About from './pages/About';
import BigIdea from './pages/BigIdea';
import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/information" element={<Information />}>
          <Route path="news" element={<News />} index={true} />
          <Route path="about" element={<About />} />
          <Route path="big-ideas" element={<BigIdea />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
