import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Information from './pages/Information';
import News from './components/News';
import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/information" element={<Information />}>
          <Route path=":news" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
