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

import java.util.List;

/**
 * REST endpoints for the Task List (TDL) app.
 *
 * Beginner note: these methods are currently "stubs" so you can wire up the Angular UI
 * without implementing everything at once.
 */
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
		// TODO: return taskRepository.findAll()
		return List.of();
	}

	@PostMapping
	public Task create(@RequestBody CreateTaskRequest request) {
		// TODO: validate request.title, then save
		throw new UnsupportedOperationException("TODO: implement create() (POST /api/tasks)");
	}

	@PutMapping("/{id}")
	public Task update(@PathVariable Long id, @RequestBody UpdateTaskRequest request) {
		// TODO: load existing task; update title/done; save
		throw new UnsupportedOperationException("TODO: implement update() (PUT /api/tasks/{id})");
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		// TODO: delete or 404 if missing
		throw new UnsupportedOperationException("TODO: implement delete() (DELETE /api/tasks/{id})");
	}

	public record CreateTaskRequest(String title) {}

	/**
	 * Fields are optional so the client can send only what it wants to update.
	 */
	public record UpdateTaskRequest(String title, Boolean done) {
		public UpdateTaskRequest {
			// no validation in the stub version
		}
	}
}

