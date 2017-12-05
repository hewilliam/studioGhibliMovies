import { combineReducers } from 'redux';
import ListReducer from './listReducer';

const rootReducer = combineReducers({
  list: ListReducer
});

export default rootReducer;
