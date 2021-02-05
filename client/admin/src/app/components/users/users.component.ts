import { Component, OnInit } from '@angular/core';
 import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
// import { CurrentUsersService } from 'src/app/services/users.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  searchUser: string;
  users: Users[] = [];
  user: Users;
 

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.load();

  }

  load() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  
  onDelete(_id:number) {
    this.usersService.deleteUser(_id).subscribe(() => {
      this.users = null;
      
    });

  }


}
