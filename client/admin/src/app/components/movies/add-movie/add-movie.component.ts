import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { AddMovie } from '../../../models/addMovie';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})


export class AddMovieComponent implements OnInit {
  
  @Output() upDate = new EventEmitter<string>();

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  onRefresh() {
    this.upDate.emit("Refresh");
  }

  createMovie( titleN: string, yearN: number, genreN: string,descriptionN: string, 
    image_urlN: string, trailer_videoN: string ) {

    const movieNew : AddMovie =({
      title: titleN,
      year: yearN,
      genre: genreN,
      description: descriptionN,
      image_url: image_urlN,
      trailer_video: trailer_videoN

    });

    this.moviesService.createMovie(movieNew).subscribe();
    console.log(movieNew);
    
  }
  

}


// "title": "Men In Black",
//     "genre": "Action",
//     "year": "1997",
//     "description": "Men in Black is a 1997 American science fiction action comedy film directed by Barry Sonnenfeld, produced by Walter F. Parkes and Laurie MacDonald and written by Ed Solomon. Loosely based on The Men in Black comic book series created by Lowell Cunningham and Sandy Carruthers, the film stars Tommy Lee Jones and Will Smith as two agents of a secret organization called the Men in Black, who supervise extraterrestrial lifeforms who live on Earth and hide their existence from ordinary humans",
//     "image_url": "https://e3.365dm.com/19/10/768x432/skynews-men-in-black-will-smith_4806529.jpg?20191016105928",
//     "trailer_video": "https://www.youtube.com/watch?v=1Q4mhYF9aQQ"

