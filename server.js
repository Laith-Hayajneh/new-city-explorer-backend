'use strict';

const express = require('express');//instal expreex
const server = express();// we let the server to use express library
const weatherData = require('./data/weather.json')
require('dotenv').config();
const cors = require('cors')

const PORT = process.env.PORT;
server.use(cors())



//home route localhost:3001/
server.get('/', (req, res) => {
    res.status(200).send('home route')
})

/// for lab 07
let search = weatherData.find(city => {
    if (city.city_name == 'Amman') {
        return city
    }
});
///////////////////
class Forecast {
    constructor(date, desscription) {
        this.date = date;
        this.desscription = desscription
    }
}





// localhost:3001/weather?lat=31.95&lon=35.91&searchQuery=Amman
// localhost:3001/weather?lat=31.95&lon=35.91&searchQuery=Amman


server.get('/weather', (req, res) => {
    // console.log(search,'sdsdsd')
    console.log(req.query);
    try {
    let searchedCity = weatherData.find(city => {

        if (city.city_name == req.query.searchQuery) {
            console.log('we get data ');
            return city
        }
        // console.log(city.lat);
        // console.log(city.lon);
        // console.log(city.city_name);
        // console.log( req.query.searchQuery);
        // if ( city.lat == req.query.lat&& city.lon == req.query.lon && city.city_name == req.query.searchQuery) 
    });
    // console.log(searchedCity.data, 'llll');
    let cityObj = searchedCity.data.map(item => {
        return new Forecast(item.valid_date, item.weather.description)

    })
    res.status(200).send(cityObj)
    // console.log(cityObj);
} catch (error) {
    return error
res.send('Error no weather information')
console.log(error);
}

})

// class Forecast 


//&& city.lon == req.query.lon && city.lat == req.query.lat
//city.city_name == req.query.searchedCity





// localhost:3001/test

server.get('/test', (req, res) => {
    console.log('object');
    res.status(200).send('my server working ')
})
// for any route not existe
server.get('*', (req, res) => {
    res.status(404).send('page not found')
})
server.listen(PORT, () => {
    console.log(`Listining on ${PORT}`);
})

