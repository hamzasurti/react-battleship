import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import hits from './hits';


const todoApp = combineReducers({
  todos,
  visibilityFilter,
  hits,
});

export default todoApp;
