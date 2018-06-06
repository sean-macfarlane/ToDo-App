import { SET_MODAL_TODO } from '../actions/types';

const initialState = {
    todo: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case SET_MODAL_TODO:
            return {
                ...state,
                todo: action.data
            };
            break;
        default:
            return state;
    }
}