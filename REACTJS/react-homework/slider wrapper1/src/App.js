import React from 'react';
//import logo from './logo.svg';
import './App.css';
import pic1 from './assets/images/img1.png';
import pic2 from './assets/images/img2.jpg';
import pic3 from './assets/images/img3.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderPosition: 0,
    }
  }

  handleSliderMoving = (movingType) => {
    const movingContainer = document.getElementById('moving-container');
    const wrapperWidth = movingContainer.offsetWidth;
    let newSliderPosition = this.state.sliderPosition;

    if (movingType === 'left') {
      newSliderPosition += wrapperWidth;
      if (newSliderPosition > 0) {
        newSliderPosition = -2160;
      }
    } else {
      newSliderPosition -= wrapperWidth;
      if (newSliderPosition < -2160) {
        newSliderPosition = 0;
      }
    }

    this.setState({sliderPosition: newSliderPosition});
    movingContainer.style.left = `${newSliderPosition}px`;
  }

  clickMoving = (clickType) => {
    const movingContainer = document.getElementById('moving-container');
    const wrapperWidth = movingContainer.offsetWidth;
    let newSliderPosition = this.state.sliderPosition;

    if (clickType === 1) {
      newSliderPosition += wrapperWidth;
    } else if (clickType === 2) {
      newSliderPosition += wrapperWidth;
    } else if (clickType === 3) {
      newSliderPosition += wrapperWidth;
    }
    this.setState({sliderPosition: newSliderPosition});
    movingContainer.style.left = `${newSliderPosition}px`;
  }

  render () {
    return (
      <div className="body">
        <div className="main">
          <div  className="container">
            <div className="btn btnLeft">
              <button onClick={() => this.handleSliderMoving('left')}>Left</button>
            </div>

            <div className="slider">
              <div className="sliderWrapper" id="moving-container">
                <div className="pictureWrapper">
                  <img src={pic1} alt="meow1" />
                </div>

                <div className="pictureWrapper">
                  <img src={pic2} alt="meow2"/>
                </div>
                <div className="pictureWrapper">
                  <img src={pic3} alt="meow3"/>
                </div>
              </div>
            </div>

            <div className="btn btnRight">
              <button onClick={() => this.handleSliderMoving('right')}>Right</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
