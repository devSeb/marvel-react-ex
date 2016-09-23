/**
 * Created by Administrateur on 22/09/2016.
 */

import * as actionType from '../constants/ActionTypes';

/** Add list of objects  **/
export function add_marvelCharacters( _list ) {
    return {
        type : actionType.MARVEL_CHARACTERS,
        result: _list
    }
}
/** Add a object **/
export function add_marvelCharacterInfo( _elements ) {
    return {
        type : actionType.MARVEL_CHARACTER_INFO,
        result: _elements
    }
}