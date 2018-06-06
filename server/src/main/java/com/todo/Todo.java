package com.todo;

import java.sql.Timestamp;
import javax.persistence.*;
import org.springframework.data.annotation.CreatedDate;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private String body;

    private boolean complete;
    
    @CreatedDate
    private Timestamp created;

    public Todo() {
    }

    public Todo(String body) {
        this.setBody(body);
    }

    public Todo(int id, String body, boolean complete, Timestamp created) {
        this.setId(id);
        this.setBody(body);
        this.setComplete(complete);
        this.setCreated(created);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public boolean getComplete() {
        return complete;
    }

    public void setComplete(boolean complete) {
        this.complete = complete;
    }

    public Timestamp getCreated() {
        return created;
    }

    public void setCreated(Timestamp created) {
        this.created = created;
    }

    @Override
    public String toString() {
        return "Todo{"
                + "id=" + id
                + ", body='" + body + '\''
                + ", complete='" + complete + '\''
                + ", created='" + created.toString() + '\''
                + '}';
    }
}
