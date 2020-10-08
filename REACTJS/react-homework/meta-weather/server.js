const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { response } = require('express');

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
app.get('/search/', async (req, res) => {
  try {
    const result = await axios.get(`https://www.metaweather.com/api/location/search/?query=${req.query.cityName}`);
    const woeid = result.data[0].woeid;
    console.log(`woeid is: ${woeid}`);

    const url = await axios.get(`https://www.metaweather.com/api/location/${woeid}`);
    console.log(url);
    res.send(url.data);
  } catch (err) {
    console.log(err);
  }
})

app.listen(port);
console.log(`Server started on: ${port}`);