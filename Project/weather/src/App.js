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
          cityShowTitle: result.data.title,

          applicableDate1: moment(result.data.consolidated_weather[0].applicable_date).format('DD-MM-YYYY'),
          weatherStateName1: result.data.consolidated_weather[0].weather_state_name,
          theTemp1: <p>{Math.round(result.data.consolidated_weather[0].the_temp)} &#8451;</p>,
          maxTemp1: <p>{Math.round(result.data.consolidated_weather[0].max_temp)} &#8451;</p>,
          minTemp1: <p>{Math.round(result.data.consolidated_weather[0].min_temp)} &#8451;</p>,
          weatherStateAbbr1: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[0].weather_state_abbr}.svg`,

          applicableDate2: moment(result.data.consolidated_weather[1].applicable_date).format('DD-MM-YYYY'),
          weatherStateName2: result.data.consolidated_weather[1].weather_state_name,
          theTemp2: <p>{Math.round(result.data.consolidated_weather[1].the_temp)} &#8451;</p>,
          maxTemp2: <p>{Math.round(result.data.consolidated_weather[1].max_temp)} &#8451;</p>,
          minTemp2: <p>{Math.round(result.data.consolidated_weather[1].min_temp)} &#8451;</p>,
          weatherStateAbbr2: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[1].weather_state_abbr}.svg`,

          applicableDate3: moment(result.data.consolidated_weather[2].applicable_date).format('DD-MM-YYYY'),
          weatherStateName3: result.data.consolidated_weather[2].weather_state_name,
          theTemp3: <p>{Math.round(result.data.consolidated_weather[2].the_temp)} &#8451;</p>,
          maxTemp3: <p>{Math.round(result.data.consolidated_weather[2].max_temp)} &#8451;</p>,
          minTemp3: <p>{Math.round(result.data.consolidated_weather[2].min_temp)} &#8451;</p>,
          weatherStateAbbr3: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[2].weather_state_abbr}.svg`,

          applicableDate4: moment(result.data.consolidated_weather[3].applicable_date).format('DD-MM-YYYY'),
          weatherStateName4: result.data.consolidated_weather[3].weather_state_name,
          theTemp4: <p>{Math.round(result.data.consolidated_weather[3].the_temp)} &#8451;</p>,
          maxTemp4: <p>{Math.round(result.data.consolidated_weather[3].max_temp)} &#8451;</p>,
          minTemp4: <p>{Math.round(result.data.consolidated_weather[3].min_temp)} &#8451;</p>,
          weatherStateAbbr4: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[3].weather_state_abbr}.svg`,

          applicableDate5: moment(result.data.consolidated_weather[4].applicable_date).format('DD-MM-YYYY'),
          weatherStateName5: result.data.consolidated_weather[4].weather_state_name,
          theTemp5: <p>{Math.round(result.data.consolidated_weather[4].the_temp)} &#8451;</p>,
          maxTemp5: <p>{Math.round(result.data.consolidated_weather[4].max_temp)} &#8451;</p>,
          minTemp5: <p>{Math.round(result.data.consolidated_weather[4].min_temp)} &#8451;</p>,
          weatherStateAbbr5: `https://www.metaweather.com/static/img/weather/${result.data.consolidated_weather[4].weather_state_abbr}.svg`,

          applicableDate6: moment(result.data.consolidated_weather[5].applicable_date).format('DD-MM-YYYY'),
          weatherStateName6: result.data.consolidated_weather[5].weather_state_name,
          theTemp6: <p>{Math.round(result.data.consolidated_weather[5].the_temp)} &#8451;</p>,
          maxTemp6: <p>{Math.round(result.data.consolidated_weather[5].max_temp)} &#8451;</p>,
          minTemp6: <p>{Math.round(result.data.consolidated_weather[5].min_temp)} &#8451;</p>,
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
  }

  render() {
    let data = null;
    if (this.state.isBusy && !this.state.errorMessage) {
      data = <p className="loading-status-text">thank for waiting me...</p>;
    } else if (this.state.errorMessage) {
      data = <p className="loading-status-text">Something went wrong: {this.state.errorMessage}</p>
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
            <div className="key-search">
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

          <div className="weather-content">
            <div className="weather-title">
              <p>{this.state.cityShowTitle}</p>
            </div>
            
            <div className="weather-result-main">
              <div className="main-result-weather">
                <p>{this.state.applicableDate1}</p>
                <p>{this.state.theTemp1}</p>
                <p>{this.state.weatherStateName1}</p>
                <img src={this.state.weatherStateAbbr1} alt="" />
                <p>{this.state.maxTemp1}</p>
                <p>{this.state.minTemp1}</p>
              </div>

              <div className="follow-result-weather-day">
                <div className="day2">
                  <p>{this.state.applicableDate2}</p>
                  <p>{this.state.theTemp2}</p>
                  <p>{this.state.weatherStateName2}</p>
                  <img src={this.state.weatherStateAbbr2} alt="" />
                  <p>{this.state.maxTemp2}</p>
                  <p>{this.state.minTemp2}</p>
                </div>

                <div className="day3">
                  <p>{this.state.applicableDate3}</p>
                  <p>{this.state.theTemp3}</p>
                  <p>{this.state.weatherStateName3}</p>
                  <img src={this.state.weatherStateAbbr3} alt="" />
                  <p>{this.state.maxTemp3}</p>
                  <p>{this.state.minTemp3}</p>
                </div>

                <div className="day4">
                  <p>{this.state.applicableDate4}</p>
                  <p>{this.state.theTemp4}</p>
                  <p>{this.state.weatherStateName4}</p>
                  <img src={this.state.weatherStateAbbr4} alt="" />
                  <p>{this.state.maxTemp4}</p>
                  <p>{this.state.minTemp4}</p>
                </div>

                <div className="day5">
                  <p>{this.state.applicableDate5}</p>
                  <p>{this.state.theTemp5}</p>
                  <p>{this.state.weatherStateName5}</p>
                  <img src={this.state.weatherStateAbbr5} alt="" />
                  <p>{this.state.maxTemp5}</p>
                  <p>{this.state.minTemp5}</p>
                </div>

                <div className="day6">
                  <p>{this.state.applicableDate6}</p>
                  <p>{this.state.theTemp6}</p>
                  <p>{this.state.weatherStateName6}</p>
                  <img src={this.state.weatherStateAbbr6} alt="" />
                  <p>{this.state.maxTemp6}</p>
                  <p>{this.state.minTemp6}</p>
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