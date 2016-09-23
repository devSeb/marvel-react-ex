
import * as types from '../constants/ActionTypes';

const initialState = {

    element : {
        text : "test"
    }
};

export default function text( state = initialState , action) {

    switch (action.type) {

        case types.ADD_TEXT_TEST:
            return {
                ...state,
                element: {
                    text: action.result
                }
            };

        default:
            return state;
    }
}