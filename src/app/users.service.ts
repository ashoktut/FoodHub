import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: variable-name
  user_url = 'https://jsonplaceholder.typicode.com/users';

  public getUsers() {
    return this.http.get<any>(this.user_url);
  }
 
}
