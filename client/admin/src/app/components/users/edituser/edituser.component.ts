import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { Users } from 'src/app/models/users';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

export class EdituserComponent implements OnInit {
 
  user:Users;

  constructor(private rout: ActivatedRoute,
    private userService: UsersService) { }

  ngOnInit(): void {

    let id = this.rout.snapshot.params['id'];

    this.userService.getUserById(id).subscribe(data=>{
        this.user=data;
    });

  }



}

