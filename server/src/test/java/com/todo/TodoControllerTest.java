/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.todo;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 *
 * @author Sean
 */
@RunWith(SpringRunner.class)
@WebMvcTest(TodoController.class)
public class TodoControllerTest {

    @Autowired
    private MockMvc mockMvc;
    
   @MockBean
   private TodoController todoController;

    public TodoControllerTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of index method, of class TodoController.
     */
    @Test
    public void testIndex() throws Exception {
        
    }

    /**
     * Test of create method, of class TodoController.
     */
    @Test
    public void testCreate() {
        System.out.println("create");

        Map<String, String> requestBody = new HashMap();
        requestBody.put("body", "Test todo database");

        Todo expResult = new Todo("Test todo database");
        Todo result = todoController.create(requestBody);
        assertEquals(expResult, result);
    }

    /**
     * Test of update method, of class TodoController.
     */
    @Test
    public void testUpdate() {
        System.out.println("update");
        String id = "1";

        Map<String, String> requestBody = new HashMap();
        requestBody.put("id", "1");
        requestBody.put("body", "Test todo database");
        requestBody.put("complete", "false");

        Todo expResult = new Todo(1, "Test todo database", false, new Timestamp(System.currentTimeMillis()));
        Todo result = todoController.update(id, requestBody);
        assertEquals(expResult, result);
    }

    /**
     * Test of delete method, of class TodoController.
     */
    @Test
    public void testDelete() {
        System.out.println("delete");

        Map<String, String> requestBody = new HashMap();
        requestBody.put("body", "Test todo database");

        Todo expResult = new Todo("Test todo database");
        Todo todo = todoController.create(requestBody);

        boolean result = todoController.delete(Integer.toString(todo.getId()));
        assertEquals(true, result);
    }
}
