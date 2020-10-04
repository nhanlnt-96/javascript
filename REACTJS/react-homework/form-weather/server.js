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

//old syntax
app.get('/', function (req, res) {
    axios.get('https://www.metaweather.com/api/location/search/?query=london')
    .then((response) => {
        console.log(response);
        res.send(response.data);
    }).catch((err) => {
        console.log(err);
    })
    axios.get('https://www.metaweather.com/api/location/search/?query=ho_chi_minh')
    .then((response) => {
        console.log(response);
        res.send(response.data);
    }).catch((err) => {
        console.log(err);
    })
})


//new syntax
app.get('/weather-id/:woeid', async (req, res) => {
    try {
        const result1 = await axios.get(`https://www.metaweather.com/api/location/${req.params.woeid}`);
        const result2 = await axios.get(`https://www.metaweather.com/api/location/${req.params.woeid}`);
        res.send({ london: result1.data, hoChiMinh: result2.data});
    } catch (err) {
        console.log(err);
    }
});

//new search
app.get('/weather-name', async (req, res) => {
    try {
        console.log('call api with data: ', req.query);
        const result = await axios.get(`https://www.metaweather.com/api/location/search/?query=${req.query.cityName}`);
        console.log('api call successfully and data: ', result.data);
        res.send(result.data);
    } catch (err) {
        console.log(err);
    }
});


app.listen(port);
console.log(`Server started successfully at localhost:${port}`);