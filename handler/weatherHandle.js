'use strict';

const axios = require("axios");


// https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=d52f74d6bdf84d1a9eabedf368cf4a9a

function weatherHandler(req,res) {
    let searchedCity=req.query.city
    let url=`https://api.weatherbit.io/v2.0/forecast/daily?city=${searchedCity}&key=${process.env.WEATHER_KEY}`;
    axios.get(url)
    .then(resData=>{
        console.log(req.query);
        res.send(resData.data)
    })
    .catch(error=>{
        res.send(error)
    })
    
};
module.exports= weatherHandler