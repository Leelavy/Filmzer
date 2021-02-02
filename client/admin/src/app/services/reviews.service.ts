import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reviews } from '../models/reviews';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})


export class ReviewsService {

  private reviewsUrl = environment.reviewsUrl;

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(this.reviewsUrl);
  }


}
