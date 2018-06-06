import _ from 'lodash';
import { FETCH_COMPLETED, UPDATE_COMPLETED, DELETE_COMPLETED } from '../actions/types';

const initialState = {
    completed: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COMPLETED:
            return {
                ...state,
                completed: action.data
            }
            break;
        case DELETE_COMPLETED:
            var index = _.findIndex(state.completed, (todo) => todo.id === action.id);
            if (index === -1) {
                return {
                    ...state
                }
            }

            return {
                ...state,
                completed: { ...state.completed.slice(0, index) }
            };
        default:
            return state;
    }
}