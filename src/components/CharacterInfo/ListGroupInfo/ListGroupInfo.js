import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


/** State **/
const mapStateToProps = (state) => ({
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
});


class ListGroupInfo extends Component {

    static propTypes = {
        classNames: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired
    };

    constructor(context, props) {
        super(context, props);
    }

    componentDidMount() {
    }


    render() {
        var self = this;
        return (
            <div className="comics">
                <h3>{self.props.title}</h3>
                <ul className="list-group">
                    {self.props.data &&  self.props.data.map(function( item, index) {
                        return (
                            <li key={index} className="list-group-item">{item.name}</li>
                        );

                    })}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListGroupInfo);

