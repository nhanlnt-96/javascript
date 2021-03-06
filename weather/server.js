const express = require('express');
const axios = require('axios');
const cors = require('cors');

//set origin
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

const app = express();
const port = 4000;

//set origin
app.use(cors(corsOptions));


state = {
    cityId: ''
}

//get weather by city name
app.get('/api/v1/search/', async (req, res) => {
    try {
        const cityNameResult = await axios.get(`https://www.metaweather.com/api/location/search/?query=${req.query.cityName}`);
        console.log(cityNameResult.data); 
        res.send(cityNameResult.data);       
    } catch (error) {
        console.log(error); 
    }
})

//get weather by city id
app.get('/api/v1/search/:woeid', async (req, res) => {
    try {
        const cityNameResult = await axios.get(`https://www.metaweather.com/api/location/${req.params.woeid}`);
        res.send(cityNameResult.data);       
    } catch (error) {
        console.log(error); 
    }
})

app.listen(port);
console.log(`Welldone: ${port}`);