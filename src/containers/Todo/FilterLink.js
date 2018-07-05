import { connect } from 'react-redux';
import { todoSetVisibilityFilter } from '../../actions/todo';
import Link from '../../components/Todo/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.todoVisibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(todoSetVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
