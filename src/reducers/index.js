import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import hits from './hits';


const todoApp = combineReducers({
  todos,
  visibilityFilter,
  hits,
});

// const combineReducers = combineReducers({
// });

export default todoApp;

// export default battleShipReducers;
