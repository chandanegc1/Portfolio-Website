import React from 'react';
import './App.css';
import Icons from '../components/LandingPage/Icons';

const App = ({ arr, rowindex, Name }) => {
  return (
    <div className="App">
      <p>{Name}</p>
      <div className="icon-container">
        {arr.map((item, index) => {
          let id = item.id;
          const row = Math.floor(index / rowindex); 
          const col = index % rowindex;
          return (
            <div
              key={item.data.year-index%id}
              className="icon"
              style={{
                transform: `translate(${row * 100}px, ${col * 60}px) `,
                transition: 'transform 0.5s ease',
                willChange: 'transform', 
              }}
            >
              <Icons
                hoverImage={item.hoverImage}
                initialImg={item.initialImg}
                Name={item.name}
                fullName={item.data.name}
                Link={item.link}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
