import { combineReducers } from 'redux';
import todoReducer from './todo';
import completedReducer from './completed';
import modalReducer from './modal';

export default combineReducers({
    todo: todoReducer,
    completed: completedReducer,
    modal: modalReducer
});