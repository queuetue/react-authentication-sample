import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookVisibleAuthWidget from '../containers/Auth/FacebookVisibleAuthWidget'
import VisibleLogoutWidget from '../containers/Auth/VisibleLogoutWidget'
import IsAuthenticated from '../containers/Auth/IsAuthenticated'
import IsUnauthenticated from '../containers/Auth/IsUnauthenticated'

const mapStateToProps = state => {
  return state || {}
}

const mapDispatchToProps = dispatch => {
  return {}
}


class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {auth:props.auth};
  }

  static getDerivedStateFromProps(props, state) {
    return(props || {})
  }

  render(){
    return(
      <div>
        <IsAuthenticated>
          <h1>You are logged in.</h1>
        </IsAuthenticated>
        <IsUnauthenticated>
          <h1>Login here</h1>
        </IsUnauthenticated>
        <ul>
          <li><VisibleLogoutWidget /></li>
        </ul>
        <ul>
          <li><FacebookVisibleAuthWidget /></li>
        </ul>
      </div>
    )
  }
}

const VisiblePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default VisiblePage;
