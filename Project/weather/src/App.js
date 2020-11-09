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

      applicableDate: '',
      weatherStateName: '',
      theTemp: '',
      maxTemp: '',
      minTemp: '',
      windSpeed: '',
      humidity: '',
      visibility: '',
      pressure: '',
      weatherStateAbbr: '',

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

      data1: '',
    }
  }

  componentDidMount () {
    fetch("http://localhost:4000/api/v1/search/1252431")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState ({
          cityShowTitle: result.title,

          applicableDate: moment(result.consolidated_weather[0].applicable_date).format('DD-MM-YYYY'),
          weatherStateName: result.consolidated_weather[0].weather_state_name,
          theTemp: <p>{Math.round(result.consolidated_weather[0].the_temp)}&deg;</p>,
          maxTemp: <p>Max: {Math.round(result.consolidated_weather[0].max_temp)}&deg;</p>,
          minTemp: <p>Min: {Math.round(result.consolidated_weather[0].min_temp)}&deg;</p>,
          windSpeed: `Gió ${result.consolidated_weather[0].wind_direction_compass} ${Math.round(result.consolidated_weather[0].wind_speed)}mph`,
          humidity: `Độ ẩm ${result.consolidated_weather[0].humidity}%`,
          visibility: `Tầm nhìn xa ${(result.consolidated_weather[0].visibility).toFixed(1)} miles`,
          pressure: `Áp suất ${Math.round(result.consolidated_weather[0].air_pressure)}mb`,
          weatherStateAbbr: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[0].weather_state_abbr}.svg`,
          
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
    const movingWidth = width - 1080*2;

    movingContainer.style.left = `${movingWidth}px`;
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

          applicableDate: moment(result.data.consolidated_weather[0].applicable_date).format('DD-MM-YYYY'),
          weatherStateName: result.data.consolidated_weather[0].weather_state_name,
          theTemp: <p>{Math.round(result.data.consolidated_weather[0].the_temp)}&deg;</p>,
          maxTemp: <p>Max: {Math.round(result.data.consolidated_weather[0].max_temp)}&deg;</p>,
          minTemp: <p>Min: {Math.round(result.data.consolidated_weather[0].min_temp)}&deg;</p>,
          windSpeed: `Gió ${result.data.consolidated_weather[0].wind_direction_compass} ${Math.round(result.data.consolidated_weather[0].wind_speed)}mph`,
          humidity: `Độ ẩm ${result.data.consolidated_weather[0].humidity}%`,
          visibility: `Tầm nhìn xa ${(result.data.consolidated_weather[0].visibility).toFixed(1)} miles`,
          pressure: `Áp suất ${Math.round(result.data.consolidated_weather[0].air_pressure)}mb`,
          weatherStateAbbr: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[0].weather_state_abbr}.svg`,
          
          applicableDate1: moment(result.data.consolidated_weather[0].applicable_date).format('DD-MM-YYYY'),
          weatherStateName1: result.data.consolidated_weather[0].weather_state_name,
          theTemp1: <p>{Math.round(result.data.consolidated_weather[0].the_temp)}&deg;</p>,
          maxTemp1: <p>Max: {Math.round(result.data.consolidated_weather[0].max_temp)}&deg;</p>,
          minTemp1: <p>Min: {Math.round(result.data.consolidated_weather[0].min_temp)}&deg;</p>,
          windSpeed1: `Gió ${result.data.consolidated_weather[0].wind_direction_compass} ${Math.round(result.data.consolidated_weather[0].wind_speed)}mph`,
          humidity1: `Độ ẩm ${result.data.consolidated_weather[0].humidity}%`,
          visibility1: `Tầm nhìn xa ${(result.data.consolidated_weather[0].visibility).toFixed(1)} miles`,
          pressure1: `Áp suất ${Math.round(result.data.consolidated_weather[0].air_pressure)}mb`,
          weatherStateAbbr1: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[0].weather_state_abbr}.svg`,

          applicableDate2: moment(result.data.consolidated_weather[1].applicable_date).format('DD-MM-YYYY'),
          weatherStateName2: result.data.consolidated_weather[1].weather_state_name,
          theTemp2: <p>{Math.round(result.data.consolidated_weather[1].the_temp)}&deg;</p>,
          maxTemp2: <p>Max: {Math.round(result.data.consolidated_weather[1].max_temp)}&deg;</p>,
          minTemp2: <p>Min: {Math.round(result.data.consolidated_weather[1].min_temp)}&deg;</p>,
          windSpeed2: `Gió ${result.data.consolidated_weather[1].wind_direction_compass} ${Math.round(result.data.consolidated_weather[1].wind_speed)}mph`,
          humidity2: `Độ ẩm ${result.data.consolidated_weather[1].humidity}%`,
          visibility2: `Tầm nhìn xa ${(result.data.consolidated_weather[1].visibility).toFixed(1)} miles`,
          pressure2: `Áp suất ${Math.round(result.data.consolidated_weather[1].air_pressure)}mb`,
          weatherStateAbbr2: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[1].weather_state_abbr}.svg`,

          applicableDate3: moment(result.data.consolidated_weather[2].applicable_date).format('DD-MM-YYYY'),
          weatherStateName3: result.data.consolidated_weather[2].weather_state_name,
          theTemp3: <p>{Math.round(result.data.consolidated_weather[2].the_temp)}&deg;</p>,
          maxTemp3: <p>Max: {Math.round(result.data.consolidated_weather[2].max_temp)}&deg;</p>,
          minTemp3: <p>Min: {Math.round(result.data.consolidated_weather[2].min_temp)}&deg;</p>,
          windSpeed3: `Gió ${result.data.consolidated_weather[2].wind_direction_compass} ${Math.round(result.data.consolidated_weather[2].wind_speed)}mph`,
          humidity3: `Độ ẩm ${result.data.consolidated_weather[2].humidity}%`,
          visibility3: `Tầm nhìn xa ${(result.data.consolidated_weather[2].visibility).toFixed(1)} miles`,
          pressure3: `Áp suất ${Math.round(result.data.consolidated_weather[2].air_pressure)}mb`,
          weatherStateAbbr3: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[2].weather_state_abbr}.svg`,

          applicableDate4: moment(result.data.consolidated_weather[3].applicable_date).format('DD-MM-YYYY'),
          weatherStateName4: result.data.consolidated_weather[3].weather_state_name,
          theTemp4: <p>{Math.round(result.data.consolidated_weather[3].the_temp)}&deg;</p>,
          maxTemp4: <p>Max: {Math.round(result.data.consolidated_weather[3].max_temp)}&deg;</p>,
          minTemp4: <p>Min: {Math.round(result.data.consolidated_weather[3].min_temp)}&deg;</p>,
          windSpeed4: `Gió ${result.data.consolidated_weather[3].wind_direction_compass} ${Math.round(result.data.consolidated_weather[3].wind_speed)}mph`,
          humidity4: `Độ ẩm ${result.data.consolidated_weather[3].humidity}%`,
          visibility4: `Tầm nhìn xa ${(result.data.consolidated_weather[3].visibility).toFixed(1)} miles`,
          pressure4: `Áp suất ${Math.round(result.data.consolidated_weather[3].air_pressure)}mb`,
          weatherStateAbbr4: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[3].weather_state_abbr}.svg`,

          applicableDate5: moment(result.data.consolidated_weather[4].applicable_date).format('DD-MM-YYYY'),
          weatherStateName5: result.data.consolidated_weather[4].weather_state_name,
          theTemp5: <p>{Math.round(result.data.consolidated_weather[4].the_temp)}&deg;</p>,
          maxTemp5: <p>Max: {Math.round(result.data.consolidated_weather[4].max_temp)}&deg;</p>,
          minTemp5: <p>Min: {Math.round(result.data.consolidated_weather[4].min_temp)}&deg;</p>,
          windSpeed5: `Gió ${result.data.consolidated_weather[4].wind_direction_compass} ${Math.round(result.data.consolidated_weather[4].wind_speed)}mph`,
          humidity5: `Độ ẩm ${result.data.consolidated_weather[4].humidity}%`,
          visibility5: `Tầm nhìn xa ${(result.data.consolidated_weather[4].visibility).toFixed(1)} miles`,
          pressure5: `Áp suất ${Math.round(result.data.consolidated_weather[4].air_pressure)}mb`,
          weatherStateAbbr5: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[4].weather_state_abbr}.svg`,

          applicableDate6: moment(result.data.consolidated_weather[5].applicable_date).format('DD-MM-YYYY'),
          weatherStateName6: result.data.consolidated_weather[5].weather_state_name,
          theTemp6: <p>{Math.round(result.data.consolidated_weather[5].the_temp)}&deg;</p>,
          maxTemp6: <p>Max: {Math.round(result.data.consolidated_weather[5].max_temp)}&deg;</p>,
          minTemp6: <p>Min: {Math.round(result.data.consolidated_weather[5].min_temp)}&deg;</p>,
          windSpeed6: `Gió ${result.data.consolidated_weather[5].wind_direction_compass} ${Math.round(result.data.consolidated_weather[5].wind_speed)}mph`,
          humidity6: `Độ ẩm ${result.data.consolidated_weather[5].humidity}%`,
          visibility6: `Tầm nhìn xa ${(result.data.consolidated_weather[5].visibility).toFixed(1)} miles`,
          pressure6: `Áp suất ${Math.round(result.data.consolidated_weather[5].air_pressure)}mb`,
          weatherStateAbbr6: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[5].weather_state_abbr}.svg`,
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
    const movingWidth = width - 1080*3;

    movingContainer.style.left = `${movingWidth}px`;
  }

  btnAnotherDay = (number) => {
    const colorChange1 = document.getElementById('another-day1');
    const colorChange2 = document.getElementById('another-day2');
    const colorChange3 = document.getElementById('another-day3');
    const colorChange4 = document.getElementById('another-day4');
    const colorChange5 = document.getElementById('another-day5');
    const colorChange6 = document.getElementById('another-day6');
    
    switch (number) {
      case 1:
        this.setState ({
          applicableDate: this.state.applicableDate1,
          weatherStateName: this.state.weatherStateName1,
          theTemp: this.state.theTemp1,
          maxTemp: this.state.maxTemp1,
          minTemp: this.state.minTemp1,
          windSpeed: this.state.windSpeed1,
          humidity: this.state.humidity1,
          visibility: this.state.visibility1,
          pressure: this.state.pressure1,
          weatherStateAbbr: this.state.weatherStateAbbr1,
        });
        break;
      case 2:
        this.setState ({
          applicableDate: this.state.applicableDate2,
          weatherStateName: this.state.weatherStateName2,
          theTemp: this.state.theTemp2,
          maxTemp: this.state.maxTemp2,
          minTemp: this.state.minTemp2,
          windSpeed: this.state.windSpeed2,
          humidity: this.state.humidity2,
          visibility: this.state.visibility2,
          pressure: this.state.pressure2,
          weatherStateAbbr: this.state.weatherStateAbbr2,
        });
        break;
      case 3:
        this.setState ({
          applicableDate: this.state.applicableDate3,
          weatherStateName: this.state.weatherStateName3,
          theTemp: this.state.theTemp3,
          maxTemp: this.state.maxTemp3,
          minTemp: this.state.minTemp3,
          windSpeed: this.state.windSpeed3,
          humidity: this.state.humidity3,
          visibility: this.state.visibility3,
          pressure: this.state.pressure3,
          weatherStateAbbr: this.state.weatherStateAbbr3,
        });
        break;
      case 4:
        this.setState ({
          applicableDate: this.state.applicableDate4,
          weatherStateName: this.state.weatherStateName4,
          theTemp: this.state.theTemp4,
          maxTemp: this.state.maxTemp4,
          minTemp: this.state.minTemp4,
          windSpeed: this.state.windSpeed4,
          humidity: this.state.humidity4,
          visibility: this.state.visibility4,
          pressure: this.state.pressure4,
          weatherStateAbbr: this.state.weatherStateAbbr4,
        });
        break;
      case 5:
        this.setState ({
          applicableDate: this.state.applicableDate5,
          weatherStateName: this.state.weatherStateName5,
          theTemp: this.state.theTemp5,
          maxTemp: this.state.maxTemp5,
          minTemp: this.state.minTemp5,
          windSpeed: this.state.windSpeed5,
          humidity: this.state.humidity5,
          visibility: this.state.visibility5,
          pressure: this.state.pressure5,
          weatherStateAbbr: this.state.weatherStateAbbr5,
        });
        break;
      case 6:
        this.setState ({
          applicableDate: this.state.applicableDate6,
          weatherStateName: this.state.weatherStateName6,
          theTemp: this.state.theTemp6,
          maxTemp: this.state.maxTemp6,
          minTemp: this.state.minTemp6,
          windSpeed: this.state.windSpeed6,
          humidity: this.state.humidity6,
          visibility: this.state.visibility6,
          pressure: this.state.pressure6,
          weatherStateAbbr: this.state.weatherStateAbbr6,
        });
        break;
      default:
        console.log('nothing to show');
        break;
    }
  }

  btnBack = () => {
    const movingContainer = document.getElementById('moving-container');
    const width = movingContainer.offsetWidth;
    const result = width - 1080*2;

    console.log(width);
    movingContainer.style.left = `${result}px`;
  }

  render() {
    let data = null;
    if (this.state.isBusy && !this.state.errorMessage) {
      data = <p>thank for waiting me...</p>;
    } else if (this.state.errorMessage) {
      data = <p>something went wrong: {this.state.errorMessage}</p>
    }

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
                    <button onClick={this.btnBack}>Trở lại</button>
                    <div className="city-title">
                      {this.state.cityShowTitle}
                    </div>                
                  </div>

                  <div className="weather-main-day-content">
                    <div className="wind-speed">
                      <p>{this.state.windSpeed}</p>
                      <p>{this.state.pressure}</p>
                      <p>{this.state.humidity}</p>
                      {this.state.minTemp}
                      {this.state.maxTemp}
                    </div>

                    <div className="weather-state-name">
                      <div className="weather-abbr">
                        <img src={this.state.weatherStateAbbr} alt="" />
                      </div>

                      <div className="state-name">
                        {this.state.weatherStateName}
                      </div>
                    </div>

                    <div className="weather-temp">
                        {this.state.theTemp}
                      </div>
                  </div>
                </div>

                <div className="weather-following-days">
                  <div className="follow-day-size" id="another-day1" onClick={() => this.btnAnotherDay(1)}>
                    <p>{this.state.applicableDate1}</p>
                    <img src={this.state.weatherStateAbbr1} alt="" />
                    <p>{this.state.weatherStateName1}</p>
                  </div>

                  <div className="follow-day-size" id="another-day2" onClick={() => this.btnAnotherDay(2)}>
                    <p>{this.state.applicableDate2}</p>
                    <img src={this.state.weatherStateAbbr2} alt="" />
                    <p>{this.state.weatherStateName2}</p>
                  </div>
                  
                  <div className="follow-day-size" id="another-day3" onClick={() => this.btnAnotherDay(3)}>
                    <p>{this.state.applicableDate3}</p>
                    <img src={this.state.weatherStateAbbr3} alt="" />
                    <p>{this.state.weatherStateName3}</p>
                  </div>
                  
                  <div className="follow-day-size" id="another-day4" onClick={() => this.btnAnotherDay(4)}>
                    <p>{this.state.applicableDate4}</p>
                    <img src={this.state.weatherStateAbbr4} alt="" />
                    <p>{this.state.weatherStateName4}</p>
                  </div>
                  
                  <div className="follow-day-size" id="another-day5" onClick={() => this.btnAnotherDay(5)}>
                    <p>{this.state.applicableDate5}</p>
                    <img src={this.state.weatherStateAbbr5} alt="" />
                    <p>{this.state.weatherStateName5}</p>
                  </div>
                  
                  <div className="follow-day-size" id="another-day6" onClick={() => this.btnAnotherDay(6)}>
                    <p>{this.state.applicableDate6}</p>
                    <img src={this.state.weatherStateAbbr6} alt="" />
                    <p>{this.state.weatherStateName6}</p>
                  </div>
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