import React from 'react';
import './App.css';
import InputCityName from './components/InputCityName';

class App extends React.Component {
  state = {
    temparature: '',
    error: '',
    isBusy: false
  }

  getTemperature = (city) => {
    const url = `http://localhost:4000/search/?cityName=${city}`;
    this.setState({
      isBusy: true
    })
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      console.log(data.consolidated_weather[0].max_temp);
      const result = data.consolidated_weather[0].max_temp;
      this.setState ({
        temparature: result,
        isBusy: false
      })
    }).catch(error => {
      this.setState({
        error: error.message(),
        isBusy: false
      })
    })
  }
  render() {
    let data = null;
    if (this.state.isBusy && !this.state.error) {
      data = <p>Loading ...</p>
    } else if (this.state.error) {
      data = <p>Something went wrong: {this.state.error}</p>
    } else if (this.state.temparature !== '') {
      data = <p>Temperature is {this.state.temparature}</p>
    }

    return (
      <div>
        <InputCityName getTemperature={this.getTemperature} />
        {data}
        <p>Temperature is {this.state.temparature}</p>
      </div>
    )
  }
}

export default App;
