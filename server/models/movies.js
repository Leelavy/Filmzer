const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movies = new Schema({
    imdb_title_id: {type:String, unique: true},
    title: {type:String, unique: true},
    original_title: {type:String, unique: true},
    year: Number,
    date_published: String,
    genre: String,
    duration: Number,
    country: String,
    language: String,
    director: String,
    writer: String,
    production_company: String,
    actors: String,
    description: String,
    avg_vote: Number,
    votes: Number,
    budget: String,
    usa_gross_income: String,
    worlwide_gross_income: String,
    metascore: Number,
    reviews_from_users: Number,
    reviews_from_critics: Number


});

module.exports = mongoose.model('Movies', Movies);