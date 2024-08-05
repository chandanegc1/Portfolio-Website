import React, { useState, useEffect } from 'react';
import './App.css';
const App = () => {
  const [icons, setIcons] = useState([]);
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    // Initialize icons and positions
    const initialIcons = Array.from({ length: 50 }, (_, i) => i + 1);
    setIcons(initialIcons);
    setPositions(initialIcons);
  }, []);

  const shuffleIcons = () => {
    const shuffledPositions = [...positions].sort(() => Math.random() - 0.5);
    setPositions(shuffledPositions); 
  };

  return (
    <div className="App">
      {/* <h1>{items} eireo</h1> */}
      <div className="icon-container">
        {icons.map((icon, index) => {
          const position = positions.indexOf(icon);
          const row = Math.floor(position / 10);
          const col = position % 10;
          return (
            <div
              key={icon}
              className="icon"
              style={{
                transform: `translate(${col * 60}px, ${row * 60}px)`,
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>
      <button onClick={shuffleIcons}>Shift Icons</button>
    </div>
  );
};

export default App;
