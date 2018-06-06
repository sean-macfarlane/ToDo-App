import { SET_MODAL_TODO } from '../actions/types';

export const setModalTodo = (data) => dispatch => {
    dispatch({
        type: SET_MODAL_TODO,
        data: data
    });
}