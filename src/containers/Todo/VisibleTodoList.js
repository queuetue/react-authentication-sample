import { connect } from 'react-redux'
import { todoToggle } from '../../actions/todo'
import TodoList from '../../components/Todo/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'TODO_VISIBILITY_SHOW_ALL':
      return todos
    case 'TODO_VISIBILITY_SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'TODO_VISIBILITY_SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.todoVisibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(todoToggle(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
