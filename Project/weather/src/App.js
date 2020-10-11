import React from 'react';
import './App.css';
import CityNameInput from './components/CityNameInput';
import { getCityByText } from './services/weatherResultSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBusy: false,
      error: '',
      cities: ''
    }
  }

  getTemp = async (city) => {
    try {
      this.setState({
        isBusy: true
      })
      const result = await getCityByText(city);
      this.setState({
        cities: result.data
      });
      console.log(this.state.cities);
    } catch (error) {
      this.setState({
        error: error.message
      });
    } finally {
      this.setState({
        isBusy: false
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <CityNameInput getTemp={this.getTemp}/>
        <p>the result is {this.state.cities}</p>
      </React.Fragment>
    )
  }
}

export default App;
