import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.type';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  host = 'http://expo.iict.kz/api'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.host}/Users`);
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.host}/Users/${id}`);
  }

  deleteUserById(id: string) {
    return this.httpClient.delete(`${this.host}/Users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.host}/Users`, user);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.host}/Users/${id}`, user);
  }

}
