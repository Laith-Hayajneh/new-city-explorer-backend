'use strict';
const axios=require('axios');

//https://api.themoviedb.org/3/search/movie?api_key=29d024c579cd643cbc92faa44e90ad4a&query=roma
function Movieshandler (req,res){
    let searchQuery=req.query.city
    let url=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&query=${searchQuery}`;
    axios.get(url)
    .then(movie=>{
        // console.log('getting movies',movie.data);
        res.send(movie.data)
    }).catch(error=>{
        res.send(error)
    }
        // res.status(500).send('something error while reciving from movie')
    )
};

module.exports=Movieshandler