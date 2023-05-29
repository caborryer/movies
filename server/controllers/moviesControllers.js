const {getTopMovies, searchMovie, getTheatresMovies} = require('../models/callingData')



class moviesController {
  constructor() {
  }

  async getresultTopMovies(req, res) {
    const movies = await getTopMovies()

    if (movies.data) {
      res.json(movies.data.results)
    }
  };

  async getresultfromSearch(req, res) {
    const {term} = req.params
    const movies = await searchMovie(term)
    if (movies.data) {
      res.json(movies.data.results)
    }

  };
  async getresultFromNowmovies(req, res) {
    const movies = await getTheatresMovies()

    if (movies.data) {
      res.json(movies.data.results)
    }
  };

}



module.exports = moviesController;
