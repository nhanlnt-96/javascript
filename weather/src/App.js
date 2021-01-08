import React from 'react';
import './App.css';
import { searchCityByText, getWeatherInfoByWoeid } from './services';
import moment from 'moment';
import { getCityByText } from './services/weatherResultSearchByText';
import { WeatherInfoByDay, WeatherDayInDetail, CityNameInput } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBusy: false,
      errorMessage: null,
      cityNameByTextResult: [],
      totalCityByText: '',
      nameInputShow: '',
      cityShowTitle: '',
      weatherResult: [],
      selectedDay: null,

      data1: '',
    }
  }

  async componentDidMount () {
    try {
      const { data } = await getWeatherInfoByWoeid(1252431);

      this.setState({
        cityShowTitle: data.title,
        weatherResult: data.consolidated_weather,
        selectedDay: data.consolidated_weather[0],
      })
    } catch (err) {
      console.log(err);
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
        nameInputShow: `Kết quả cho: ${nameOfCity}`,
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
    
    const movingContainer = document.getElementById('moving-container');
    const width = movingContainer.offsetWidth;
    const movingWidth = width - 1080*2;

    movingContainer.style.left = `${movingWidth}px`;
  }

  onClickCityTitle = async (cityWoeid) => {
    try {
      this.setState({isBusy: true});
      const result = await getWeatherInfoByWoeid(cityWoeid);
      this.setState ({
        weatherResult: result.data.consolidated_weather,
        selectedDay: result.data.consolidated_weather[0],
        cityShowTitle: result.data.title,
      });
      const movingContainer = document.getElementById('moving-container');
      const width = movingContainer.offsetWidth;
      const movingWidth = width - 1080*3;
      movingContainer.style.left = `${movingWidth}px`;
    } catch (err) {
      this.setState({errorMessage: err.message});
    } finally {
      this.setState({isBusy: false});
    }
  }

  btnAnotherDay = (date) => {
    const selectedDay = this.state.weatherResult.find(day => day.applicable_date === date);
    this.setState({selectedDay});
  }

  btnBack = () => {
    const movingContainer = document.getElementById('moving-container');
    const width = movingContainer.offsetWidth;
    const result = width - 1080*2;

    console.log(width);
    movingContainer.style.left = `${result}px`;
  }

  render() {
    const { isBusy, errorMessage, selectedDay, weatherResult, cityShowTitle } = this.state;
    
    const data = errorMessage 
                ? <p>something went wrong: {errorMessage}</p> 
                  : isBusy
                  ? <p>thank for waiting me...</p>
                    : null;

    return (
      <div className="main contrast">
        <div className="input-weather-name">
          <CityNameInput getWeatherInfo={this.getWeatherInfo} />
        </div>

        <div className="weather-result">
          <div className="weather-slider">
            <div className="weather-slider-wrapper" id="moving-container">
              <div className="weather-result-search">
                <div className="key-search">
                  {data}
                  <p>{this.state.nameInputShow}</p>
                </div>

                <div className="key-search-list">
                  <ul>
                    {
                      this.state.cityNameByTextResult.map((cityTitle, index) => (
                        <li 
                          key={cityTitle.woeid} 
                          onClick={() => this.onClickCityTitle(cityTitle.woeid)}>
                          {index+1}. {cityTitle.title} - {cityTitle.woeid}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>

              {
                !!selectedDay > 0 
                ? (
                  <div className="weather-result-detail">
                    <WeatherDayInDetail
                      btnBack={this.btnBack}
                      cityShowTitle={cityShowTitle}
                      weatherDetail={selectedDay}
                    />

                    <div className="weather-following-days">
                      {
                        weatherResult.map(day => {
                          return (
                            <WeatherInfoByDay
                              key={day.applicable_date}
                              isActive={selectedDay.applicable_date === day.applicable_date}
                              date={day.applicable_date}
                              iconName={day.weather_state_abbr}
                              weatherState={day.weather_state_name}
                              btnAnotherDay={this.btnAnotherDay}
                            />
                          )
                        })
                      }
                    </div>
                  </div>
                ) : <h2>Loading...</h2>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;