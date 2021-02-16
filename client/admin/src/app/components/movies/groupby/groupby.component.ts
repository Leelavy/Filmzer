import { Component, OnInit } from '@angular/core';
import { AddMovie } from 'src/app/models/addMovie';
import { Movies } from 'src/app/models/movies';
import { MoviesService} from '../../../services/movies.service';


@Component({
  selector: 'app-groupby',
  templateUrl: './groupby.component.html',
  styleUrls: ['./groupby.component.css']
})
export class GroupbyComponent implements OnInit {

  movies:AddMovie;
  movie: any[]=[

  ]

  constructor(private movieservice: MoviesService) { }

  ngOnInit(): void {
    this.load();
  }
  
//'Science Fiction', 'Thriller', 'Crime', 'Action', 'Comedy']
  load(){

    this.movieservice.getMoviesByGenre("fiction").subscribe(data=>{
      this.movies=data;
      console.log(this.movies);
      console.log(this.movies.genre);
      
    });


  }


}
