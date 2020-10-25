import React from 'react';
import './App.css';
import CityNameInput from './components/CityNameInput';
import { getCityByText } from './services/weatherResultSearchByText';
import { getCityById } from './services/weatheResultSearchById';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBusy: false,
      errorMessage: '',
      cityNameByTextResult: [],
      totalCityByText: '',
      nameInputShow: '',
      weatherResult: [],
      day1: [],
      day2: [],
      day3: [],
      day4: [],
      day5: [],
      day6: []
    }
  }

  getWeatherInfo = async (nameOfCity) => {
    try {
      this.setState ({
        isBusy: true
      });
      const result = await getCityByText(nameOfCity);
      this.setState ({
        cityNameByTextResult: result.data,
        totalCityByText: result.data.length,
        nameInputShow: nameOfCity
      })
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
          weatherResult: result,
          day1: result.data.consolidated_weather[0],
          day2: result.data.consolidated_weather[1],
          day3: result.data.consolidated_weather[2],
          day4: result.data.consolidated_weather[3],
          day5: result.data.consolidated_weather[4],
          day6: result.data.consolidated_weather[5]
        });
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
  }

  render() {
    let data = null;
    if (this.state.isBusy && !this.state.errorMessage) {
      data = <p className="loading-status-text">thank for waiting me...</p>;
    } else if (this.state.errorMessage) {
      data = <p className="loading-status-text">Something went wrong: {this.state.errorMessage}</p>
    }

    if (this.state.weatherResult !== '') {
      console.log('hello world');
    }
    return (
      <div className="main">
        <div className="input-weather-name">
          <CityNameInput getWeatherInfo={this.getWeatherInfo} />
        </div>

        <div className="loading-status">
          {data}
        </div>

        <div className="weather-result">
          <div className="city-list">
            <div className="title">
              <p>You type: {this.state.nameInputShow}</p>
            </div>

            <div className="city-list-result">
              <ul>
                {
                  this.state.cityNameByTextResult.map((cityTitle, index) => (
                    <li 
                      key={cityTitle.woeid} 
                      onClick={() => this.onClickCityTitle(cityTitle)}>
                      {index+1}. {cityTitle.title} - {cityTitle.woeid}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className="weather-content">
            <p>{this.state.day1.max_temp}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;