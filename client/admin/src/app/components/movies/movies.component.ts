import { Component } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: Movies[]=[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.moviesService.getMovies.arguments(data=>{
      this.movies = data;
    });
  }

}
