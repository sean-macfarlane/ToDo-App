import { FETCH_COMPLETED, UPDATE_COMPLETED, DELETE_COMPLETED } from '../actions/types';

export const fetchCompleted = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: FETCH_COMPLETED,
                data: data
            }));
}

export const updateCompleted = (todoData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'UPDATE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todoData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: UPDATE_COMPLETED,
            data: data
        }));
}

export const deleteCompleted = (todoData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: DELETE_COMPLETED,
            data: data
        }));
}