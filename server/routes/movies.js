const express = require('express');
const movieController = require('../controllers/movies');
var router = express.Router();

router.get('/', movieController.get);

router.get('/title/:movieTitle', movieController.getByTitle);

router.get('/:movieId', movieController.getById)

router.get('/titleId/:imdbTitleId', movieController.getByImdbTitleId)

router.get('/image/:imdbTitleId', movieController.getImageByTitleId)

router.post('/', movieController.create);

router.put('/', movieController.update);

router.delete('/', movieController.remove);

module.exports = router;