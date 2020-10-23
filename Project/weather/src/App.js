import React from 'react';
import './App.css';
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
      title: '',
      
      weatherDay1: '',
      weatherStateNameDay1: '',
      weatherStateDay1: '',
      theTempDay1: '',
      maxTempDay1: '',
      minTempDay1: '',
      windSpeedDay1: '',
      
      weatherDay2: '',
      weatherStateNameDay2: '',
      weatherStateDay2: '',
      theTempDay2: '',
      maxTempDay2: '',
      minTempDay2: '',
      windSpeedDay2: '',
      
      weatherDay3: '',
      weatherStateNameDay3: '',
      weatherStateDay3: '',
      theTempDay3: '',
      maxTempDay3: '',
      minTempDay3: '',
      windSpeedDay3: '',
      
      weatherDay4: '',
      weatherStateNameDay4: '',
      weatherStateDay4: '',
      theTempDay4: '',
      maxTempDay4: '',
      minTempDay4: '',
      windSpeedDay4: '',
      
      weatherDay5: '',
      weatherStateNameDay5: '',
      weatherStateDay5: '',
      theTempDay5: '',
      maxTempDay5: '',
      minTempDay5: '',
      windSpeedDay5: '',
      
      weatherDay6: '',
      weatherStateNameDay6: '',
      weatherStateDay6: '',
      theTempDay6: '',
      maxTempDay6: '',
      minTempDay6: '',
      windSpeedDay6: '',
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
          weatherResult: result,
          title: result.data.title,
          
          weatherDay1: result.data.consolidated_weather[0].applicable_date,
          weatherStateNameDay1: result.data.consolidated_weather[0].weather_state_name,
          weatherStateDay1: result.data.consolidated_weather[0].weather_state_abbr,
          theTempDay1: Math.round(result.data.consolidated_weather[0].the_temp),
          maxTempDay1: Math.round(result.data.consolidated_weather[0].max_temp),
          minTempDay1: Math.round(result.data.consolidated_weather[0].min_temp),
          windSpeedDay1: Math.round(result.data.consolidated_weather[0].wind_speed),
          
          weatherDay2: result.data.consolidated_weather[1].applicable_date,
          weatherStateNameDay2: result.data.consolidated_weather[1].weather_state_name,
          weatherStateDay2: result.data.consolidated_weather[1].weather_state_abbr,
          theTempDay2: Math.round(result.data.consolidated_weather[1].the_temp),
          maxTempDay2: Math.round(result.data.consolidated_weather[1].max_temp),
          minTempDay2: Math.round(result.data.consolidated_weather[1].min_temp),
          windSpeedDay2: Math.round(result.data.consolidated_weather[1].wind_speed),
          
          weatherDay3: result.data.consolidated_weather[2].applicable_date,
          weatherStateNameDay3: result.data.consolidated_weather[2].weather_state_name,
          weatherStateDay3: result.data.consolidated_weather[2].weather_state_abbr,
          theTempDay3: Math.round(result.data.consolidated_weather[2].the_temp),
          maxTempDay3: Math.round(result.data.consolidated_weather[2].max_temp),
          minTempDay3: Math.round(result.data.consolidated_weather[2].min_temp),
          windSpeedDay3: Math.round(result.data.consolidated_weather[2].wind_speed),
          
          weatherDay4: result.data.consolidated_weather[3].applicable_date,
          weatherStateNameDay4: result.data.consolidated_weather[3].weather_state_name,
          weatherStateDay4: result.data.consolidated_weather[3].weather_state_abbr,
          theTempDay4: Math.round(result.data.consolidated_weather[3].the_temp),
          maxTempDay4: Math.round(result.data.consolidated_weather[3].max_temp),
          minTempDay4: Math.round(result.data.consolidated_weather[3].min_temp),
          windSpeedDay4: Math.round(result.data.consolidated_weather[3].wind_speed),
          
          weatherDay5: result.data.consolidated_weather[4].applicable_date,
          weatherStateNameDay5: result.data.consolidated_weather[4].weather_state_name,
          weatherStateDay5: result.data.consolidated_weather[4].weather_state_abbr,
          theTempDay5: Math.round(result.data.consolidated_weather[4].the_temp),
          maxTempDay5: Math.round(result.data.consolidated_weather[4].max_temp),
          minTempDay5: Math.round(result.data.consolidated_weather[4].min_temp),
          windSpeedDay5: Math.round(result.data.consolidated_weather[4].wind_speed),
          
          weatherDay6: result.data.consolidated_weather[5].applicable_date,
          weatherStateNameDay6: result.data.consolidated_weather[5].weather_state_name,
          weatherStateDay6: result.data.consolidated_weather[5].weather_state_abbr,
          theTempDay6: Math.round(result.data.consolidated_weather[5].the_temp),
          maxTempDay6: Math.round(result.data.consolidated_weather[5].max_temp),
          minTempDay6: Math.round(result.data.consolidated_weather[5].min_temp),
          windSpeedDay6: Math.round(result.data.consolidated_weather[5].wind_speed),
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
      return (
        <div>
          <p>hello</p>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="main">
        <CityNameInput getWeatherInfo={this.getWeatherInfo} />

        <div className="city-list">
          <ul>
            {
              this.state.testResult.map((cityTitle, index) => (
                <li 
                  key={cityTitle.woeid} 
                  onClick={() => this.onClickCityTitle(cityTitle)}>
                  {index+1}. {cityTitle.title} - {cityTitle.woeid}
                </li>
                ))
            }
          </ul>
        </div>
        
        <div className="weather-result">
          <div className="title-city">
            <h1>City: {this.state.title}</h1>
          </div>

          <div className="weather-result-city">
            <div className="weather-result-day-1">
              <p>day1: {this.state.weatherDay1} - {this.state.weatherStateNameDay1}</p>
              <img src={`https://www.metaweather.com/static/img/weather/png/${this.state.weatherStateDay1}.png`} alt="weather-state" />
              <p>temp: {this.state.theTempDay1}</p>
              <p>max temp: {this.state.maxTempDay1}</p>
              <p>min temp: {this.state.minTempDay1}</p>
              <p>wind speed: {this.state.windSpeedDay1}</p>
            </div>

            <div className="weather-result-day-2">
              <p>day2: {this.state.weatherDay2} - {this.state.weatherStateNameDay2}</p>
              <img src={`https://www.metaweather.com/static/img/weather/png/${this.state.weatherStateDay2}.png`} alt="weather-state" />
              <p>temp: {this.state.theTempDay2}</p>
              <p>max temp: {this.state.maxTempDay2}</p>
              <p>min temp: {this.state.minTempDay2}</p>
              <p>wind speed: {this.state.windSpeedDay2}</p>
            </div>

            <div className="weather-result-day-3">
              <p>day3: {this.state.weatherDay3} - {this.state.weatherStateNameDay3}</p>
              <img src={`https://www.metaweather.com/static/img/weather/png/${this.state.weatherStateDay3}.png`} alt="weather-state" />
              <p>temp: {this.state.theTempDay3}</p>
              <p>max temp: {this.state.maxTempDay3}</p>
              <p>min temp: {this.state.minTempDay3}</p>
              <p>wind speed: {this.state.windSpeedDay3}</p>
            </div>

            <div className="weather-result-day-4">
              <p>day4: {this.state.weatherDay4} - {this.state.weatherStateNameDay4}</p>
              <img src={`https://www.metaweather.com/static/img/weather/png/${this.state.weatherStateDay4}.png`} alt="weather-state" />
              <p>temp: {this.state.theTempDay4}</p>
              <p>max temp: {this.state.maxTempDay4}</p>
              <p>min temp: {this.state.minTempDay4}</p>
              <p>wind speed: {this.state.windSpeedDay4}</p>
            </div>

            <div className="weather-result-day-5">
              <p>day5: {this.state.weatherDay5} - {this.state.weatherStateNameDay5}</p>
              <img src={`https://www.metaweather.com/static/img/weather/png/${this.state.weatherStateDay5}.png`} alt="weather-state" />
              <p>temp: {this.state.theTempDay5}</p>
              <p>max temp: {this.state.maxTempDay5}</p>
              <p>min temp: {this.state.minTempDay5}</p>
              <p>wind speed: {this.state.windSpeedDay5}</p>
            </div>

            <div className="weather-result-day-6">
              <p>day6: {this.state.weatherDay6} - {this.state.weatherStateNameDay6}</p>
              <img src={`https://www.metaweather.com/static/img/weather/png/${this.state.weatherStateDay6}.png`} alt="weather-state" />
              <p>temp: {this.state.theTempDay6}</p>
              <p>max temp: {this.state.maxTempDay6}</p>
              <p>min temp: {this.state.minTempDay6}</p>
              <p>wind speed: {this.state.windSpeedDay6}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;