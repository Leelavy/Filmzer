import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddMovieComponent } from '../components/movies/add-movie/add-movie.component'
import { Movies } from '../models/movies';



@Injectable({
  providedIn: 'root'
})

export class RefreshService {

  private source= new BehaviorSubject(null);
  refreshMovie= this.source.asObservable();

  constructor() { }

  refMovie( movie: Movies){
    this.source.next(movie);
  }

}
