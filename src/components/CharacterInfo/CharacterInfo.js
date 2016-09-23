import React, { Component } from 'react'
import { Link } from 'react-router'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/** Child Component **/
import ListGroupInfo from './ListGroupInfo/ListGroupInfo';

/** Reducer **/
import * as MarvelCharactersActions from '../../redux/actions/MarvelCharactersActions';

/** State **/
const mapStateToProps = (state) => ({
    marvelsCharacter: state.reducer_marvelCharacters.characterInfo.data
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    MarvelCharactersActions: bindActionCreators(MarvelCharactersActions, dispatch)
});


class CharacterInfo extends Component {


    constructor(context, props) {
        super(context, props);
    }

    componentDidMount() {
        require('./css/CharacterInfo.scss');
    }


    render() {
        var self = this;
        var obj = {
           img : null,
           name : null,
           description : null
        };
        //console.log("self.props.marvelsCharacter[0] = ", self.props.marvelsCharacter[0] );
        var element = self.props.marvelsCharacter[0];
            obj.img = ( element.thumbnail.path && element.thumbnail.extension ) ?  element.thumbnail.path + "." + element.thumbnail.extension : null;
            obj.name = ( element.name) ? element.name : null ;
            obj.description = (element.description) ? element.description : null;

        return (
            <div className="character-info">


                <div className="container">
                    <div className="col-lg-12 col-md-12">

                        <div className="col-lg-6 col-md-7">
                            {obj.img &&
                                <div className="img">
                                    <img src={obj.img} className="img-marvel" alt={obj.name} />
                                </div>
                            }
                        </div>

                        <div className="col-lg-6 col-md-7">

                            <div className="info">
                                {obj.name &&
                                    <div style={{paddingBottom:20}} className="title text-center">
                                        <h3>{obj.name}</h3>
                                        <p>{ obj.description }</p>
                                    </div>
                                }



                                {self.props.marvelsCharacter[0].comics.available > 0  && self.props.marvelsCharacter[0].comics.items &&

                                        <ListGroupInfo classNames={"comics"}
                                                       title={"comics"}
                                                       data={self.props.marvelsCharacter[0].comics.items} />
                                }

                                {self.props.marvelsCharacter[0].series.available > 0 && self.props.marvelsCharacter[0].series.items &&
                                        <ListGroupInfo  classNames={"series"}
                                                        title={"series"}
                                                        data={self.props.marvelsCharacter[0].series.items}/>
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CharacterInfo);

