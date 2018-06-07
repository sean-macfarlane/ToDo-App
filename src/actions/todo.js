import { FETCH_TODO, FETCH_COMPLETED, NEW_TODO, UPDATE_TODO, DELETE_TODO, DELETE_COMPLETED } from '../actions/types';
import Config from '../constants/Config';

export const fetchTodo = () => dispatch => {
    fetch(Config.server + '/todo?complete=false')
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: FETCH_TODO,
                data: data
            }));
}

export const fetchCompleted = () => dispatch => {
    fetch(Config.server + '/todo?complete=true')
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: FETCH_COMPLETED,
                data: data
            }));
}

export const createTodo = (todoData) => dispatch => {
    console.log(todoData)
    fetch(Config.server + '/todo', {
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
    fetch(Config.server + '/todo/' + todoData.id, {
        method: 'PUT',
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

export const setCompleted = (todoData) => dispatch => {
    fetch(Config.server + '/todo/' + todoData.id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todoData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: SET_COMPLETED_TRUE,
            data: data
        }));
}

export const deleteTodo = (id) => dispatch => {
    fetch(Config.server + '/todo/' + id, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: DELETE_TODO,
            data: id
        }));
}

export const deleteCompleted = (id) => dispatch => {
    fetch(Config.server + '/todo/' + id, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: DELETE_COMPLETED,
            data: id
        }));
}