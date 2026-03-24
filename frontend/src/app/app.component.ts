import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './tdl/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  // TODO: wire up the Task UI here once Task components/services exist
}

