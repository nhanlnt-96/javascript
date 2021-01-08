import axios from 'axios';

const baseURL = 'http://localhost:4000/api/v1/search/';


export const searchCityByText = async (searchText) => {
    return axios.get(baseURL, {
        params: {
            cityName: searchText,
        }
    })
}

export const getWeatherInfoByWoeid = async (searchWoeid) => {
    return axios.get(baseURL + searchWoeid)
}