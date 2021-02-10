import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { addUser } from '../../../models/addUser';
import { Users, Users2 } from 'src/app/models/users';
import { Subscription } from 'rxjs';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

export class EdituserComponent implements OnInit {
  sub:Subscription;
  user: Users2;

  constructor(private rout: ActivatedRoute,
               private userService: UsersService,
                private refreshservice: RefreshService) { }

  ngOnInit(): void {

    this.sub =this.refreshservice.refreshMovie.subscribe(user =>this.user=user);

    // this.rout.paramMap.subscribe(patameterMap => {
    //   const id = patameterMap.get('id');
    //   console.log("this is ", id);
    //   this.getUser(+id);
    //   console.log("her" + this.getUser(+id));

    // });

  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  // onUpdate(){
  //   this.userService.
  // }

  // private getUser(id: number) {


  //   //  this.user = this.userService.getUserById(id);


  // }
  onUpdate(){
    this.userService.updateUser(this.user).subscribe(user=>{
      this.user=user;
      console.log(user);
      
    });
  }

}

