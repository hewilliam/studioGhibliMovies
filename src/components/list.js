import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import { Link } from 'react-router-dom';

class List extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    renderMovies () { //used lodash to map on a OBJECT
        return _.map(this.props.list, list => {
            return (
                <li className="list-group-item" key={list.id}>
                    <Link to={`/movie/${list.id}`}>
                        {list.title}
                    </Link>
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