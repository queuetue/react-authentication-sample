import React, { Component } from 'react';
import Footer from '../components/Todo/Footer'
import AddTodo from '../containers/Todo/AddTodo'
import VisibleTodoList from '../containers/Todo/VisibleTodoList'

class TodoApp extends Component {
  render(){
    return(
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default TodoApp;
