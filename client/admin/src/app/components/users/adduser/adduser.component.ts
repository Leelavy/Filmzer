import { Component, OnInit } from '@angular/core';
import { addUser } from '../../../models/addUser';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})


export class AdduserComponent implements OnInit {

  constructor(private usersservice: UsersService) { }

  ngOnInit(): void {
  }

  createUser(usernameU: string, passwordU: number, adminU: string, firstNameU: string,
    lastNameU: string, emailU: string){

        const userNew :addUser=({

          username: usernameU,
          password:passwordU,
          admin:adminU,
          firstName:firstNameU,
          lastName:lastNameU,
          email:emailU

        });

        this.usersservice.createUser(userNew).subscribe();
        console.log(userNew);

    }

}
