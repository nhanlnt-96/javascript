import React from 'react';
import './App.css';
import CityNameInput from './components/CityNameInput';
import { getCityByText } from './services/weatherResultSearchByText';
import { getCityById } from './services/weatheResultSearchById';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBusy: false,
      errorMessage: '',
      cityNameByTextResult: [],
      totalCityByText: '',
      nameInputShow: '',
      cityShowTitle: '',
      weatherResult: [],

      applicableDate1: '',
      weatherStateName1: '',
      theTemp1: '',
      maxTemp1: '',
      minTemp1: '',
      windSpeed1: '',
      humidity1: '',
      visibility1: '',
      pressure1: '',
      weatherStateAbbr1: '',

      applicableDate2: '',
      weatherStateName2: '',
      theTemp2: '',
      maxTemp2: '',
      minTemp2: '',
      windSpeed2: '',
      humidity2: '',
      visibility2: '',
      pressure2: '',
      weatherStateAbbr2: '',

      applicableDate3: '',
      weatherStateName3: '',
      theTemp3: '',
      maxTemp3: '',
      minTemp3: '',
      windSpeed3: '',
      humidity3: '',
      visibility3: '',
      pressure3: '',
      weatherStateAbbr3: '',

      applicableDate4: '',
      weatherStateName4: '',
      theTemp4: '',
      maxTemp4: '',
      minTemp4: '',
      windSpeed4: '',
      humidity4: '',
      visibility4: '',
      pressure4: '',
      weatherStateAbbr4: '',

      applicableDate5: '',
      weatherStateName5: '',
      theTemp5: '',
      maxTemp5: '',
      minTemp5: '',
      windSpeed5: '',
      humidity5: '',
      visibility5: '',
      pressure5: '',
      weatherStateAbbr5: '',

      applicableDate6: '',
      weatherStateName6: '',
      theTemp6: '',
      maxTemp6: '',
      minTemp6: '',
      windSpeed6: '',
      humidity6: '',
      visibility6: '',
      pressure6: '',
      weatherStateAbbr6: '',
    }
  }

  componentDidMount () {
    fetch("http://localhost:4000/api/v1/search/1252431")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState ({
          cityShowTitle: result.title,

          applicableDate1: moment(result.consolidated_weather[0].applicable_date).format('DD-MM-YYYY'),
          weatherStateName1: result.consolidated_weather[0].weather_state_name,
          theTemp1: <p>{Math.round(result.consolidated_weather[0].the_temp)}&deg;</p>,
          maxTemp1: <p>Max: {Math.round(result.consolidated_weather[0].max_temp)}&deg;</p>,
          minTemp1: <p>Min: {Math.round(result.consolidated_weather[0].min_temp)}&deg;</p>,
          windSpeed1: `Gió ${result.consolidated_weather[0].wind_direction_compass} ${Math.round(result.consolidated_weather[0].wind_speed)}mph`,
          humidity1: `Độ ẩm ${result.consolidated_weather[0].humidity}%`,
          visibility1: `Tầm nhìn xa ${(result.consolidated_weather[0].visibility).toFixed(1)} miles`,
          pressure1: `Áp suất ${Math.round(result.consolidated_weather[0].air_pressure)}mb`,
          weatherStateAbbr1: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[0].weather_state_abbr}.svg`,

          applicableDate2: moment(result.consolidated_weather[1].applicable_date).format('DD-MM-YYYY'),
          weatherStateName2: result.consolidated_weather[1].weather_state_name,
          theTemp2: <p>{Math.round(result.consolidated_weather[1].the_temp)}&deg;</p>,
          maxTemp2: <p>Max: {Math.round(result.consolidated_weather[1].max_temp)}&deg;</p>,
          minTemp2: <p>Min: {Math.round(result.consolidated_weather[1].min_temp)}&deg;</p>,
          windSpeed2: `Gió ${result.consolidated_weather[1].wind_direction_compass} ${Math.round(result.consolidated_weather[1].wind_speed)}mph`,
          humidity2: `Độ ẩm ${result.consolidated_weather[1].humidity}%`,
          visibility2: `Tầm nhìn xa ${(result.consolidated_weather[1].visibility).toFixed(1)} miles`,
          pressure2: `Áp suất ${Math.round(result.consolidated_weather[1].air_pressure)}mb`,
          weatherStateAbbr2: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[1].weather_state_abbr}.svg`,

          applicableDate3: moment(result.consolidated_weather[2].applicable_date).format('DD-MM-YYYY'),
          weatherStateName3: result.consolidated_weather[2].weather_state_name,
          theTemp3: <p>{Math.round(result.consolidated_weather[2].the_temp)}&deg;</p>,
          maxTemp3: <p>Max: {Math.round(result.consolidated_weather[2].max_temp)}&deg;</p>,
          minTemp3: <p>Min: {Math.round(result.consolidated_weather[2].min_temp)}&deg;</p>,
          windCompass3: ``,
          windSpeed3: `Gió ${result.consolidated_weather[2].wind_direction_compass} ${Math.round(result.consolidated_weather[2].wind_speed)}mph`,
          humidity3: `Độ ẩm ${result.consolidated_weather[2].humidity}%`,
          visibility3: `Tầm nhìn xa ${(result.consolidated_weather[2].visibility).toFixed(1)} miles`,
          pressure3: `Áp suất ${Math.round(result.consolidated_weather[2].air_pressure)}mb`,
          weatherStateAbbr3: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[2].weather_state_abbr}.svg`,

          applicableDate4: moment(result.consolidated_weather[3].applicable_date).format('DD-MM-YYYY'),
          weatherStateName4: result.consolidated_weather[3].weather_state_name,
          theTemp4: <p>{Math.round(result.consolidated_weather[3].the_temp)}&deg;</p>,
          maxTemp4: <p>Max: {Math.round(result.consolidated_weather[3].max_temp)}&deg;</p>,
          minTemp4: <p>Min: {Math.round(result.consolidated_weather[3].min_temp)}&deg;</p>,
          windSpeed4: `Gió ${result.consolidated_weather[3].wind_direction_compass} ${Math.round(result.consolidated_weather[3].wind_speed)}mph`,
          humidity4: `Độ ẩm ${result.consolidated_weather[3].humidity}%`,
          visibility4: `Tầm nhìn xa ${(result.consolidated_weather[3].visibility).toFixed(1)} miles`,
          pressure4: `Áp suất ${Math.round(result.consolidated_weather[3].air_pressure)}mb`,
          weatherStateAbbr4: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[3].weather_state_abbr}.svg`,

          applicableDate5: moment(result.consolidated_weather[4].applicable_date).format('DD-MM-YYYY'),
          weatherStateName5: result.consolidated_weather[4].weather_state_name,
          theTemp5: <p>{Math.round(result.consolidated_weather[4].the_temp)}&deg;</p>,
          maxTemp5: <p>Max: {Math.round(result.consolidated_weather[4].max_temp)}&deg;</p>,
          minTemp5: <p>Min: {Math.round(result.consolidated_weather[4].min_temp)}&deg;</p>,
          windSpeed5: `Gió ${result.consolidated_weather[4].wind_direction_compass} ${Math.round(result.consolidated_weather[4].wind_speed)}mph`,
          humidity5: `Độ ẩm ${result.consolidated_weather[4].humidity}%`,
          visibility5: `Tầm nhìn xa ${(result.consolidated_weather[4].visibility).toFixed(1)} miles`,
          pressure5: `Áp suất ${Math.round(result.consolidated_weather[4].air_pressure)}mb`,
          weatherStateAbbr5: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[4].weather_state_abbr}.svg`,

          applicableDate6: moment(result.consolidated_weather[5].applicable_date).format('DD-MM-YYYY'),
          weatherStateName6: result.consolidated_weather[5].weather_state_name,
          theTemp6: <p>{Math.round(result.consolidated_weather[5].the_temp)}&deg;</p>,
          maxTemp6: <p>Max: {Math.round(result.consolidated_weather[5].max_temp)}&deg;</p>,
          minTemp6: <p>Min: {Math.round(result.consolidated_weather[5].min_temp)}&deg;</p>,
          windSpeed6: `Gió ${result.consolidated_weather[5].wind_direction_compass} ${Math.round(result.consolidated_weather[5].wind_speed)}mph`,
          humidity6: `Độ ẩm ${result.consolidated_weather[5].humidity}%`,
          visibility6: `Tầm nhìn xa ${(result.consolidated_weather[5].visibility).toFixed(1)} miles`,
          pressure6: `Áp suất ${Math.round(result.consolidated_weather[5].air_pressure)}mb`,
          weatherStateAbbr6: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[5].weather_state_abbr}.svg`,
        });
      },
      (error) => {
        console.log(error);
      }
    )
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
    const movingWidth = width - 1080*3;

    movingContainer.style.left = `${movingWidth}px`

    console.log(`console result is ${movingWidth}`);
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
          weatherResult: result.data,
          cityShowTitle: result.data.title,

          applicableDate1: moment(result.consolidated_weather[0].applicable_date).format('DD-MM-YYYY'),
          weatherStateName1: result.consolidated_weather[0].weather_state_name,
          theTemp1: <p>{Math.round(result.consolidated_weather[0].the_temp)}&deg;</p>,
          maxTemp1: <p>Max: {Math.round(result.consolidated_weather[0].max_temp)}&deg;</p>,
          minTemp1: <p>Min: {Math.round(result.consolidated_weather[0].min_temp)}&deg;</p>,
          windSpeed1: `Gió ${result.consolidated_weather[0].wind_direction_compass} ${Math.round(result.consolidated_weather[0].wind_speed)}mph`,
          humidity1: `Độ ẩm ${result.consolidated_weather[0].humidity}%`,
          visibility1: `Tầm nhìn xa ${(result.consolidated_weather[0].visibility).toFixed(1)} miles`,
          pressure1: `Áp suất ${Math.round(result.consolidated_weather[0].air_pressure)}mb`,
          weatherStateAbbr1: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[0].weather_state_abbr}.svg`,

          applicableDate2: moment(result.consolidated_weather[1].applicable_date).format('DD-MM-YYYY'),
          weatherStateName2: result.consolidated_weather[1].weather_state_name,
          theTemp2: <p>{Math.round(result.consolidated_weather[1].the_temp)}&deg;</p>,
          maxTemp2: <p>Max: {Math.round(result.consolidated_weather[1].max_temp)}&deg;</p>,
          minTemp2: <p>Min: {Math.round(result.consolidated_weather[1].min_temp)}&deg;</p>,
          windSpeed2: `Gió ${result.consolidated_weather[1].wind_direction_compass} ${Math.round(result.consolidated_weather[1].wind_speed)}mph`,
          humidity2: `Độ ẩm ${result.consolidated_weather[1].humidity}%`,
          visibility2: `Tầm nhìn xa ${(result.consolidated_weather[1].visibility).toFixed(1)} miles`,
          pressure2: `Áp suất ${Math.round(result.consolidated_weather[1].air_pressure)}mb`,
          weatherStateAbbr2: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[1].weather_state_abbr}.svg`,

          applicableDate3: moment(result.consolidated_weather[2].applicable_date).format('DD-MM-YYYY'),
          weatherStateName3: result.consolidated_weather[2].weather_state_name,
          theTemp3: <p>{Math.round(result.consolidated_weather[2].the_temp)}&deg;</p>,
          maxTemp3: <p>Max: {Math.round(result.consolidated_weather[2].max_temp)}&deg;</p>,
          minTemp3: <p>Min: {Math.round(result.consolidated_weather[2].min_temp)}&deg;</p>,
          windCompass3: ``,
          windSpeed3: `Gió ${result.consolidated_weather[2].wind_direction_compass} ${Math.round(result.consolidated_weather[2].wind_speed)}mph`,
          humidity3: `Độ ẩm ${result.consolidated_weather[2].humidity}%`,
          visibility3: `Tầm nhìn xa ${(result.consolidated_weather[2].visibility).toFixed(1)} miles`,
          pressure3: `Áp suất ${Math.round(result.consolidated_weather[2].air_pressure)}mb`,
          weatherStateAbbr3: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[2].weather_state_abbr}.svg`,

          applicableDate4: moment(result.consolidated_weather[3].applicable_date).format('DD-MM-YYYY'),
          weatherStateName4: result.consolidated_weather[3].weather_state_name,
          theTemp4: <p>{Math.round(result.consolidated_weather[3].the_temp)}&deg;</p>,
          maxTemp4: <p>Max: {Math.round(result.consolidated_weather[3].max_temp)}&deg;</p>,
          minTemp4: <p>Min: {Math.round(result.consolidated_weather[3].min_temp)}&deg;</p>,
          windSpeed4: `Gió ${result.consolidated_weather[3].wind_direction_compass} ${Math.round(result.consolidated_weather[3].wind_speed)}mph`,
          humidity4: `Độ ẩm ${result.consolidated_weather[3].humidity}%`,
          visibility4: `Tầm nhìn xa ${(result.consolidated_weather[3].visibility).toFixed(1)} miles`,
          pressure4: `Áp suất ${Math.round(result.consolidated_weather[3].air_pressure)}mb`,
          weatherStateAbbr4: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[3].weather_state_abbr}.svg`,

          applicableDate5: moment(result.consolidated_weather[4].applicable_date).format('DD-MM-YYYY'),
          weatherStateName5: result.consolidated_weather[4].weather_state_name,
          theTemp5: <p>{Math.round(result.consolidated_weather[4].the_temp)}&deg;</p>,
          maxTemp5: <p>Max: {Math.round(result.consolidated_weather[4].max_temp)}&deg;</p>,
          minTemp5: <p>Min: {Math.round(result.consolidated_weather[4].min_temp)}&deg;</p>,
          windSpeed5: `Gió ${result.consolidated_weather[4].wind_direction_compass} ${Math.round(result.consolidated_weather[4].wind_speed)}mph`,
          humidity5: `Độ ẩm ${result.consolidated_weather[4].humidity}%`,
          visibility5: `Tầm nhìn xa ${(result.consolidated_weather[4].visibility).toFixed(1)} miles`,
          pressure5: `Áp suất ${Math.round(result.consolidated_weather[4].air_pressure)}mb`,
          weatherStateAbbr5: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[4].weather_state_abbr}.svg`,

          applicableDate6: moment(result.consolidated_weather[5].applicable_date).format('DD-MM-YYYY'),
          weatherStateName6: result.consolidated_weather[5].weather_state_name,
          theTemp6: <p>{Math.round(result.consolidated_weather[5].the_temp)}&deg;</p>,
          maxTemp6: <p>Max: {Math.round(result.consolidated_weather[5].max_temp)}&deg;</p>,
          minTemp6: <p>Min: {Math.round(result.consolidated_weather[5].min_temp)}&deg;</p>,
          windSpeed6: `Gió ${result.consolidated_weather[5].wind_direction_compass} ${Math.round(result.consolidated_weather[5].wind_speed)}mph`,
          humidity6: `Độ ẩm ${result.consolidated_weather[5].humidity}%`,
          visibility6: `Tầm nhìn xa ${(result.consolidated_weather[5].visibility).toFixed(1)} miles`,
          pressure6: `Áp suất ${Math.round(result.consolidated_weather[5].air_pressure)}mb`,
          weatherStateAbbr6: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[5].weather_state_abbr}.svg`,
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

    const movingContainer = document.getElementById('moving-container');
    const width = movingContainer.offsetWidth;
    const movingWidth = width - 1080*4;

    movingContainer.style.left = `${movingWidth}px`

    console.log(`console result is ${movingWidth}`);
  }

  render() {
    let data = null;
    if (this.state.isBusy && !this.state.errorMessage) {
      data = <p>thank for waiting me...</p>;
    } else if (this.state.errorMessage) {
      data = <p>Something went wrong: {this.state.errorMessage}</p>
    }

    return (
      <div className="main">
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
                          onClick={() => this.onClickCityTitle(cityTitle)}>
                          {index+1}. {cityTitle.title} - {cityTitle.woeid}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>

              <div className="weather-result-detail">
                <div className="weather-main-day-result">
                  <div className="weather-main-day-header">
                    <div className="city-title">
                      {this.state.cityShowTitle}
                    </div>

                    <div className="main-day-min-max-temp">
                      {this.state.minTemp1}
                      {this.state.maxTemp1}
                    </div>                  
                  </div>

                  <div className="weather-main-day-content">
                    <div className="wind-speed">
                      {this.state.windSpeed1}
                      <br></br>
                      {this.state.pressure1}
                      <br></br>
                      {this.state.humidity1}
                      <br></br>
                      {this.state.visibility1}
                    </div>
                  </div>
                </div>
              </div>

              <div className="weather-day-result">
                i am Nhan
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;