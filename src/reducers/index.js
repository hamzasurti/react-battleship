import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import boardElements from './boardElements';


const todoApp = combineReducers({
  todos,
  visibilityFilter,
  boardElements,
});

export default todoApp;
