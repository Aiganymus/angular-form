import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.type';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  host = 'http://expo.iict.kz/api'

  constructor(private httpClient: HttpClient) { }

  postTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.host}/Tasks`, task);
  }

  putTask(id: string, task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.host}/Tasks/${id}`, task);
  }

  getTasksByUserId(userId: string): Observable<Task[]> {
    let filter = {
      "where": {
        "userId": userId
      }
    };
    return this.httpClient.get<Task[]>(`${this.host}/Tasks`,
      {
        params: {
          filter: JSON.stringify(filter)
        },
      }
    )
  }
}
