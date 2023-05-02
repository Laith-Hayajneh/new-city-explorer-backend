'use strict';
const axios = require('axios');

//https://api.themoviedb.org/3/search/movie?api_key=29d024c579cd643cbc92faa44e90ad4a&query=roma
let iMemory = {}
function Movieshandler(req, res) {
    // console.log(iMemory,'imemory');
    let searchQuery = req.query.city
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&query=${searchQuery}`;

    if (iMemory[searchQuery] !== undefined) {
        console.log('from memorry');
        res.send(iMemory[searchQuery])

    } else {

        axios.get(url)
            .then(movie => {
                // console.log('getting movies',movie.data);
                console.log('from api');

                iMemory[searchQuery] = movie.data
                res.send(movie.data)
            }).catch(error => {
                res.send(error)
            }
                // res.status(500).send('something error while reciving from movie')
            )
    }
};

module.exports = Movieshandler