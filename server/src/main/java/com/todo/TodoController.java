package com.todo;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {

    @Autowired
    TodoRepository todoRepository;

    @CrossOrigin
    @GetMapping("/todo")
    public List<Todo> index() {
        return todoRepository.findAll();
    }

    @CrossOrigin
    @PostMapping("/todo")
    public Todo create(@RequestBody Map<String, String> requestBody) {
        String body = requestBody.get("body");

        return todoRepository.save(new Todo(body));
    }

    @CrossOrigin
    @PutMapping("/todo/{id}")
    public Todo update(@PathVariable String id, @RequestBody Map<String, String> requestBody) {
        int todoId = Integer.parseInt(id);
        String body = requestBody.get("body");

        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new ResourceNotFoundException("Todo", "id", todoId));

        todo.setBody(body);
        return todoRepository.save(todo);

    }

    @CrossOrigin
    @DeleteMapping("/todo/{id}")
    public ResponseEntity<?> delete(@PathVariable String id) {
        int todoId = Integer.parseInt(id);
        todoRepository.deleteById(todoId);

        return ResponseEntity.ok().build();
    }

}
