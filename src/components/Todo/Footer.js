import React from 'react'
import FilterLink from '../../containers/Todo/FilterLink'
import { TodoVisibilityFilters } from '../../actions/todo'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={TodoVisibilityFilters.TODO_VISIBILITY_SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={TodoVisibilityFilters.TODO_VISIBILITY_SHOW_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={TodoVisibilityFilters.TODO_VISIBILITY_SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
