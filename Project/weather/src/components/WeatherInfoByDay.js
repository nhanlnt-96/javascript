import React from 'react';
import moment from 'moment';
import { getWeatherIcon } from '../utils'

export const WeatherInfoByDay = (props) => {
    const { date, iconName, weatherState, btnAnotherDay, isActive } = props;
    return (
        <div className={`follow-day-size ${isActive ? 'active' : ''}`}
             onClick={() => btnAnotherDay(date)}
        >
            <p>{moment(date).format('DD/MM/YYYY')}</p>
            <img src={getWeatherIcon(iconName)} />
            <p>{weatherState}</p>
        </div>
    )
}