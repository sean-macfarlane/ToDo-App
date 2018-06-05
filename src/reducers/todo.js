import { FETCH_TODO, NEW_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/types';

const initialState = {
    items: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODO:
            return {
                ...state,
                items: action.data
            }
            break;
        default:
            return state;
    }
}