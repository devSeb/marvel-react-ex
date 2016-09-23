import React, { Component } from 'react'
import { Link } from 'react-router'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/** Reducer **/
import * as MarvelCharactersActions from '../../redux/actions/MarvelCharactersActions';
/** State **/
const mapStateToProps = (state) => ({
    marvelsCharacters: state.reducer_marvelCharacters.characters.data
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    MarvelCharactersActions: bindActionCreators(MarvelCharactersActions, dispatch)
});


class Characters extends Component {

    static propTypes = {
    };

    constructor(context, props) {
        super(context, props);
    }

    componentDidMount(){
        //require('./Characters');
        require('./css/Characters.scss');
    }


    render() {
        var self = this;
        //console.log("element = ", this.props.marvelsCharacters);
        return (
            <div className="character">
                <div className="col-lg-12 col-md-12">

                    {self.props.marvelsCharacters && self.props.marvelsCharacters.map(function(item, index) {

                        var character = {
                            name: (item.name) ? item.name : null,
                            img: ( item.thumbnail.path && item.thumbnail.extension ) ?  item.thumbnail.path + "." + item.thumbnail.extension : null,
                            comicsLink : (item.stories.available) ? item.stories.available : 0
                        };

                        if ( character.name && character.img ) {
                            //console.log("character.img == ", character.img);
                            return (
                                <div  key={index}>
                                    <div className="ol-lg-4 col-md-4">
                                        <div className="thumbnail background-img">
                                            <Link to={"/character/"+ item.id}>
                                                <img src={character.img} className="img-marvel" alt={character.name} />
                                            </Link>
                                            <div className="caption background-list">
                                                <h4 className="text-center">{character.name}</h4>
                                                <hr />
                                                <ul className="list-inline">
                                                    <li> <i className="fa fa-book" aria-hidden="true"/> Detail</li>
                                                    <li> <i className="fa fa-book" aria-hidden="true"/> Wiki </li>
                                                    {character.comicsLink > 0 &&
                                                        <li> <i className="fa fa-book" aria-hidden="true"/> Comics Link  </li>
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                })}

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Characters);

