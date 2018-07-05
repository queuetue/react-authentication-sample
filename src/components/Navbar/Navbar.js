import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {

    return(
    <ul className="menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/todo">Todo List</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>)
  }
}

export default Navbar;
