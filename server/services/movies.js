const Movies = require('../models/movies');

const createMovie = async (body) => {
    const movie = new Movies({
        imdb_title_id: body.imdb_title_id,
        title: body.title,
        original_title: body.original_title,
        year: body.year,
        date_published: body.date_published,
        genre: body.genre,
        duration: body.duration,
        country: body.country,
        language: body.language,
        director: body.director,
        writer: body.write,
        production_company: body.production_company,
        actors: body.actors,
        description: body.description,
        avg_vote: body.avg_vote,
        votes: body.votes,
        budget: body.budget,
        usa_gross_income: body.usa_gross_income,
        worlwide_gross_income: body.worlwide_gross_income,
        metascore: body.metascore,
        reviews_from_users: body.reviews_from_users,
        reviews_from_critics: body.reviews_from_critics
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
    movie.original_title = body.original_title;
    movie.year = body.year;
    movie.date_published = body.date_published;
    movie.genre = body.genre;
    movie.duration = body.duration;
    movie.country = body.country;
    movie.language = body.language;
    movie.director = body.director;
    movie.writer = body.write;
    movie.production_company = body.production_company;
    movie.actors = body.actors;
    movie.description = body.description;
    movie.avg_vote = body.avg_vote;
    movie.votes = body.votes;
    movie.budget = body.budget;
    movie.usa_gross_income = body.usa_gross_income;
    movie.worlwide_gross_income = body.worlwide_gross_income;
    movie.metascore = body.metascore;
    movie.reviews_from_users = body.reviews_from_users;
    movie.reviews_from_critics = body.reviews_from_critics;
    await movie.save();
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
    deleteMovie
    }