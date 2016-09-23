
import * as actionType from '../constants/ActionTypes';

export function addText( _name ) {
    return {
        type : actionType.ADD_TEXT_TEST,
        result: _name
    }
}
