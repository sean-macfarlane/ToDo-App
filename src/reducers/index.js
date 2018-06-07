import { combineReducers } from 'redux';
import todoReducer from './todo';
import modalReducer from './modal';

export default combineReducers({
    todo: todoReducer,
    modal: modalReducer
});