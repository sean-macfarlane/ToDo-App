/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.todo;

import java.sql.Timestamp;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Sean
 */
public class TodoTest {
    
    public TodoTest() {
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
     * Test of getId method, of class Todo.
     */
    @Test
    public void testGetId() {
        System.out.println("getId");
        Todo instance = new Todo();
        int expResult = 0;
        int result = instance.getId();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setId method, of class Todo.
     */
    @Test
    public void testSetId() {
        System.out.println("setId");
        int id = 0;
        Todo instance = new Todo();
        instance.setId(id);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getBody method, of class Todo.
     */
    @Test
    public void testGetBody() {
        System.out.println("getBody");
        Todo instance = new Todo();
        String expResult = "";
        String result = instance.getBody();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setBody method, of class Todo.
     */
    @Test
    public void testSetBody() {
        System.out.println("setBody");
        String body = "";
        Todo instance = new Todo();
        instance.setBody(body);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getComplete method, of class Todo.
     */
    @Test
    public void testGetComplete() {
        System.out.println("getComplete");
        Todo instance = new Todo();
        boolean expResult = false;
        boolean result = instance.getComplete();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setComplete method, of class Todo.
     */
    @Test
    public void testSetComplete() {
        System.out.println("setComplete");
        boolean complete = false;
        Todo instance = new Todo();
        instance.setComplete(complete);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getCreated method, of class Todo.
     */
    @Test
    public void testGetCreated() {
        System.out.println("getCreated");
        Todo instance = new Todo();
        Timestamp expResult = null;
        Timestamp result = instance.getCreated();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setCreated method, of class Todo.
     */
    @Test
    public void testSetCreated() {
        System.out.println("setCreated");
        Timestamp created = null;
        Todo instance = new Todo();
        instance.setCreated(created);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of toString method, of class Todo.
     */
    @Test
    public void testToString() {
        System.out.println("toString");
        Todo instance = new Todo();
        String expResult = "";
        String result = instance.toString();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
    
}
