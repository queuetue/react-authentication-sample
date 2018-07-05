import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AuthWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {auth:props.auth};
  }

  static getDerivedStateFromProps(props, state) {
    return({auth:props.auth})
  }

  render(){
    return (this.state.auth.authorized ? (<a onClick={() => {this.props.onLogOutClick(this.state.auth.token)}}> Log Out {this.state.auth.user.name}</a>) : "Not Logged In")
  }
}

AuthWidget.propTypes = {
  auth: PropTypes.shape({
      authorized: PropTypes.bool.isRequired,
      token: PropTypes.string.isRequired,
      user: PropTypes.object.isRequired
  }).isRequired,
  onLogOutClick: PropTypes.func.isRequired
}

export default AuthWidget
