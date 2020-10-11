const express = require('express');
const axios = require('axios');
const cors = require('cors');

//set origin
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();
const port = 4000;
//set origin
app.use(cors(corsOptions));

//get api
app.get('/api/v1/weather/get-city-name', async (req, res) => {
  try {
    const result = await axios.get(`https://www.metaweather.com/api/location/search/?query=${req.query.cityName}`);
    console.log(result);
    res.send(result.data);
  } catch (err) {
    res.send(err);
  }
})

app.get('/api/v1/weather/get-weather/:woeid', async (req, res) => {
  try {
    const result = await axios.get(`https://www.metaweather.com/api/location/${req.params.woeid}`);
    res.send(result.data);
  } catch (err) {
    res.send(err);
  }
})

app.listen(port);
console.log(`Server started on: ${port}`);