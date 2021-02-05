import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private usersUrl = environment.usersUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl);
  }

  // updateUser(user:Users): Observable<Users[]>{
  //   const url=`${this.usersUrl}/${user.username.index}`;
  //   return this.http.patch<Users[]>(url,{user: user.username});


  // }

  getUserById(id: number): Observable<Users> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<Users>(url)
  }

  deleteUser(_id: number): Observable<Users> {
    const url = `${this.usersUrl}/${_id}`;
    return this.http.delete<Users>(url);

  }

  countUsers(count: string): Observable<Users> {
    const url = `${this.usersUrl}/${count}`;
    return this.http.get<Users>(url);
  }




}




