import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Tasks } from '../task'


const httpOpts = {
  headers : new HttpHeaders({'Content-type': 'application/json'})
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private appUrl = 'http://localhost:5000/tasks/';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.appUrl);
  }

  deleteTask(task: Tasks): Observable<Tasks> {
    const url = `${this.appUrl}/${task._id}`;
   return this.http.delete<Tasks>(url);
  }

  toggleReminder(task: Tasks): Observable<Tasks> {
    const url = `${this.appUrl}/${task._id}`;

    return this.http.put<Tasks>(url, task, httpOpts);
  }

  addTask(task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.appUrl, task, httpOpts);
  }
}
