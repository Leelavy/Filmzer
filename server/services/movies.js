const Movies = require('../models/movies');
const serviceReview = require('../services/reviews')

const createMovie = async (body) => {
    const movie = new Movies({
        imdb_title_id: body.imdb_title_id,
        title: body.title,
        year: body.year,
        genre: body.genre,
        description: body.description,
        imageURL: body.imageURL,
        trailerVideo: body.trailerVideo
    });
    cachegoose.clearCache('GALLERY-CACHE-KEY');
    return await movie.save();
};

const getMovies = async () => {
    return await Movies.find({}).cache(0, 'GALLERY-CACHE-KEY');
};


const getMovieByTitle = async (title) => {
    return await Movies.find({'title': {$regex: `.*${title}.*`}});
};


const getMovieById = async (id) => {
    return await Movies.findById(id);
};


const getMovieByImdbTitleId = async (title_id) => {
    return await Movies.find({'imdb_title_id': title_id});
};


const updateMovie = async (id, body) => {
    const movie = await getMovieById(id);
    if (!movie)
        return null;

    movie.imdb_title_id = body.imdb_title_id;
    movie.title = body.title;
    movie.year = body.year;
    movie.genre = body.genre;
    movie.description = body.description;
    movie.imageURL = body.imageURL;
    movie.trailerVideo = body.trailerVideo;
    await movie.save();
    return movie;
};

const updateReviewOfMovie = async (id) => {

    const review = await serviceReview.getReviewByMovieId(id)
    const movie = await getMovieById(id);
    if (!movie)
        return null;

    if(!review)
        return null

    for (i = 0; i < review.length; i++) {
        if(movie.reviews.indexOf(review[i]._id) === -1){
            movie.reviews.push(review[i]._id);
        }
        await movie.save();
    }
    return movie;
};



const deleteMovie = async (id) => {
    const movie = await getMovieById(id);
    if (!movie)
        return null;

    await movie.remove();
    return movie;
};


module.exports = {
    createMovie,
    getMovies,
    getMovieByTitle,
    getMovieById,
    getMovieByImdbTitleId,
    updateMovie,
    updateReviewOfMovie,
    deleteMovie
    }