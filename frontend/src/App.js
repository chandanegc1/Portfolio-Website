import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destop from './pages/Destop';
import Information from './pages/Information';
import "./styles/index.css";
import Project from './pages/Project';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Destop />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/information" element={<Information />}>
          {/* <Route element={<News />} index={true} />
          <Route path="about" element={<About />} />
          <Route path="big-ideas" element={<BigIdea />} />
          <Route path="lectures" element={<Lectures />} />
          <Route path="shop" element={<Shop />} />
          <Route path="media" element={<Media />} />
          <Route path="awards" element={<Awards />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="staff" element={<Staff />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
          <Route path="feedback" element={<FeedBack />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
