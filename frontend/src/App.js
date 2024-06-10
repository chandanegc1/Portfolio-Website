import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Projects from './pages/Projects';
import "./styles/index.css"
import Information from './pages/Information';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Projects/>} />
      <Route path="/information" element={<Information/>} />
      </Routes>
    </Router>
  )
}
 
export default App