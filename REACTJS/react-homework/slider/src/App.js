import React from 'react';
//import logo from './logo.svg';
import './App.css';
import pic1 from './assets/images/undraw1.png';
import pic2 from './assets/images/undraw2.png';
import pic3 from './assets/images/undraw3.png';
import pic4 from './assets/images/undraw4.png';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sliderPosition: 0,
    }
  }

  clickSliderMoving = (movingType) => {
    const movingContainer = document.getElementById('moving-container');
    const wraperWidth = movingContainer.offsetWidth;
    const newSliderPosition = (movingType - 1) * -1080;

    // newSliderPosition = movingType * -1080;
    // switch (movingType) {
    //   case 1:
    //     newSliderPosition = -1080;
    //     break;
    //   case 2:
    //     newSliderPosition = -2160;
    //     break;
    //   case 3:
    //     newSliderPosition = -3240;
    //     break;
    //   case 4:
    //     newSliderPosition = -4420;
    //     default:
    //       break;
    // }

    // console.log(newSliderPosition);
    this.setState({sliderPosition: newSliderPosition});
    movingContainer.style.left = `${newSliderPosition}px`;
  }

  render () {
    return (
      <div className="main">
        <div className="sliderWrapper">
          <div className="container">
            <div className="sliderPicture">
              <div className="contentPicture" id="moving-container">
                <div className="pictureWrapper">
                  <img src={pic1} alt="undraw" />
                </div>
                
                <div className="pictureWrapper">
                  <img src={pic2} alt="undraw" />
                </div>
                
                <div className="pictureWrapper">
                  <img src={pic3} alt="undraw" />
                </div>
                
                <div className="pictureWrapper">
                  <img src={pic4} alt="undraw" />
                </div>
              </div>
            </div>

            <div className="btnClick">
              <button onClick = {() => this.clickSliderMoving(1)}>1</button>
              <button onClick = {() => this.clickSliderMoving(2)}>2</button>
              <button onClick = {() => this.clickSliderMoving(3)}>3</button>
              <button onClick = {() => this.clickSliderMoving(4)}>4</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
