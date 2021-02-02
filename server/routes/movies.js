const express = require('express');
const movieController = require('../controllers/movies');
var router = express.Router();


//http://localhost:8080/movies/getMovieByParams/:movieTitle/:movieGenre/:reviewRating/:movieYear
router.route('/getMovieByParams/:movieTitle/:movieGenre/:reviewRating/:movieYear')
    .get(movieController.getMovieByTitleGenreRatingYear);


//http://localhost:8080/movies/countMovies
router.route('/countMovies')
    .get(movieController.countMovies);


//http://localhost:8080/movies
router.route('/')
    .post(movieController.createMovie)
    .get(movieController.getMovies);


//http://localhost:8080/movies/topMovies/:topNumber
router.route('/topMovies/:topNumber')
    .get(movieController.topMoviesByRating)


//http://localhost:8080/movies/topMovies
router.route('/topMovies')
    .get(movieController.topMoviesByRating)


//http://localhost:8080/movies/title/:movieTitle
router.route('/title/:movieTitle')
    .get(movieController.getMovieByTitle);


//http://localhost:8080/movies/:movieId
router.route('/:movieId')
    .get(movieController.getMovieById)
    .patch(movieController.updateMovies)
    .delete(movieController.deleteMovie);


//http://localhost:8080/movies/titleId/:imdbTitleId
router.route('/titleId/:imdbTitleId')
    .get(movieController.getMovieByImdbTitleId);


//http://localhost:8080/movies/image/:imdbTitleId
router.route('/image/:imdbTitleId')
    .get(movieController.getImageByTitleId)


module.exports = router;