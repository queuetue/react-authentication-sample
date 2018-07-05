import {
  LOGIN_FAIL_VALIDATION,
  LOGIN_PASS_VALIDATION,
  LOGIN_LOGOUT,
  LOGIN_NON_AUTHORIZED_DATA,
} from '../actions/login'

function auth(state = LOGIN_NON_AUTHORIZED_DATA, action){
  switch (action.type) {
      case LOGIN_PASS_VALIDATION:
        return({authorized:true, token:action.data.token, user:action.data.user})
      case LOGIN_FAIL_VALIDATION:
        return(LOGIN_NON_AUTHORIZED_DATA)
      case LOGIN_LOGOUT:
        return(LOGIN_NON_AUTHORIZED_DATA)
      default:
        return state
  }
}

export {auth}
