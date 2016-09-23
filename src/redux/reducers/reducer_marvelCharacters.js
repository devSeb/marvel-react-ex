
import * as types from '../constants/ActionTypes';

const initialState = {

    characters : {
        data : null
    },
    characterInfo: {
        data: null
    }
};

export default function manage_MarvelCharacters( state = initialState , action) {

    switch (action.type) {

        case types.MARVEL_CHARACTERS:
            return {
                ...state,
                characters: {
                    data: action.result
                }
            };

        case types.MARVEL_CHARACTER_INFO:
            return {
                ...state,
                characterInfo: {
                    data: action.result
                }
            };

        default:
            return state;
    }
}