import _ from 'lodash';
import { FETCH_TODO, FETCH_COMPLETED, NEW_TODO, UPDATE_TODO, DELETE_TODO, DELETE_COMPLETED } from '../actions/types';

const initialState = {
    todos: [],
    completed: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODO:
            return {
                ...state,
                todos: action.data
            }
            break;
        case FETCH_COMPLETED:
            return {
                ...state,
                completed: action.data
            }
            break;
        case NEW_TODO:
            return {
                ...state,
                todos: [...state.todos, action.data]
            }
            break;
        case UPDATE_TODO:
            if (action.data.complete === true) {
                var index = _.findIndex(state.completed, (todo) => todo.id === action.data.id);
                if (index === -1) {
                    index = _.findIndex(state.todos, (todo) => todo.id === action.data.id);
                    if (index === -1) {
                        return {
                            ...state
                        }
                    }

                    return {
                        todos: [...state.todos.slice(0, index)],
                        completed: [...state.completed, action.data]
                    };
                }

                return {
                    ...state,
                    completed: [
                        ...state.completed.slice(0, index),
                        Object.assign({}, state.completed[index], action.data),
                        ...state.completed.slice(index + 1)
                    ]
                }
            } else {
                var index = _.findIndex(state.todos, (todo) => todo.id === action.data.id);
                if (index === -1) {
                    index = _.findIndex(state.completed, (todo) => todo.id === action.data.id);
                    if (index === -1) {
                        return {
                            ...state
                        }
                    }

                    return {
                        todos: [...state.todos, action.data],
                        completed: [...state.completed.slice(0, index)]
                    };
                }

                return {
                    ...state,
                    todos: [
                        ...state.todos.slice(0, index),
                        Object.assign({}, state.todos[index], action.data),
                        ...state.todos.slice(index + 1)
                    ]
                }
            }
            break;
        case DELETE_TODO:
            var index = _.findIndex(state.todos, (todo) => todo.id === action.data);
            if (index === -1) {
                return {
                    ...state
                }
            }

            return {
                ...state,
                todos: [...state.todos.slice(0, index)]
            };
            break;
        case DELETE_COMPLETED:
            var index = _.findIndex(state.completed, (todo) => todo.id === action.data);
            if (index === -1) {
                return {
                    ...state
                }
            }

            return {
                ...state,
                completed: [...state.completed.slice(0, index)]
            };
        default:
            return state;
    }
}