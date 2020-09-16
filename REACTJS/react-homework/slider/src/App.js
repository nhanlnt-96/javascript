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

    }
  }

  render () {
    return (
      <div className="main">
        <div className="container">
          <div className="contentPicture">
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

          <div className="btnClick">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
