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

}




