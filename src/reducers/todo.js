import {
  TODO_ADD,
  TODO_TOGGLE,
  TODO_SET_VISIBILITY_FILTER,
  TodoVisibilityFilters,
} from '../actions/todo'

const { TODO_VISIBILITY_SHOW_ALL } = TodoVisibilityFilters;

function todoVisibilityFilter(state = TODO_VISIBILITY_SHOW_ALL, action) {
  switch (action.type) {
    case TODO_SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TODO_TOGGLE:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

export {todos, todoVisibilityFilter}
