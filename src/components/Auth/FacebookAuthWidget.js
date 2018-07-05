import React from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import VisibleLogoutWidget from '../../containers/Auth/VisibleLogoutWidget';

const AuthWidget = ({ auth, onLogInClick }) => {
  return auth.authorized ? (
    <VisibleLogoutWidget />
  ) : (
    <FacebookLogin
    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
    autoLoad={false}
    fields="name,email"
    callback={(response)=>{onLogInClick(response.accessToken)}}
    render={renderProps => (
      <a onClick={renderProps.onClick}>Login with Facebook</a>
    )}
    />

  )
}

AuthWidget.propTypes = {
  auth: PropTypes.shape({
      authorized: PropTypes.bool.isRequired,
  }).isRequired,
  onLogInClick: PropTypes.func.isRequired,
  onLogOutClick: PropTypes.func.isRequired
}

export default AuthWidget
