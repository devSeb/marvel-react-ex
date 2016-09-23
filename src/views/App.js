import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/** View **/
import Characters from '../components/Characters/Characters';

/** Service **/
import * as serviceMarvelCharacters from '../service/serviceMarvelCharacters';

/** Reducer **/
import * as MarvelCharactersActions from '../redux/actions/MarvelCharactersActions';

/** State **/
const mapStateToProps = (state) => ({
   marvelsCharacters: state.reducer_marvelCharacters.characters.data
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    MarvelCharactersActions: bindActionCreators(MarvelCharactersActions, dispatch)
});


class App extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount() {
        var self = this;
        require("./views.scss");

        /** Retrieve all characters
         *  result : Map
         */
        serviceMarvelCharacters.searchCharactersMarvel()
            .then(function ( data) {
                //console.log("data ", data);
                if ( data !== null) {
                    /** Add result on the reducer  **/
                    self.props.MarvelCharactersActions.add_marvelCharacters(data);
                }
            });
    }

    componentWillReceiveProps(  nextProps ) {
        //console.log("nextProps =", nextProps);
    }

    render() {

        var imgBanner = require('../img/banner.png');

        return(
            <div className="app">
                <img className="img-banner" src={imgBanner} width="auto"/>
                <br />
                <br />
                {this.props.marvelsCharacters &&
                    <Characters />
                }
            </div>
        );
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
