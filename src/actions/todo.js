import { FETCH_TODO, NEW_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/types';

export const fetchTodo = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: FETCH_TODO,
                data: data
            }));
}
export const createTodo = (todoData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todoData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_TODO,
            data: data
        }));
}

export const updateTodo = (todoData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'UPDATE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todoData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: UPDATE_TODO,
            data: data
        }));
}

export const deleteTodo = (todoData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: DELETE_TODO,
            data: data
        }));
}