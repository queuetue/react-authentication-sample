import request from 'superagent'
import {
  LOGIN_START_VALIDATION,
  LOGIN_PASS_VALIDATION,
  LOGIN_FAIL_VALIDATION,
  LOGIN_START_LOGOUT,
  LOGIN_LOGOUT
} from '../actions/login'

const loginService = store => next => action => {
  next(action)
  switch (action.type) {
    case LOGIN_START_VALIDATION:
      if (process.env.REACT_APP_BACKEND_SERVER_AUTH === undefined) {
        const data = {authorized:true, token:action.token, user:{name:'bob',email:'test@example.com'}}
        return next({
          type: LOGIN_PASS_VALIDATION,
          data
        })
      }
      switch (action.service) {
      case 'token':
      request
        .post(`${process.env.REACT_APP_BACKEND_SERVER_AUTH}/api/v1/auth/token`)
        .send({access_token: action.token})
        .end((err, res) => {
        if (err) {
          return next({
            type: LOGIN_FAIL_VALIDATION,
            err
          })
        }
        const data = JSON.parse(res.text)
        next({
          type: LOGIN_PASS_VALIDATION,
          data
        })
      })
      break
      case 'facebook':
        request
          .post(`${process.env.REACT_APP_BACKEND_SERVER_AUTH}/api/v1/auth/facebook`)
          .send({access_token: action.token})
          .end((err, res) => {
          if (err) {
            return next({
              type: LOGIN_FAIL_VALIDATION,
              err
            })
          }
          const data = JSON.parse(res.text)
          next({
            type: LOGIN_PASS_VALIDATION,
            data
          })
        })
        break
      default:
        break
      }
      break
    case LOGIN_START_LOGOUT:
      if (process.env.REACT_APP_BACKEND_SERVER_AUTH !== undefined) {
        request
        .post(`${process.env.REACT_APP_BACKEND_SERVER_AUTH}/api/v1/auth/logout`)
        .send({access_token: action.token})
        .end()
      }
      return next({
        type: LOGIN_LOGOUT
      })
    default:
      break
  }
}

export default loginService
