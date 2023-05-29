const axios = require('axios');
const {apiKey, basePath} = require('../config/config')

const getTopMovies = async () => {
    try {
        return await axios.get(`${basePath}movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    } catch (error) {
        console.error(error)
    }
}

const searchMovie  = async (term) => {
    try {
        return await axios.get(`${basePath}search/movie?api_key=${apiKey}&language=en-US&query=${term}&page=1&include_adult=false`)
    } catch (error) {
        console.error(error)
    }

}
const getTheatresMovies  = async () => {
    try {
        return await axios.get(`${basePath}movie/now_playing?&api_key=${apiKey}`)
    } catch (error) {
        console.error(error)
    }

}




module.exports = {getTopMovies, searchMovie, getTheatresMovies}

