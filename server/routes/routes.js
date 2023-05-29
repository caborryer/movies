const router = require('express').Router();
const moviesController = require('../controllers/moviesControllers');

const movie = new moviesController();

router.route('/topMovies').get(movie.getresultTopMovies);
router.route('/search:term').get(movie.getresultfromSearch);
router.route('/nowMovies').get(movie.getresultFromNowmovies);



module.exports = router;

