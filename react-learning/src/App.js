import React from 'react';
import meow1 from './meow1.jpg'
import meow2 from './meow2.jpg'
import meow3 from './meow3.jpg'
import meow4 from './meow4.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>Slider Wrapper</a>
      </header>

      <div className="container">
        <div className="btnLeft">
          <button>Left</button>
        </div>

        <div className="sliderWrapper">
          <img src={meow1} alt="meow1" />
          <img src={meow2} alt="meow2" />
          <img src={meow3} alt="meow3" />
          <img src={meow4} alt="meow4" />
        </div>

        <div className="btnRight">
          <button>Right</button>
        </div>
      </div> 
    </div>
  );
}

export default App;
