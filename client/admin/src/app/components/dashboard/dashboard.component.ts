import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { MoviesService } from '../../services/movies.service';
import { Reviews } from '../../models/reviews';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movies[] = [];
  reviews: Reviews[] = [];

  constructor(private reviewsService: ReviewsService, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.reviewsService.topReviewsByDate().subscribe(data => {
      this.reviews = data;
    });

    this.moviesService.topMoviesByRating().subscribe(data => {
      this.movies = data;
    });

  }

}
