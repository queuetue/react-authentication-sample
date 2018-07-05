import { connect } from 'react-redux';
import { loginStartLogout } from '../../actions/login';
import AuthWidget from '../../components/Auth/LogoutWidget';

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogOutClick: (token) => {
      dispatch(loginStartLogout(token))
    },
  }
}

const VisibleWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWidget)

export default VisibleWidget
