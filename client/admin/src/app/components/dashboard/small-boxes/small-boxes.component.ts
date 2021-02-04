import { Component, OnInit } from '@angular/core';
import { CountSmallBoxesService } from '../../../services/count-small-boxes.service'

@Component({
  selector: 'app-small-boxes',
  templateUrl: './small-boxes.component.html',
  styleUrls: ['./small-boxes.component.css']
})
export class SmallBoxesComponent implements OnInit {

  usersView: Number;

  constructor(private service: CountSmallBoxesService) {

    service.currentCounter.subscribe(counter => this.usersView=counter);

  }

  ngOnInit(): void {
  }



}
