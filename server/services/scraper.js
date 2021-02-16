const movieTrailer = require( 'movie-trailer');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const Scraper = require('images-scraper');

const serachUrl = 'https://www.imdb.com/find?s=tt&ttype=ft&ref_=fn_ft&q=';
const movieUrl = 'https://www.imdb.com/title/';

const searchCache = {};
const movieCache = {};



// fetch data from url
function searchMovies(searchTerm) {
    // caching for the searched terms
    if (searchCache[searchTerm]) {
        console.log('Serving from cache: ', searchTerm);
        return Promise.resolve(searchCache[searchTerm]);
    }

    return fetch(`${serachUrl}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const movies = [];
            const $ = cheerio.load(body);
            $('.findResult').each(function(i, element) {
                const $element = $(element);
                const $image = $element.find('td a img');
                const $title = $element.find('td.result_text a');
                const imdbID = $title.attr('href').match(/title\/(.*)\//)[1];

                const movie = {
                    image: $image.attr('src').match('.+@'),
                    title: $title.text(),
                    imdbID
                };

                // add noimage image
                if (movie.image == null) {
                    movie.image =
                        'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/180x268/film-173410679._CB499558812_.png';
                }

                movies.push(movie);
            });

            searchCache[searchTerm] = movies;
            return movies;
        });
}


const getGoggleImage = async (title) => {

    const google = new Scraper({
        puppeteer: {
            headless: false,
        },
    });

    const googleResults = await google.scrape(title + " movie 16:9", 5);
    console.log(googleResults[0].url, "google image");
    return googleResults[0].url
};


async function getTrailer (title, year)  {

    return new Promise((resolve,reject)=>{
        movieTrailer(title, {year: year, multi: true} )
            .then( response => resolve(response));
    });
}

async function getImage(title){

    return new Promise((resolve, reject) => {
        getGoggleImage(title).then(imageURL=> resolve(imageURL));
    });

}


// get a specific movie
function getMovie(imdbID) {
    // caching for the searched movies
    if (movieCache[imdbID]) {
        console.log('Serving from cache: ', imdbID);
        return Promise.resolve(movieCache[imdbID]);
    }

    return fetch(`${movieUrl}${imdbID}`)
        .then(response => response.text())
        .then(async body => {
            const $ = cheerio.load(body);
            const $title = $('.title_wrapper h1');

            // get title
            const title = $title
                .first()
                .contents()
                .filter(function() {
                    return this.type === 'text';
                })
                .text()
                .trim();


            var obj = $("script[type='application/ld+json']");

            for(var i in obj){
                for(var j in obj[i].children){
                    var data = obj[i].children[j].data;
                    if(data){
                        data = data.replace('!DOCTYPE html ""','');
                        var dataStringify = JSON.stringify(data);
                        if(dataStringify.length > 2){
                            var dataJson = JSON.parse(data);
                        }
                    }
                }
            }

            const genre = dataJson.genre[0];
            const year = parseInt(dataJson.datePublished.split('-')[0]);
            const description = dataJson.description;
            const trailer = await getTrailer(title, year);
            const image = await getImage(title);

            // return statement
            const movie = {
                title: title,
                year: year,
                genre:genre,
                description: description,
                image_url: image,
                trailer_video: trailer[0]
            };
            movieCache[imdbID] = movie;

            return movie;

        });

}

module.exports = {
    searchMovies,
    getMovie,
    getTrailer
};