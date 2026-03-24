package com.example.tdl.task;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.ArrayList;
import java.time.LocalDateTime;

@Repository
public class TaskRepository {
    private List<Task> tasks;
    private Long nextId = 1L;

    public TaskRepository() {
        this.tasks = new ArrayList<>();
        this.tasks.add(new Task(generateId(), "Task 1", "Description 1", LocalDateTime.now()));
        this.tasks.add(new Task(generateId(), "Task 2", "Description 2", LocalDateTime.now()));
        this.tasks.add(new Task(generateId(), "Task 3", "Description 3", LocalDateTime.now()));
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public Task getTask(Long id) {
        return tasks.stream()
        .filter(task -> task.getId().equals(id))
        .findFirst()
        .orElse(null);
    }

    public void addTask(Task task) {
        tasks.add(task);
    }

    public void deleteTask(Long id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }

    public Long generateId() {
        return nextId ++;
    }
}
