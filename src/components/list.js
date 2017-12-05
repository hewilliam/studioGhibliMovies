import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

class List extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }


    render () {
        return (
            <div>
                List
            </div>
        )
    }
}

export default connect(null, {fetchMovies: fetchMovies}) (List); //same thing as mapStateToProps