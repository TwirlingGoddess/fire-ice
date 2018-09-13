import { combineReducers } from 'redux';
import { housesReducer } from './housesReducer';
import { membersReducer } from './membersReducer';

const rootReducer = combineReducers({
  houses: housesReducer,
  members: membersReducer
});


export default rootReducer;
