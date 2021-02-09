import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Movies } from '../../../models/movies';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})


export class TopRatedComponent implements OnInit {

  movies: Movies[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.load();
  }
  
  load() {
    this.moviesService.topMoviesByRating().subscribe(data => {
      this.movies = data;
    });
  }



}
