import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Information from './pages/Information';
import "./styles/index.css";
import News from './pages/News';
import About from './pages/About';
import BigIdea from './pages/BigIdea';
import Lectures from './pages/Lectures';
import Shop from './pages/Shop';
import Awards from './pages/Awards';
import Staff from './pages/Staff';
import Contact from './pages/Contact';
import Search from './pages/Search';
import FeedBack from './pages/FeedBack';
import Jobs from './pages/Jobs';
import Media from './pages/Media';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
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
