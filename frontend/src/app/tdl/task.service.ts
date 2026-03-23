import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Task } from './task.model';

/**
 * TaskService talks to the Java backend.
 * TODO: implement real HTTP calls once you confirm the backend endpoints.
 */
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly baseUrl = 'http://localhost:8080/api/tasks';

  constructor(private readonly http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return throwError(() => new Error('TODO: implement getTasks()'));
  }

  createTask(title: string): Observable<Task> {
    return throwError(() => new Error('TODO: implement createTask()'));
  }

  updateTask(id: number, patch: Partial<Pick<Task, 'title' | 'done'>>): Observable<Task> {
    return throwError(() => new Error('TODO: implement updateTask()'));
  }

  deleteTask(id: number): Observable<void> {
    return throwError(() => new Error('TODO: implement deleteTask()'));
  }
}

