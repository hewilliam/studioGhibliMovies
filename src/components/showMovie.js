import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie } from '../actions'

class ShowMovie extends Component {
    componentDidMount() {
        const id = this.props.match.params;
        console.log('id1', id)
        this.props.fetchMovie(id.id);
    }

    render() {
        const { list } = this.props;


        if(!list) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/" className="btn btn-secondary">Back To Movie List</Link>
                <h3>{list.title}</h3>
            </div>
        )
    }
}

function mapStateToProps({ list }, ownProps) { //ownProps is the same as this.props
    console.log("id", ownProps.match.params.id)
    console.log("list", list)
    
    return { list: list[ownProps.match.params.id] } //only returns ONE movie
}

export default connect(mapStateToProps, { fetchMovie: fetchMovie })(ShowMovie)