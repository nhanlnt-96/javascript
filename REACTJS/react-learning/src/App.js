import React from 'react';
import './App.css';
import dog1 from './assets/images/dog1.jpg';
import dog2 from './assets/images/dog2.jpg';
import dog3 from './assets/images/dog3.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderPosition: 0,
    }
    // this.onLeftBtnClick = this.onLeftBtnClick.bind(this);

    // console.log('Contractor run');
  }

  // componentDidMount() {
  //   console.log('Didmount run');
  //   console.log(this);
  // }

  // shouldComponentUpdate() {
  //   console.log('Should update run: ', this.state);
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log('Did update run: ', this.state);
  // }

  // componentWillUnmount() {
  //   //
  // }

  // function call without '()' is a declaration/definition
  // function call with '()' is a explanation/execution 
  handleSliderMoving = (movingType) => {
    // console.log('left btn click', this);
    // this.setState({sliderPosition: -2160});

    const movingContainer = document.getElementById('moving-container');
    console.log(movingContainer);
    const wrapperWidth = movingContainer.offsetWidth;
    let newSliderPostion = this.state.sliderPosition;
    if (movingType === 'left') {
      newSliderPostion += wrapperWidth;
        if (newSliderPostion > 0) {
          newSliderPostion = -2160;
        }
    } else {
      newSliderPostion -= wrapperWidth;
        if (newSliderPostion < -2160) {
          newSliderPostion = 0;
        }
    }
    this.setState({sliderPosition: newSliderPostion});

    movingContainer.style.left = `${newSliderPostion}px`;

  }
  // Arrow function is used when need to use it's parent scope/context
  // While normal function need to bind the context to

  render() {
    console.log('render run: ', { state: this.state, context: this });
    return (
      <>
        <div className="App">
        Current slider position: {this.state.sliderPosition}
        <div className="animation-project-wrapper">
          <div className="slider">
            <div className="btn btn-left">
              <button onClick={() => this.handleSliderMoving('left')}>Left</button>
            </div>

            <div className="slider-wrapper">
              <div className="img-wrapper" id="moving-container">
                <div className="img-container">
                  <img src={dog1} alt="dog1" />
                </div>
                
                <div className="img-container">
                  <img src={dog2} alt="dog2" />
                </div>
                
                <div className="img-container">
                  <img src={dog3} alt="dog3" />
                </div>
              </div>
            </div>
                
            <div className="btn btn-right">
              <button onClick={() => this.handleSliderMoving('right')}>Right</button>
            </div>
          </div>
        </div>
      </div>
      </>
  );
  }
}

export default App;
