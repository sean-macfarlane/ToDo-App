import { FETCH_TODO } from '../actions/types';

export const fetchTodo = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: FETCH_TODO,
                data: data
            }));
}
