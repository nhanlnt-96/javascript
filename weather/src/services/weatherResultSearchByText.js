import axios from 'axios';

const baseURL = 'http://localhost:4000/api/v1/search/';

export const getCityByText = async (searchText) => {
    return axios.get(baseURL, {
        params: {
            cityName: searchText,
        }
    })
}