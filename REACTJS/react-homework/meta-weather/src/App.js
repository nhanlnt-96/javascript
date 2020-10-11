import React from 'react';
import './App.css';
import InputCityName from './components/InputCityName';
import { getCityByText } from './services/weather';

class App extends React.Component {
  state = {
    cities: [],
    error: '',
    isBusy: false
  }

  getTemperature = async (city) => {
    try {
      this.setState({isBusy: true});
      const result = await getCityByText(city);
      this.setState({cities: result.data});
    } catch (error) {
      this.setState({error: error.message});
    } finally {
      this.setState({isBusy: false});
    }  
  }

  onCityClick = (city) => {
    console.log('onClick: ', city);
  }

  render() {
    let data = null;
    if (this.state.isBusy && !this.state.error) {
      data = <p>Loading ...</p>
    } else if (this.state.error) {
      data = <p>Something went wrong: {this.state.error}</p>
    } else if (this.state.resultMaxTemp !== '') {
      data = <p>Max temperature is {this.state.resultMaxTemp}</p>
    }

    console.log('cityState: ', this.state.cities);

    // for (let i = 0; i <= this.state.cities.length; i++) {

    // }
    // object.reduce
    // object.map
    // object.keys.map
    // object.entire

    /*const cityList = this.state.cities.map((city, index) => ({
      ...city,
      id: index + 1,
    }))
    console.log('cityList: ', cityList);*/

    return (
      <div>
        <InputCityName getTemperature={this.getTemperature} defaultValue="london"/>
        <ul>
          {
            this.state.cities.map((city, index) => (
              <li
                key={city.woeid}
                onClick={() => this.onCityClick(city)}
              >
                {index+1}. {city.title} - {city.woeid}
              </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default App;
