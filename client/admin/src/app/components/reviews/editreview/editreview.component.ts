import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from '../../../services/reviews.service';
import { Reviews } from 'src/app/models/reviews';


@Component({
  selector: 'app-editreview',
  templateUrl: './editreview.component.html',
  styleUrls: ['./editreview.component.css']
})


export class EditreviewComponent implements OnInit {

  rev:Reviews;
  
  constructor(private rout: ActivatedRoute,
    private revService: ReviewsService) { }

  ngOnInit(): void {

    let id = this.rout.snapshot.params['id'];

    this.revService.getReviewById(id).subscribe(data=>{
        this.rev=data;
    });
  }

}
