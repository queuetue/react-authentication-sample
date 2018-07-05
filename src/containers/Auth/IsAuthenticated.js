import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

class AuthWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {auth:props.auth};
  }

  static getDerivedStateFromProps(props, state) {
    return(props || {})
  }

  render(){
    if(this.state.auth.authorized){
      return  (
        <Fragment>
          {React.cloneElement(this.props.children, { auth: this.state.auth })}
        </Fragment>
      )
    } else {
      return  ''
    }
  }
}

const VisibleWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWidget)

export default VisibleWidget
