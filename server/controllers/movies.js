
const unirest = require("unirest");
const _ = require("lodash");
const moviesService = require('../services/movies');


const createMovie = async (req, res) => {

    console.log("body request from the client:")
    console.log(req.body);

    const newMovie = await moviesService.createMovie(req.body);
    console.log(newMovie);
    res.json(newMovie);
};


const topMoviesByRating = async (req, res) => {

    var topNumber;

    if (!req.params.topNumber){
        topNumber = await moviesService.countMovies();
    }
    else{
        topNumber = req.params.topNumber;
    }

    const movies = await moviesService.topMoviesByRating(topNumber);

    movies.forEach(function (movieItem) {

        Object.defineProperty(movieItem, "rating_avg",
            Object.getOwnPropertyDescriptor(movieItem, "rating_review"));
        delete movieItem["rating_review"];

        if(movieItem["rating_avg"].length){
            movieItem["rating_avg"] = movieItem["rating_avg"][0]["rating"]
        }
        else{
            movieItem["rating_avg"] = 0
        }
    });

    res.json(movies);
};


const getMovies = async (req, res) => {
    const movies = await moviesService.getMovies();

    movies.forEach(function (movieItem) {
        Object.defineProperty(movieItem, "rating_avg",
            Object.getOwnPropertyDescriptor(movieItem, "rating_review"));
        delete movieItem["rating_review"];

        var newArray = []
        movieItem["rating_avg"].forEach(function (arrayItem) {
            newArray.push(arrayItem['rating'])
        });
        movieItem["rating_avg"] = newArray

        movieItem["rating_avg"] = average = movieItem["rating_avg"].reduce(function (avg, value, _, { length }) {
            return avg + value / length;
        }, 0);
    });

    res.json(movies);
};


const avgRatingByYear = async (req, res) => {
    const ratingByYears = await moviesService.avgRatingByYear();

    const avgRatingByYear = await avgRatingMapReduce(ratingByYears, 'year');

    res.json(avgRatingByYear);
};


const avgRatingMapReduce = async (obj, keyMap) => {

    var map = _.mapValues(_.groupBy(obj, keyMap),
        clist => clist.map(obj => _.omit(obj, keyMap)));

    var data = {};
    Object.keys(map).forEach(function(key) {
        var newArray = []
        map[key].forEach(function (arrayItem) {
            newArray.push(arrayItem['rating_review']['rating'])
        });
        data[key] = newArray
    });

    // add function of reduce
    var reduce = {}
    Object.keys(data).forEach(function (key){
        reduce[key] = average = data[key].reduce(function (avg, value, _, { length }) {
            return avg + value / length;
        }, 0);
    });

    return reduce
}


const countMovies = async (req, res) => {
    const movies = await moviesService.countMovies();
    res.json(movies);
};


const countByGenre = async (req, res) => {
    const genresCount = await moviesService.countByGenre();

    var newGenresCount = Object()
    Object.keys(genresCount).forEach(function(key) {
        console.log(genresCount[key]['_id']);
        console.log(genresCount[key]['count']);
        newGenresCount[genresCount[key]['_id']] = genresCount[key]['count']
    });
    res.json(newGenresCount);
};


const getMovieByTitle = async (req, res) => {
    const movie = await moviesService.getMovieByTitle(req.params.movieTitle);

    if (!movie) {
        return res.status(404).json({errors: ['Movie not found']});
    }

    res.json(movie);
};


const getMoviesByGenre = async (req, res) => {
    const movie = await moviesService.getMoviesByGenre(req.params.genre);

    if (!movie) {
        return res.status(404).json({errors: ['Movie not found']});
    }

    res.json(movie);
};


const getMovieById = async (req, res) => {
    const movie = await moviesService.getMovieById(req.params.movieId);
    if (!movie){
        return res.status(404).json({errors: ['Movie not found']});
    }

    res.json(movie);
};


const getMovieByTitleGenreYear = async (req, res) => {

    var [movieTitle, movieGenre, movieYear] = req.params.param.split('=');
    var count = 3;
    var all = true;

    if(movieTitle === ''){
        movieTitle =  NaN
        count--;
    }

    if(movieGenre === ''){
        movieGenre =  NaN
        count--;
    }

    if(movieYear === ''){
        movieYear =  undefined
        count--;
    }

    if(count !== 3){
        all = false;
    }

    const movies = await moviesService.getMovieByTitleGenreYear(
        movieTitle, movieGenre, movieYear, all
    );
    if (!movies) {
        return res.status(404).json({errors: ['Movies are snot found']});
    }

    res.json(movies);
};


const getMovieByImdbTitleId = async (req, res) => {
    const movie = await moviesService.getMovieById(req.params.imdbTitleId);

    if (!movie){
        return res.status(404).json({errors: ['Movie not found']});
    }

    res.json(movie);
};


const getImageByTitleId = (req, res) => {

    var reqApi = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-meta-data");

    reqApi.query({
        "ids": req.params.imdbTitleId
    });

    reqApi.headers({
        "x-rapidapi-key": "c70cdcce54mshf2099e49559503cp11be87jsna6dcf3ca1c09",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "useQueryString": true
    });

    reqApi.end(function (resApi) {
        if (resApi.error) throw new Error(resApi.error);

        return res.json(resApi.body[req.params.imdbTitleId]['title']['image']['url'])
    });

};

const updateMovies = async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            message: "movies param are required",
        });
    }

    const movies = await moviesService.updateMovie(req.params.movieId, req.body);
    if (!movies) {
        return res.status(404).json({ errors: ['movies not found'] });
    }

    res.json(movies);
};



const deleteMovie = async (req, res) => {

    const movie = await moviesService.deleteMovie(req.params.movieId);
    if (!movie) {
        return res.status(404).json({ errors: ['movie not found'] });
    }

    res.send();
};


module.exports = {
    createMovie,
    getMovies,
    getMovieByTitle,
    getMovieById,
    getMovieByImdbTitleId,
    getImageByTitleId,
    updateMovies,
    deleteMovie,
    getMovieByTitleGenreYear,
    countMovies,
    topMoviesByRating,
    getMoviesByGenre,
    countByGenre,
    avgRatingByYear
}