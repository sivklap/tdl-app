package com.example.tdl.task;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.time.LocalDateTime;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/api/tasks")
public class TaskController {

	private final TaskRepository taskRepository;

	public TaskController(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}

	@GetMapping
	public List<Task> list() {
		return taskRepository.getTasks();
	}

	@GetMapping("/{id}")
    public Task getById(@PathVariable Long id) {
        Task task = taskRepository.getTask(id);
        if (task == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found");
        }
        return task;
    }

	@PostMapping
	public ResponseEntity<ApiResponse<Task>> create(@RequestBody CreateTaskRequest request) {
		Task task = new Task(taskRepository.generateId(), request.title(), request.description(), request.dueDate());

		taskRepository.addTask(task);
		
		return ResponseEntity
			.status(HttpStatus.CREATED)
			.body(new ApiResponse<>(task));
	}

	@PutMapping("/{id}")
	public ResponseEntity<ApiResponse<Task>> update(@PathVariable Long id, @RequestBody UpdateTaskRequest request) {
		Task task = taskRepository.getTask(id);
		if (task == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND , "Task not found");
		}

		if(request.title() != null) task.setTitle(request.title());
		if(request.description() != null) task.setDescription(request.description());
		if(request.done() != null) task.setDone(request.done());
		if(request.dueDate() != null) task.setDueDate(request.dueDate());

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(new ApiResponse<>(task));
	}


	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
		Task task = taskRepository.getTask(id);
		if (task == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND , "Task not found");
		}
		
		taskRepository.deleteTask(id);
		return ResponseEntity.noContent().build();
	}

	public record CreateTaskRequest(String title, String description, LocalDateTime dueDate) {}

	public record UpdateTaskRequest(String title, String description, LocalDateTime dueDate, Boolean done) {}

	public record ApiResponse<T>(T data) {}

}

