import _ from 'lodash';
import { FETCH_MOVIES, FETCH_MOVIE } from '../actions';


export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_MOVIE:
            const movie = action.payload.data;
            console.log('movie', movie)
            const newState = {...state}
            newState[movie.id] = movie
            return newState;
        case FETCH_MOVIES: 
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}