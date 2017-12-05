import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

class List extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    renderMovies () { //used lodash to map on a OBJECT
        return _.map(this.props.list, list => {
            return (
                <li className="list-group-item" key={list.id}>
                    {list.title}
                </li>
            )
        })
    }

    render () {
        console.log(this.props.list)
        return (
            <div>
                <h3>List of Studio Ghibli Movies</h3>
                <ul className="list-group"> 
                    {this.renderMovies()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { list: state.list }
}

export default connect(mapStateToProps, {fetchMovies: fetchMovies}) (List); 