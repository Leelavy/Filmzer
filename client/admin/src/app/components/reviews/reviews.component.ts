import { Component, OnInit } from '@angular/core';
import { Reviews } from 'src/app/models/reviews';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Reviews[] = [];
  review:Reviews;

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.reviewsService.getReviews().subscribe(data => {
      this.reviews = data;
    });

  }

  onDelete(_id:number) {
      this.reviewsService.deleteReview(_id).subscribe(()=>{
        this.review=null;
      });
      

  }

}