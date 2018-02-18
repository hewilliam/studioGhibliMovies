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
        return (
            <div>
                <h3>Studio Ghibli Movies</h3>
                <img id="logo"src='https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png'/>
                <ul className="list-group"> 
                    {this.renderMovies()}
                </ul>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return { list: state.list }
// }

// export default connect(mapStateToProps, {fetchMovies: fetchMovies}) (List); 


export default connect(state => ({fetchMovies: fetchMovies})) (List); 