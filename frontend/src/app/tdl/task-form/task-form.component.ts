import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  title = '';
  description = '';
  dueDate = '';

  constructor(private readonly taskService: TaskService) {}

  onAdd(): void {
    this.taskService.createTask({
      title: this.title, 
      description: this.description, 
      dueDate: this.dueDate
    }).subscribe({
      next: () => {
        this.title = '', 
        this.description = '', 
        this.dueDate = ''
      }, 
      error: (err) => {
        console.error(err)
      }
    })
  }
}

