import React from 'react';
//import logo from './logo.svg';
import './App.css';
import logo from './assets/images/logo.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div className="main">
        <div className="container">
          <div className="weather-form">
            <div className="form">
              <div className="form-logo">
                <img src={logo} alt="logo" />
              </div>

              <div className="info-form">
                <div className="input-info">
                  <label for="address">Address</label>
                  <input name="address" type="text" />
                </div>
                  
                <div className="result-weather">
                  <h1 className="title"></h1>
                  <p className="content"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;