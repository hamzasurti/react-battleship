import { combineReducers } from 'redux';
import boardElements from './boardElements';


const todoApp = combineReducers({
  boardElements,
});

export default todoApp;
