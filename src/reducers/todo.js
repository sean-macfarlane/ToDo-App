import _ from 'lodash';
import { FETCH_TODO, FETCH_COMPLETED, NEW_TODO, UPDATE_TODO, UPDATE_COMPLETED, DELETE_TODO, DELETE_COMPLETED } from '../actions/types';

const initialState = {
    todos: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODO:
            return {
                ...state,
                todos: action.data
            }
            break;
        case DELETE_TODO:
            var index = _.findIndex(state.todos, (todo) => todo.id === action.id);
            if (index === -1) {
                return {
                    ...state
                }
            }

            return {
                ...state,
                todos: { ...state.todos.slice(0, index) }
            };
        default:
            return state;
    }
}