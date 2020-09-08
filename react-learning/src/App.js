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
          <button onClick="movingButton('left')">Left</button>
        </div>

        <div className="slider">
          <div className="sliderWrapper" id="movingSliderWrapper">
            <div className="pictureWrapper">
              <img src={meow1} alt="meow1" />
            </div>
            
            <div className="pictureWrapper">
              <img src={meow2} alt="meow2" />
            </div>

            <div className="pictureWrapper">
              <img src={meow3} alt="meow3" />
            </div>

            <div className="pictureWrapper">
              <img src={meow4} alt="meow4" />
            </div>
          </div>
        </div>

        <div className="btnRight">
          <button onClick="movingButton('right')">Right</button>
        </div>
      </div> 
    </div>
  );
}

var sliderPosition = 0;

function movingButton(movingType) {
  const movingSlider = document.getElementById('movingSliderWrapper');
  const wrapperWidth = movingSlider.offsetWidth;

  if (movingType === 'left') {
    sliderPosition += wrapperWidth;

    if (sliderPosition > 0) {
      sliderPosition = -2160;
    }
  } else {
    sliderPosition -= wrapperWidth;

    if (sliderPosition < -2160) {
      sliderPosition = 0;
    }
  }
  movingButton.style.left = `${sliderPosition}px`;
  console.log(wrapperWidth);
}



export default App;
