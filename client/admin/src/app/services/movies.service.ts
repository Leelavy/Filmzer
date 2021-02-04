import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})


export class MoviesService {

  
  private topRaUrl=environment.topRatedMoviesUrl;
  private moviesUrl = environment.moviesUrl;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.moviesUrl);
  }

  topMoviesByRating():Observable<Movies[]>{
    return this.http.get<Movies[]>(this.topRaUrl);
  }

}

