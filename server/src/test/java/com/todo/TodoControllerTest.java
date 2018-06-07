/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.todo;

import java.util.List;
import java.util.Map;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 *
 * @author Sean
 */
public class TodoControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

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
        this.mockMvc = MockMvcBuilders
                .webAppContextSetup(this.webApplicationContext)
                .build();
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of index method, of class TodoController.
     */
    @Test
    public void testIndex() throws Exception {
        System.out.println("index");
        TodoController instance = new TodoController();
        List<Todo> expResult = null;
        List<Todo> result = instance.index();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
        
        this.mockMvc.perform(get("/hello"))
                .andExpect(status().isOk())
                .andExpect(content().string("Hello Spring World!"));
    }

    /**
     * Test of create method, of class TodoController.
     */
    @Test
    public void testCreate() {
        System.out.println("create");
        Map<String, String> requestBody = null;
        TodoController instance = new TodoController();
        Todo expResult = null;
        Todo result = instance.create(requestBody);
        assertEquals(expResult, result);
        
        
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of update method, of class TodoController.
     */
    @Test
    public void testUpdate() {
        System.out.println("update");
        String id = "";
        Map<String, String> requestBody = null;
        TodoController instance = new TodoController();
        Todo expResult = null;
        Todo result = instance.update(id, requestBody);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of delete method, of class TodoController.
     */
    @Test
    public void testDelete() {
        System.out.println("delete");
        String id = "";
        TodoController instance = new TodoController();
        ResponseEntity expResult = null;
        ResponseEntity result = instance.delete(id);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

}
