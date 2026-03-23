import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  title = '';

  constructor(private readonly taskService: TaskService) {}

  onAdd(): void {
    // TODO: call taskService.createTask(this.title), then clear form + refresh list
  }
}

