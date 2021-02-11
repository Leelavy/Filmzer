import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
import { Movies } from 'src/app/models/movies';
import { AddMovie } from 'src/app/models/addMovie';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})



export class EditmovieComponent implements OnInit {

  movies:Movies;

  constructor(private rout: ActivatedRoute,
    private movieService: MoviesService) { }

  ngOnInit(): void {

    let id = this.rout.snapshot.params['id'];

    this.movieService.getMovieById(id).subscribe(data=>{
        this.movies=data;
    });

  }

  
}

