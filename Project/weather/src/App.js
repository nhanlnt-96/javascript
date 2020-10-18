import React from 'react';
import './App.css';
import logo from './assets/img/logo.png';
import CityNameInput from './components/CityNameInput';
import { getCityById } from './services/weatheResultSearchById';
import { getCityByText } from './services/weatherResultSearchByText';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBusy: false,
      errorMessage: '',
      testResult: [],
      weatherResult: [],
    }
  }

  getWeatherInfo = async (nameOfCity) => {
    try {
      this.setState ({
        isBusy: true
      });
      const result = await getCityByText(nameOfCity);
      this.setState ({
        testResult: result.data
      })
      console.log(this.state.testResult);
    } catch (error) {
      this.setState ({
        errorMessage: error.message
      })
    } finally {
      this.setState ({
        isBusy: false
      })
    }
  }

  onClickCityTitle = async (cityTitle) => {
    const cityWoeid = cityTitle.woeid;
    if (cityWoeid !== '') {
      try {
        this.setState ({
          isBusy: true
        })
        const result = await getCityById(cityWoeid);
        this.setState ({
          weatherResult: result
        })
        console.log(this.state.weatherResult);
      } catch (error) {
        this.setState ({
          error: error.message
        })
      } finally {
        this.setState ({
          isBusy: false
        })
      }
    }
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <img src={logo} alt="logo-weather" />
        </div>
        <CityNameInput getWeatherInfo={this.getWeatherInfo} />
        <h1>You mean ?</h1>
        <ul>
          {
            this.state.testResult.map((cityTitle, index) => (
              <li key={cityTitle.woeid} onClick={() => this.onClickCityTitle(cityTitle)}>
                    {index+1}. {cityTitle.title} - {cityTitle.woeid}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default App;