import axios from 'axios';

const baseURL = 'http://localhost:4000/api/v1/search/';

export const getCityById = async (searchWoeid) => {
    return axios.get(baseURL + searchWoeid)
}