const Movies = require('../models/movies');


const get = (req, res)=>{
    Movies.find().then(result => {
        res.json(result);
    });
};

const create = (req, res) => {

    const movies =  new Movies({
        imdb_title_id: req.body.imdb_title_id,
        title: req.body.title,
        original_title: req.body.original_title,
        year: parseInt(req.body.year),
        date_published: req.body.date,
        genre: req.body.genre,
        duration: parseInt(req.body.duration),
        country: req.body.country,
        language: req.body.language,
        director: req.body.director,
        writer: req.body.writer,
        production_company: req.body.production_company,
        actors: req.body.actors,
        description: req.body.description,
        avg_vote: parseFloat(req.body.avg_vote),
        votes: parseInt(req.body.votes),
        budget: req.body.budget,
        usa_gross_income: req.body.usa_gross_income,
        worlwide_gross_income: req.body.worlwide_gross_income,
        metascore: parseFloat(req.body.metascore),
        reviews_from_users: parseFloat(req.body.reviews_from_users),
        reviews_from_critics: parseFloat(req.body.reviews_from_critics)
    });
    movies.save().then(()=>{
        res.redirect('/movies')
    }).catch(error => {
        res.send(error)
    });
};

const getByTitle = (req, res) =>
{Movies.findOne(
    {'title':
            {$regex: `.*${req.params.movieTitle}.*`}}
).then(movies => {res.json(movies);})};

const update = (req, res) => {
    res.json(movies);
};

const remove = (req, res) => {
    res.json(movies);
};

module.exports = {get, create, getByTitle, update, remove}