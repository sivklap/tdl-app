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

  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        console.log(tasks)
        this.tasks = tasks; 
      },
      error: (err) => console.error(err)
    });
  }

  onToggleDone(task: Task): void {
    this.taskService.updateTask(task.id, { done: !task.done }).subscribe({
      next: () => {
        task.done = !task.done;
      },
      error: (err) => console.error(err)
    });
  }

  onDelete(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(t => t.id != task.id)
      },
      error: (err) => console.error(err)
    })
  }
}

