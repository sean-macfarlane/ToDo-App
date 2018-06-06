package com.todo;

import java.util.Map;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {

    @GetMapping("/todo")
    public String getTodos(@RequestParam String filter) {
        return "Congratulations from BlogController.java";
    }

    @PostMapping("/todo")
    public String createTodo(@RequestBody Map<String, String> requestBody) {
        String body = requestBody.get("body");

        return "Congratulations from BlogController.java";
    }

    @PostMapping("/todo/{id}")
    public String updateTodo(@PathVariable String id, @RequestBody Map<String, String> requestBody) {
        int todoId = Integer.parseInt(id);
        String body = requestBody.get("body");
        
        return "Congratulations from BlogController.java";
    }

    @DeleteMapping("/todo/{id}")
    public String deleteTodo(@PathVariable String id) {
        int todoId = Integer.parseInt(id);
        
        return "Congratulations from BlogController.java";
    }

}
