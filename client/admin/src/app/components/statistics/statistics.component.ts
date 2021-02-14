import { Component, OnInit } from '@angular/core';
import { StatisticService } from '../../services/statistic.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import {Statistics} from '../../models/statistics';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';




@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {
    doughnutC:Statistics[];
    doughnutL:Statistics[];
    gen:string;
    chart:any;

    aa:Statistics[];

  constructor(private stat: StatisticService) { }

  ngOnInit(): void {
      this.load();

  }

    load(){
      this.stat.getSta().subscribe(res=>{
          console.log(res);
          this.doughnutL= res['list'];        
        });

        // this.stat.getAvg().subscribe(res=>{
        //   this.doughnutC=res;
        //   console.log(this.doughnutC);
          
        // });
  
    }
   
    
    
   
  // public doughnutChartLabels = ['Science Fiction', 'Thriller', 'Crime', 'Action', 'Comedy'];
  // public doughnutChartData = [120, 150, 180, 90, 10];
   public doughnutChartType = 'doughnut';



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [

    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series A' }
  ];




}
