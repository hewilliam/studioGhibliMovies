import _ from 'lodash';
import { FETCH_MOVIES } from '../actions';


export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_MOVIES: 
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}