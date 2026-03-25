import { Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})

export class TaskFormComponent {
  title = '';
  description = '';
  dueDate = '';

  constructor(private readonly taskService: TaskService) {}

  @Output() taskAdded = new EventEmitter<void>();

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
        this.taskAdded.emit()
      }, 
      error: (err) => {
        console.error(err)
      }
    })
  }
}

