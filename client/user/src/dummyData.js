export const movies = [
  {
    movieTitle: "Men In Black",
    genre: "Action",
    year: "1997",
    description: "Men in Black is a 1997 American science fiction action comedy film directed by Barry Sonnenfeld, produced by Walter F. Parkes and Laurie MacDonald and written by Ed Solomon. Loosely based on The Men in Black comic book series created by Lowell Cunningham and Sandy Carruthers, the film stars Tommy Lee Jones and Will Smith as two agents of a secret organization called the Men in Black, who supervise extraterrestrial lifeforms who live on Earth and hide their existence from ordinary humans",
    imageUrl: "https://e3.365dm.com/19/10/768x432/skynews-men-in-black-will-smith_4806529.jpg?20191016105928",
    trailerUrl: "https://www.youtube.com/watch?v=1Q4mhYF9aQQ",
    reviews: [],
  },
  {
    movieTitle: "Fight Club",
    genre: "Thriller",
    year: "1999",
    description: "Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a fight club with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with him and a destitute woman, Marla Singer (Bonham Carter).",
    imageUrl: "https://www.denofgeek.com/wp-content/uploads/2014/10/fight-club-movie-david-fincher.jpg?fit=1000%2C563",
    trailerUrl: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
    reviews: [],
  },
  {
    movieTitle: "Alien",
    genre: "Science Fiction",
    year: "1979",
    description: "Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon. Based on a story by O'Bannon and Ronald Shusett, it follows the crew of the commercial space tug Nostromo, who encounter the eponymous Alien, an aggressive and deadly extraterrestrial set loose on the ship",
    imageUrl: "https://www.slashgear.com/wp-content/uploads/2019/09/alien_1979_main.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=jQ5lPt9edzQ",
    reviews: [],
  },
  {
    movieTitle: "V for Vendetta",
    genre: "Thriller",
    year: "2005",
    description: "V for Vendetta is a 2005 dystopian political action film directed by James McTeigue and written by the Wachowskis, based on the 1988 DC limited series of the same name by Alan Moore and David Lloyd. The film is set in an alternative future where a Nordic supremacist and neo-fascist totalitarian regime has subjugated the United Kingdom. It centres on V (portrayed by Hugo Weaving), an anarchist and masked freedom fighter who attempts to ignite a revolution through elaborate terrorist acts, and Evey Hammond (portrayed by Natalie Portman) a young, working-class woman caught up in V's mission. Stephen Rea portrays a detective leading a desperate quest to stop V.",
    imageUrl: "https://d2j1wkp1bavyfs.cloudfront.net/wp-content/legacy/posts/bf9a7f58-1c10-4b68-9102-2e1ac630248f.jpeg?q=50",
    trailerUrl: "https://www.youtube.com/watch?v=alKG75wrANw",
    reviews: [],
  },
  {
    movieTitle: "The Matrix",
    genre: "Science Fiction",
    year: "1999",
    description: "The Matrix is a 1999 American science fiction action film written and directed by the Wachowskis, and produced by Joel Silver. It stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano and is the first installment in the Matrix franchise. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, created by intelligent machines to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias 'Neo', uncovers the truth, he 'is drawn into a rebellion against the machines' along with other people who have been freed from the Matrix.",
    imageUrl: "https://www.indiewire.com/wp-content/uploads/2020/09/the-matrix.png?w=780",
    trailerUrl: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
    reviews: [
      {
        reviewTitle: "Best Movie EVER!!!",
        reviewContent: "can't help it. I just watched it 10 times in a row!!",
        rating: 10,
        movie: {
          movieTitle: "The Matrix",
          genre: "Science Fiction",
          year: "1999",
          description: "The Matrix is a 1999 American science fiction action film written and directed by the Wachowskis, and produced by Joel Silver. It stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano and is the first installment in the Matrix franchise. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, created by intelligent machines to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias 'Neo', uncovers the truth, he 'is drawn into a rebellion against the machines' along with other people who have been freed from the Matrix.",
          imageUrl: "https://www.indiewire.com/wp-content/uploads/2020/09/the-matrix.png?w=780",
          trailerUrl: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
        },
        user: {
          username: "danielgutman",
          password: 1234,
          admin: true,
          firstName: "Daniel",
          lastName: "Gutman",
          email: "daniel@gmail.com"
        }
      },
    ],
  },
  {
    movieTitle: "Return of the Jedi",
    genre: "Science Fiction",
    year: "1983",
    description: "Return of the Jedi (also known as Star Wars: Episode VI – Return of the Jedi) is a 1983 American epic space opera film directed by Richard Marquand. The screenplay is by Lawrence Kasdan and George Lucas from a story by Lucas, who was also the executive producer. It is the third installment in the original Star Wars trilogy, the third film to be produced, and the sixth film in the 'Star Wars saga'. It takes place one year after The Empire Strikes Back.The film stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.",
    imageUrl: "https://cdn20.pamono.com/p/g/5/9/593964_yaneshw35r/star-wars-return-of-the-jedi-poster-by-josh-kirby-1983-1.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=5UfA_aKBGMc",
    reviews: [
      {
        reviewTitle: "Meh...",
        reviewContent: "You could spend your time better in my opinion",
        rating: 4,
        movie: {
          movieTitle: "Return of the Jedi",
          genre: "Science Fiction",
          year: "1983",
          description: "Return of the Jedi (also known as Star Wars: Episode VI – Return of the Jedi) is a 1983 American epic space opera film directed by Richard Marquand. The screenplay is by Lawrence Kasdan and George Lucas from a story by Lucas, who was also the executive producer. It is the third installment in the original Star Wars trilogy, the third film to be produced, and the sixth film in the 'Star Wars saga'. It takes place one year after The Empire Strikes Back.The film stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.",
          imageUrl: "https://cdn20.pamono.com/p/g/5/9/593964_yaneshw35r/star-wars-return-of-the-jedi-poster-by-josh-kirby-1983-1.jpg",
          trailerUrl: "https://www.youtube.com/watch?v=5UfA_aKBGMc",
        },
        user: {
          username: "leelavy",
          password: 1234,
          admin: false,
          firstName: "Lee",
          lastName: "Lavy",
          email: "lee@gmail.com"
        }
      },
      {
        reviewTitle: "Not for me",
        reviewContent: "You could spend your time better in my opinion",
        rating: 1,
        movie: {
          movieTitle: "Return of the Jedi",
          genre: "Science Fiction",
          year: "1983",
          description: "Return of the Jedi (also known as Star Wars: Episode VI – Return of the Jedi) is a 1983 American epic space opera film directed by Richard Marquand. The screenplay is by Lawrence Kasdan and George Lucas from a story by Lucas, who was also the executive producer. It is the third installment in the original Star Wars trilogy, the third film to be produced, and the sixth film in the 'Star Wars saga'. It takes place one year after The Empire Strikes Back.The film stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.",
          imageUrl: "https://cdn20.pamono.com/p/g/5/9/593964_yaneshw35r/star-wars-return-of-the-jedi-poster-by-josh-kirby-1983-1.jpg",
          trailerUrl: "https://www.youtube.com/watch?v=5UfA_aKBGMc",
        },
        user: {
          username: "leelavy",
          password: 1234,
          admin: false,
          firstName: "Lee",
          lastName: "Lavy",
          email: "lee@gmail.com"
        }
      },
    ],
  },
  {
    movieTitle: "Seven",
    genre: "Crime",
    year: "1995",
    description: "Seven (stylized as SE7EN) is a 1995 American neo-noir[3] psychological crime thriller film directed by David Fincher and written by Andrew Kevin Walker. It stars Brad Pitt, Morgan Freeman, Gwyneth Paltrow, Kevin Spacey, R. Lee Ermey and John C. McGinley. The film tells the story of David Mills (Pitt), a detective who partners with the retiring William Somerset (Freeman) to track down a serial killer who uses the seven deadly sins as a motif in his murders.",
    imageUrl: "https://premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-01/seven-film-brad-pitt-morgan-freeman-1280x720.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=znmZoVkCjpI",
    reviews: [],
  },
  {
    movieTitle: "Unbreakable ",
    genre: "Science Fiction",
    year: "2000",
    description: "Unbreakable is a 2000 American superhero thriller film written, produced, and directed by M. Night Shyamalan, and starring Bruce Willis, Samuel L. Jackson, Robin Wright Penn, Spencer Treat Clark, and Charlayne Woodard. It is the first installment in the Unbreakable film series a.k.a. Eastrail 177 Trilogy. In Unbreakable, a security guard named David Dunn (Willis) survives a horrific train crash with no injuries, leading to him discovering that he harbors superhuman abilities, which in turn introduces him to comic book store owner Elijah Price (Jackson), who uses a wheelchair.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/disney-UNB0NNG2-Full-Image_GalleryCover-en-US-1484002108494._UY500_UX667_RI_VS1tYNTwlNLfU8l38svXQ0IlAJD9KZ9A6_TTW_.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=fNeCB2ALNoA",
    reviews: [
      {
        reviewTitle: "Good movie!",
        reviewContent: "Wow this movie is the best!!!!",
        rating: 9,
        movie: {
          movieTitle: "Unbreakable ",
          genre: "Science Fiction",
          year: "2000",
          description: "Unbreakable is a 2000 American superhero thriller film written, produced, and directed by M. Night Shyamalan, and starring Bruce Willis, Samuel L. Jackson, Robin Wright Penn, Spencer Treat Clark, and Charlayne Woodard. It is the first installment in the Unbreakable film series a.k.a. Eastrail 177 Trilogy. In Unbreakable, a security guard named David Dunn (Willis) survives a horrific train crash with no injuries, leading to him discovering that he harbors superhuman abilities, which in turn introduces him to comic book store owner Elijah Price (Jackson), who uses a wheelchair.",
          imageUrl: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/disney-UNB0NNG2-Full-Image_GalleryCover-en-US-1484002108494._UY500_UX667_RI_VS1tYNTwlNLfU8l38svXQ0IlAJD9KZ9A6_TTW_.jpg",
          trailerUrl: "https://www.youtube.com/watch?v=fNeCB2ALNoA",
        },
        user: {
          username: "danielgutman",
          password: 1234,
          admin: true,
          firstName: "Daniel",
          lastName: "Gutman",
          email: "daniel@gmail.com"
        }
      },
    ],
  },
]

export const reviews = [
  {
    reviewTitle: "Good movie!",
    reviewContent: "Wow this movie is the best!!!!",
    rating: 9,
    movie: {
      movieTitle: "Unbreakable ",
      genre: "Science Fiction",
      year: "2000",
      description: "Unbreakable is a 2000 American superhero thriller film written, produced, and directed by M. Night Shyamalan, and starring Bruce Willis, Samuel L. Jackson, Robin Wright Penn, Spencer Treat Clark, and Charlayne Woodard. It is the first installment in the Unbreakable film series a.k.a. Eastrail 177 Trilogy. In Unbreakable, a security guard named David Dunn (Willis) survives a horrific train crash with no injuries, leading to him discovering that he harbors superhuman abilities, which in turn introduces him to comic book store owner Elijah Price (Jackson), who uses a wheelchair.",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/disney-UNB0NNG2-Full-Image_GalleryCover-en-US-1484002108494._UY500_UX667_RI_VS1tYNTwlNLfU8l38svXQ0IlAJD9KZ9A6_TTW_.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=fNeCB2ALNoA",
    },
    user: {
      username: "danielgutman",
      password: 1234,
      admin: true,
      firstName: "Daniel",
      lastName: "Gutman",
      email: "daniel@gmail.com"
    }
  },
  {
    reviewTitle: "Meh...",
    reviewContent: "You could spend your time better in my opinion",
    rating: 4,
    movie: {
      movieTitle: "Return of the Jedi",
      genre: "Science Fiction",
      year: "1983",
      description: "Return of the Jedi (also known as Star Wars: Episode VI – Return of the Jedi) is a 1983 American epic space opera film directed by Richard Marquand. The screenplay is by Lawrence Kasdan and George Lucas from a story by Lucas, who was also the executive producer. It is the third installment in the original Star Wars trilogy, the third film to be produced, and the sixth film in the 'Star Wars saga'. It takes place one year after The Empire Strikes Back.The film stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.",
      imageUrl: "https://cdn20.pamono.com/p/g/5/9/593964_yaneshw35r/star-wars-return-of-the-jedi-poster-by-josh-kirby-1983-1.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=5UfA_aKBGMc",
    },
    user: {
      username: "leelavy",
      password: 1234,
      admin: false,
      firstName: "Lee",
      lastName: "Lavy",
      email: "lee@gmail.com"
    }
  },
  {
    reviewTitle: "Best Movie EVER!!!",
    reviewContent: "can't help it. I just watched it 10 times in a row!!",
    rating: 10,
    movie: {
      movieTitle: "The Matrix",
      genre: "Science Fiction",
      year: "1999",
      description: "The Matrix is a 1999 American science fiction action film written and directed by the Wachowskis, and produced by Joel Silver. It stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano and is the first installment in the Matrix franchise. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, created by intelligent machines to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias 'Neo', uncovers the truth, he 'is drawn into a rebellion against the machines' along with other people who have been freed from the Matrix.",
      imageUrl: "https://www.indiewire.com/wp-content/uploads/2020/09/the-matrix.png?w=780",
      trailerUrl: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
    },
    user: {
      username: "danielgutman",
      password: 1234,
      admin: true,
      firstName: "Daniel",
      lastName: "Gutman",
      email: "daniel@gmail.com"
    }
  },
  {
    reviewTitle: "Not for me",
    reviewContent: "You could spend your time better in my opinion",
    rating: 4,
    movie: {
      movieTitle: "Return of the Jedi",
      genre: "Science Fiction",
      year: "1983",
      description: "Return of the Jedi (also known as Star Wars: Episode VI – Return of the Jedi) is a 1983 American epic space opera film directed by Richard Marquand. The screenplay is by Lawrence Kasdan and George Lucas from a story by Lucas, who was also the executive producer. It is the third installment in the original Star Wars trilogy, the third film to be produced, and the sixth film in the 'Star Wars saga'. It takes place one year after The Empire Strikes Back.The film stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.",
      imageUrl: "https://cdn20.pamono.com/p/g/5/9/593964_yaneshw35r/star-wars-return-of-the-jedi-poster-by-josh-kirby-1983-1.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=5UfA_aKBGMc",
    },
    user: {
      username: "leelavy",
      password: 1234,
      admin: false,
      firstName: "Lee",
      lastName: "Lavy",
      email: "lee@gmail.com"
    }
  },
  {
    reviewTitle: "Meh....!",
    reviewContent: "You could spend your time better in my opinion",
    rating: 4,
    movie: {
      movieTitle: "Fight Club",
      genre: "Thriller",
      year: "1999",
      description: "Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a fight club with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with him and a destitute woman, Marla Singer (Bonham Carter).",
      imageUrl: "https://www.denofgeek.com/wp-content/uploads/2014/10/fight-club-movie-david-fincher.jpg?fit=1000%2C563",
      trailerUrl: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
    },
    user: {
      username: "danielgutman",
      password: 1234,
      admin: true,
      firstName: "Daniel",
      lastName: "Gutman",
      email: "daniel@gmail.com"
    }
  },
  {
    reviewTitle: "Sick movie",
    reviewContent: "Lol i need this mofo as a pet.",
    rating: 8,
    movie: {
      movieTitle: "Alien",
      genre: "Science Fiction",
      year: "1979",
      description: "Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon. Based on a story by O'Bannon and Ronald Shusett, it follows the crew of the commercial space tug Nostromo, who encounter the eponymous Alien, an aggressive and deadly extraterrestrial set loose on the ship",
      imageUrl: "https://www.slashgear.com/wp-content/uploads/2019/09/alien_1979_main.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=jQ5lPt9edzQ",
    },
    user: {
      username: "danielgutman",
      password: 1234,
      admin: true,
      firstName: "Daniel",
      lastName: "Gutman",
      email: "daniel@gmail.com"
    }
  },
  {
    reviewTitle: "Brilliant",
    reviewContent: "Every time you watch it you discover some new details...amazing",
    rating: 7,
    movie: {
      movieTitle: "Fight Club",
      genre: "Thriller",
      year: "1999",
      description: "Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a fight club with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with him and a destitute woman, Marla Singer (Bonham Carter).",
      imageUrl: "https://www.denofgeek.com/wp-content/uploads/2014/10/fight-club-movie-david-fincher.jpg?fit=1000%2C563",
      trailerUrl: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
    },
    user: {
      username: "leelavy",
      password: 1234,
      admin: false,
      firstName: "Lee",
      lastName: "Lavy",
      email: "lee@gmail.com"
    }
  },
  {
    reviewTitle: "Crap.",
    reviewContent: "I just tried watching it for the sixth time. i jus't cant. guess i'm a boomer.",
    rating: 2,
    movie: {
      movieTitle: "V for Vendetta",
      genre: "Thriller",
      year: "2005",
      description: "V for Vendetta is a 2005 dystopian political action film directed by James McTeigue and written by the Wachowskis, based on the 1988 DC limited series of the same name by Alan Moore and David Lloyd. The film is set in an alternative future where a Nordic supremacist and neo-fascist totalitarian regime has subjugated the United Kingdom. It centres on V (portrayed by Hugo Weaving), an anarchist and masked freedom fighter who attempts to ignite a revolution through elaborate terrorist acts, and Evey Hammond (portrayed by Natalie Portman) a young, working-class woman caught up in V's mission. Stephen Rea portrays a detective leading a desperate quest to stop V.",
      imageUrl: "https://d2j1wkp1bavyfs.cloudfront.net/wp-content/legacy/posts/bf9a7f58-1c10-4b68-9102-2e1ac630248f.jpeg?q=50",
      trailerUrl: "https://www.youtube.com/watch?v=alKG75wrANw",
    },
    user: {
      username: "danielgutman",
      password: 1234,
      admin: true,
      firstName: "Daniel",
      lastName: "Gutman",
      email: "daniel@gmail.com"
    }
  },
]