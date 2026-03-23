import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  // TODO: add loading/error state for better UX
  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    // TODO: this.tasks = await this.taskService.getTasks().toPromise()
  }

  onToggleDone(_task: Task): void {
    // TODO: call taskService.updateTask(task.id, { done: !task.done })
  }

  onDelete(_task: Task): void {
    // TODO: call taskService.deleteTask(task.id) then refresh list
  }
}

