import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly baseUrl = 'http://localhost:8080/api/tasks';

  constructor(private readonly http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  createTask(task: { title: string; description: string; dueDate: string }): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  updateTask(id: number, put: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${id}`, put);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}