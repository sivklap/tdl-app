import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './tdl/task-list/task-list.component';
import { TaskFormComponent } from './tdl/task-form/task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskListComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  @ViewChild(TaskListComponent) taskListComponent!: TaskListComponent;
  
  onTaskAdded(): void {
    this.taskListComponent.loadTasks()
  }
}

