/*
 * action types
 */

export const TODO_ADD = 'TODO_ADD'
export const TODO_REMOVE = 'TODO_REMOVE'
export const TODO_TOGGLE = 'TODO_TOGGLE'
export const TODO_SET_VISIBILITY_FILTER = 'TODO_SET_VISIBILITY_FILTER'

/*
* other constants
*/

export const TodoVisibilityFilters = {
  TODO_VISIBILITY_SHOW_ALL: 'TODO_VISIBILITY_SHOW_ALL',
  TODO_VISIBILITY_SHOW_COMPLETED: 'TODO_VISIBILITY_SHOW_COMPLETED',
  TODO_VISIBILITY_SHOW_ACTIVE: 'TODO_VISIBILITY_SHOW_ACTIVE'
}

/*
* action creators
*/

export function todoAdd(text) {
  return { type: TODO_ADD, text }
}

export function todoToggle(index) {
  return { type: TODO_TOGGLE, index }
}

export function todoSetVisibilityFilter(filter) {
  return { type: TODO_SET_VISIBILITY_FILTER, filter }
}
