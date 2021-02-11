import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit(): void {
  }

  // loginAdmin(email:string, password:number) {
    
  //   console.log(email,password);
    
    
  //   this.rout.navigate(['/dashboard']);
  // }

}
