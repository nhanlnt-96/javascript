import React from 'react';
import { getWeatherIcon } from '../utils';

export const WeatherDayInDetail = ({ cityShowTitle, weatherDetail, btnBack }) => {
    
    return (
        <div className="weather-main-day-result">
            <div className="weather-main-day-header">
                <button onClick={btnBack}>Trở lại</button>
                <div className="city-title">
                    {cityShowTitle}
                </div>                
            </div>

            <div className="weather-main-day-content">
                <div className="wind-speed">
                    <p>Gió {weatherDetail.wind_direction_compass}</p>
                    <p>Áp suất {Number(weatherDetail.air_pressure).toFixed(1)}mb</p>
                    <p>Đổ ẩm {Number(weatherDetail.humidity).toFixed(1)}</p>
                    <p>Min: {Number(weatherDetail.min_temp).toFixed(1)}&deg;</p>
                    <p>Max: {Number(weatherDetail.max_temp).toFixed(1)}&deg;</p>
                </div>

                <div className="weather-state-name">
                    <div className="weather-abbr">
                        <img src={getWeatherIcon(weatherDetail.weather_state_abbr)} alt="" />
                    </div>

                    <div className="state-name">
                        {weatherDetail.weather_state_name}
                    </div>
                </div>

                <div className="weather-temp">
                    <p>{Math.round(weatherDetail.the_temp)}&deg;</p>
                </div>
            </div>
        </div>
    );
}