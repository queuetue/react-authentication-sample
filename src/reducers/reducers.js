import { combineReducers } from 'redux';
import { auth } from './auth';
import { todos, todoVisibilityFilter } from './todo';

const reducer = combineReducers({
  todoVisibilityFilter,
  todos,
  auth
})

export default reducer
