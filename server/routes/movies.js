const express = require('express');
const movieController = require('../controllers/movies');
var router = express.Router();

// TODO checks update/craete/delete function


router.route('/updateReviewOfMovie/:movieId')
    .patch(movieController.updateReviewOfMovie);


router.route('/')
    .post(movieController.createMovie)
    .get(movieController.getMovies);


router.route('/title/:movieTitle')
    .get(movieController.getMovieByTitle);


router.route('/:movieId')
    .get(movieController.getMovieById)
    .patch(movieController.updateMovies)
    .delete(movieController.deleteMovie);


router.route('/titleId/:imdbTitleId')
    .get(movieController.getMovieByImdbTitleId);


router.route('/image/:imdbTitleId')
    .get(movieController.getImageByTitleId)


module.exports = router;