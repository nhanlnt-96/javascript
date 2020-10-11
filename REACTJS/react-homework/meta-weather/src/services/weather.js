import axios from 'axios';

const baseURL = 'http://localhost:4000/api/v1/weather';

export const getCityByText = async (searchText) => {
    return axios.get(baseURL + '/get-city-name', {
        params: {
            cityName: searchText,
        }
    });
}