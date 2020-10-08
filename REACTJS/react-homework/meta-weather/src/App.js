import React from 'react';
import './App.css';
import InputCityName from './components/InputCityName';

class App extends React.Component {
  state = {
    temparature: ''
  }

  getTemperature = (city) => {
    const url = `http://localhost:4000/search/?cityName=${city}`;
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
  }
  render() {
    return (
      <div>
        <InputCityName getTemperature={this.getTemperature} />
      </div>
    )
  }
}

export default App;
