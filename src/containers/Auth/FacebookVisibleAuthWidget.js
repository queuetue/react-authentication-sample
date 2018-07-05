import { connect } from 'react-redux';
import { loginStartValidation, loginStartLogout } from '../../actions/login';
import AuthWidget from '../../components/Auth/FacebookAuthWidget';

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogInClick: token => {
      dispatch(loginStartValidation('facebook',token))
    },
    onLogOutClick: token => {
      dispatch(loginStartLogout(token))
    },
  }
}

const VisibleWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWidget)

export default VisibleWidget
