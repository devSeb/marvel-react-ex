import React, { Component } from 'react';
import { Link } from 'react-router'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


/** View **/
import CharacterInfo from '../components/CharacterInfo/CharacterInfo';

/** Service **/
import * as serviceMarvelByCharacter from '../service/serviceMarvelByCharacter';

/** Reducer **/
import * as MarvelCharactersActions from '../redux/actions/MarvelCharactersActions';
/** State **/
const mapStateToProps = (state) => ({
    characterInfo: state.reducer_marvelCharacters.characterInfo.data
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    MarvelCharactersActions: bindActionCreators(MarvelCharactersActions, dispatch)
});


class Info extends Component {

    static propTypes = {};

    constructor() {
        super();
        this.state = {
            getData: false
        }
    }

    loadDataByCharacter() {
        var self = this;
        serviceMarvelByCharacter.search_CharacterInfo(self.props.params.idCharacter)
            .then(function (data) {
                if (data !== null) {
                    //console.log("start data = ", data);
                    /** add reducer  :  a object of one character  **/
                    self.props.MarvelCharactersActions.add_marvelCharacterInfo(data);
                    self.setState({getData: true})
                }
            });
    }

    componentDidMount() {
        var self = this;
        /**  Find on Character :> Add Id Parameter **/
        if ( self.props.params.hasOwnProperty("idCharacter") ) {
            self.loadDataByCharacter();
        }
    }

    componentWillReceiveProps(  nextProps ) {
        var self = this;
        //console.log("nextProps =", nextProps);
        if ( nextProps.characterInfo[0].id  ) {
            if (  nextProps.characterInfo[0].id != self.props.params.idCharacter) {
                if ( self.props.params.hasOwnProperty("idCharacter") ) {
                    self.loadDataByCharacter();
                }
            }
        }
    }

    render() {
        //console.log("element", this.props.params.idCharacter);

        return(
            <div>
                <div>
                    <Link to={"/"}>
                        <h1><i className="fa fa-arrow-left" aria-hidden="true"/></h1>
                    </Link>

                    { this.state.getData && this.props.params.idCharacter && this.props.characterInfo &&
                        <CharacterInfo />
                    }
                </div>
            </div>
        );
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Info);
