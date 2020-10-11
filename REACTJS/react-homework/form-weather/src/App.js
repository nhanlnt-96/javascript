import React from 'react';
import './App.css';
import InputCity from './components/InputCity';

class App extends React.Component {
  state = {
    temperature : ''
  } 

  getTemperature = (city) => {
    const url = 'http://localhost:4000/weather-name?cityName=' + city;
    fetch(url).then(response => {
      return response.json();
    }).then(data=>{
      console.log(data);
    }).catch(error=>{
      console.log(error);
    })
  }

  render () {
    return (
        <InputCity getTemperature={this.getTemperature} />
    )
  }
}

export default App;