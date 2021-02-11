import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';
import { AddMovie } from '../models/addMovie'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})


export class MoviesService {


  private topRaUrl = environment.topRatedMoviesUrl;
  private moviesUrl = environment.moviesUrl;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.moviesUrl);
  }

  topMoviesByRating(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.topRaUrl);
  }

  deleteMovie(_id: number): Observable<Movies> {
    const url = `${this.moviesUrl}/${_id}`;
    return this.http.delete<Movies>(url);

  }

  createMovie(newMovie: AddMovie): Observable<AddMovie> {
    return this.http.post<AddMovie>(this.moviesUrl, newMovie);
  }

  getMovieById(id: number): Observable<Movies> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movies>(url);
  }


}





