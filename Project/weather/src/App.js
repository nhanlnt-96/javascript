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
      weatherStateAbbr1: '',

      applicableDate2: '',
      weatherStateName2: '',
      theTemp2: '',
      maxTemp2: '',
      minTemp2: '',
      weatherStateAbbr2: '',

      applicableDate3: '',
      weatherStateName3: '',
      theTemp3: '',
      maxTemp3: '',
      minTemp3: '',
      weatherStateAbbr3: '',

      applicableDate4: '',
      weatherStateName4: '',
      theTemp4: '',
      maxTemp4: '',
      minTemp4: '',
      weatherStateAbbr4: '',

      applicableDate5: '',
      weatherStateName5: '',
      theTemp5: '',
      maxTemp5: '',
      minTemp5: '',
      weatherStateAbbr5: '',

      applicableDate6: '',
      weatherStateName6: '',
      theTemp6: '',
      maxTemp6: '',
      minTemp6: '',
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
          weatherStateAbbr1: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[0].weather_state_abbr}.svg`,

          applicableDate2: moment(result.consolidated_weather[1].applicable_date).format('DD-MM-YYYY'),
          weatherStateName2: result.consolidated_weather[1].weather_state_name,
          theTemp2: <p>{Math.round(result.consolidated_weather[1].the_temp)}&deg;</p>,
          maxTemp2: <p>Max: {Math.round(result.consolidated_weather[1].max_temp)}&deg;</p>,
          minTemp2: <p>Min: {Math.round(result.consolidated_weather[1].min_temp)}&deg;</p>,
          weatherStateAbbr2: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[1].weather_state_abbr}.svg`,

          applicableDate3: moment(result.consolidated_weather[2].applicable_date).format('DD-MM-YYYY'),
          weatherStateName3: result.consolidated_weather[2].weather_state_name,
          theTemp3: <p>{Math.round(result.consolidated_weather[2].the_temp)}&deg;</p>,
          maxTemp3: <p>Max: {Math.round(result.consolidated_weather[2].max_temp)}&deg;</p>,
          minTemp3: <p>Min: {Math.round(result.consolidated_weather[2].min_temp)}&deg;</p>,
          weatherStateAbbr3: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[2].weather_state_abbr}.svg`,

          applicableDate4: moment(result.consolidated_weather[3].applicable_date).format('DD-MM-YYYY'),
          weatherStateName4: result.consolidated_weather[3].weather_state_name,
          theTemp4: <p>{Math.round(result.consolidated_weather[3].the_temp)}&deg;</p>,
          maxTemp4: <p>Max: {Math.round(result.consolidated_weather[3].max_temp)}&deg;</p>,
          minTemp4: <p>Min: {Math.round(result.consolidated_weather[3].min_temp)}&deg;</p>,
          weatherStateAbbr4: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[3].weather_state_abbr}.svg`,

          applicableDate5: moment(result.consolidated_weather[4].applicable_date).format('DD-MM-YYYY'),
          weatherStateName5: result.consolidated_weather[4].weather_state_name,
          theTemp5: <p>{Math.round(result.consolidated_weather[4].the_temp)}&deg;</p>,
          maxTemp5: <p>Max: {Math.round(result.consolidated_weather[4].max_temp)}&deg;</p>,
          minTemp5: <p>Min: {Math.round(result.consolidated_weather[4].min_temp)}&deg;</p>,
          weatherStateAbbr5: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[4].weather_state_abbr}.svg`,

          applicableDate6: moment(result.consolidated_weather[5].applicable_date).format('DD-MM-YYYY'),
          weatherStateName6: result.consolidated_weather[5].weather_state_name,
          theTemp6: <p>{Math.round(result.consolidated_weather[5].the_temp)}&deg;</p>,
          maxTemp6: <p>Max: {Math.round(result.consolidated_weather[5].max_temp)}&deg;</p>,
          minTemp6: <p>Min: {Math.round(result.consolidated_weather[5].min_temp)}&deg;</p>,
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

          applicableDate1: moment(result.data.consolidated_weather[0].applicable_date).format('DD-MM-YYYY'),
          weatherStateName1: result.data.consolidated_weather[0].weather_state_name,
          theTemp1: <p>{Math.round(result.data.consolidated_weather[0].the_temp)}&deg;</p>,
          maxTemp1: <p>Max: {Math.round(result.data.consolidated_weather[0].max_temp)}&deg;</p>,
          minTemp1: <p>Min: {Math.round(result.data.consolidated_weather[0].min_temp)}&deg;</p>,
          weatherStateAbbr1: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[0].weather_state_abbr}.svg`,

          applicableDate2: moment(result.data.consolidated_weather[1].applicable_date).format('DD-MM-YYYY'),
          weatherStateName2: result.data.consolidated_weather[1].weather_state_name,
          theTemp2: <p>{Math.round(result.data.consolidated_weather[1].the_temp)}&deg;</p>,
          maxTemp2: <p>Max: {Math.round(result.data.consolidated_weather[1].max_temp)}&deg;</p>,
          minTemp2: <p>Min: {Math.round(result.data.consolidated_weather[1].min_temp)}&deg;</p>,
          weatherStateAbbr2: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[1].weather_state_abbr}.svg`,

          applicableDate3: moment(result.data.consolidated_weather[2].applicable_date).format('DD-MM-YYYY'),
          weatherStateName3: result.data.consolidated_weather[2].weather_state_name,
          theTemp3: <p>{Math.round(result.data.consolidated_weather[2].the_temp)}&deg;</p>,
          maxTemp3: <p>Max: {Math.round(result.data.consolidated_weather[2].max_temp)}&deg;</p>,
          minTemp3: <p>Min: {Math.round(result.data.consolidated_weather[2].min_temp)}&deg;</p>,
          weatherStateAbbr3: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[2].weather_state_abbr}.svg`,

          applicableDate4: moment(result.data.consolidated_weather[3].applicable_date).format('DD-MM-YYYY'),
          weatherStateName4: result.data.consolidated_weather[3].weather_state_name,
          theTemp4: <p>{Math.round(result.data.consolidated_weather[3].the_temp)}&deg;</p>,
          maxTemp4: <p>Max: {Math.round(result.data.consolidated_weather[3].max_temp)}&deg;</p>,
          minTemp4: <p>Min: {Math.round(result.data.consolidated_weather[3].min_temp)}&deg;</p>,
          weatherStateAbbr4: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[3].weather_state_abbr}.svg`,

          applicableDate5: moment(result.data.consolidated_weather[4].applicable_date).format('DD-MM-YYYY'),
          weatherStateName5: result.data.consolidated_weather[4].weather_state_name,
          theTemp5: <p>{Math.round(result.data.consolidated_weather[4].the_temp)}&deg;</p>,
          maxTemp5: <p>Max: {Math.round(result.data.consolidated_weather[4].max_temp)}&deg;</p>,
          minTemp5: <p>Min: {Math.round(result.data.consolidated_weather[4].min_temp)}&deg;</p>,
          weatherStateAbbr5: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[4].weather_state_abbr}.svg`,

          applicableDate6: moment(result.data.consolidated_weather[5].applicable_date).format('DD-MM-YYYY'),
          weatherStateName6: result.data.consolidated_weather[5].weather_state_name,
          theTemp6: <p>{Math.round(result.data.consolidated_weather[5].the_temp)}&deg;</p>,
          maxTemp6: <p>Max: {Math.round(result.data.consolidated_weather[5].max_temp)}&deg;</p>,
          minTemp6: <p>Min: {Math.round(result.data.consolidated_weather[5].min_temp)}&deg;</p>,
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
    const movingWidth = width - 1080*4;

    movingContainer.style.left = `${movingWidth}px`

    console.log(`console result is ${movingWidth}`);
  }

  dayWeatherDetail = () => {
    console.log(this.state.weatherResult.title);
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
                <div className="city-title">
                  <p>{this.state.cityShowTitle}</p>
                </div>

                <div className="weather-result">
                  <div className="main-weather-day-min-max-temp">
                    <div className="main-weather-day">
                      {this.state.applicableDate1}
                    </div>
                    
                    <div className="main-weather-min-max-temp">
                      {this.state.minTemp1}
                      {this.state.maxTemp1}
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