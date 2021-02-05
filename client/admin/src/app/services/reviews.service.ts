import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reviews } from '../models/reviews';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})


export class ReviewsService {

  private latestReviewUrl = environment.latestReviewsUrl;
  private reviewsUrl = environment.reviewsUrl;

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(this.reviewsUrl);
  }
  topReviewsByDate(): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(this.latestReviewUrl)
  }

  deleteReview(_id: number): Observable<Reviews> {
    const url = `${this.reviewsUrl}/${_id}`;
    return this.http.delete<Reviews>(url);

  }


}
