const Movies = require('../models/movies');

const createMovie = async (body) => {
    const movie = new Movies({
        title: body.title,
        year: body.year,
        genre: body.genre,  // delimiter ','
        description: body.description,
        imageURL: body.imageURL,
        trailerVideo: body.trailerVideo
    });
    return await movie.save();
};

const getMovies = async () => {
    return await Movies.aggregate([{ "$project": {'_id':1, 'title':2, 'year':3, 'genre':4,'description':5,
            'imageURL':6, 'trailerVideo':7, 'reviews':8}}])
};


const avgRatingByYear = async () => {
     return Movies.aggregate([
        {
            $lookup:
                {
                    from:"reviews",
                    localField:"reviews",
                    foreignField: "_id",
                    as: "rating_review"
                }
        },
         {
             $unwind:"$rating_review"
         },
         {
             $project:
                 {
                     "_id": 0,
                     "year": 1,
                     "rating_review.rating": 2
                 }
         }
        ]);
};


const countMovies = async () => {
    return await Movies.countDocuments({})
};


const countByGenre = async () => {
    return Movies.aggregate([
        {
            $group: {
                _id: "$genre",
                count: {$sum: 1}
            }
        },
        {
            $sort: {count:-1}
        }
    ]);
};


const topMoviesByRating = async (topNumber) => {
    return Movies.aggregate([
        { $lookup:
                {
                    from:"reviews",
                    localField:"reviews",
                    foreignField: "_id",
                    as: "rating_review"
                }
        },
        {
            $project:
                {
                    "_id": 0,
                    "title": 1,
                    "year": 2,
                    "genre": 3,
                    "description": 4,
                    "image_url":5,
                    "trailer_video":6,
                    "rating_review.rating": {$avg: "$rating_review.rating"},
                }
        },
        {
            $project:
                {
                    "_id": 0,
                    "title": 1,
                    "year": 2,
                    "genre": 3,
                    "description": 4,
                    "image_url":5,
                    "trailer_video":6,
                    "rating_review": { $slice: [ "$rating_review", 1 ] }

                }
        },
        {
            $sort:
                {
                    "rating_review.rating":-1
                }

        },
        {
            $limit:parseInt(topNumber)
        }
    ]);
};


const getMovieByTitle = async (title) => {
    return await Movies.find({'title': {$regex: `.*${title}.*`}});
};


const getMoviesByGenre = async (genre) => {
    return await Movies.find({'genre': {$regex: `.*${genre}.*`}});
};


const getMovieById = async (id) => {
    return await Movies.findById(id);
};


const getReviewsByMovieId = async (id) => {
    return await Movies.findById(id,{'_id':0, 'reviews':1});
};


const getMovieByImdbTitleId = async (title_id) => {
    return await Movies.find({'imdb_title_id': title_id});
};


const getMovieByTitleGenreYear = async (title, genre, year, all) => {

    const filter = [
        {$and: [{'title': {$regex: `.*${title}.*`}}]},
        {$and: [{'genre': {$regex: `.*${genre}.*`}}]},
        {$and: [{'year': year}]}
    ]

    if(all){
        return Movies.find({
                $and: filter
            }
        );
    }
    return Movies.find({
        $or: filter
        }
    );
};


const updateMovie = async (id, body) => {
    const movie = await getMovieById(id);
    if (!movie)
        return null;

    movie.title = body.title;
    movie.year = body.year;
    movie.genre = body.genre;
    movie.description = body.description;
    movie.imageURL = body.imageURL;
    movie.trailerVideo = body.trailerVideo;
    await movie.save();
    return movie;
};

const updateReviewOfMovie = async (id, review) => {

    const movie = await getMovieById(id);
    if (!movie)
        return null;

    if(!review)
        return null

    if(movie.reviews.indexOf(review._id) === -1){
        movie.reviews.push(review._id);
    }
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
    updateReviewOfMovie,
    deleteMovie,
    getMovieByTitleGenreYear,
    countMovies,
    topMoviesByRating,
    getReviewsByMovieId,
    getMoviesByGenre,
    countByGenre,
    avgRatingByYear
    }