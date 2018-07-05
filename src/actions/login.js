/*
 * action types
 */

export const LOGIN_START_TOKEN_VALIDATION = 'LOGIN_START_TOKEN_VALIDATION'
export const LOGIN_START_VALIDATION = 'LOGIN_START_VALIDATION'
export const LOGIN_FAIL_VALIDATION = 'LOGIN_FAIL_VALIDATION'
export const LOGIN_PASS_VALIDATION = 'LOGIN_PASS_VALIDATION'
export const LOGIN_LOGOUT = 'LOGIN_LOGOUT'
export const LOGIN_START_LOGOUT = 'LOGIN_START_LOGOUT'

/*
* other constants
*/

export const LOGIN_NON_AUTHORIZED_DATA = {authorized:false, token:'', user:{}};

/*
* action creators
*/

export function loginStartValidation(service, token) {
  return { type: LOGIN_START_VALIDATION, service, token }
}

export function loginPassValidation(token, json) {
  console.log("PASS")
  return {
    type: LOGIN_PASS_VALIDATION,
    token,
    auth: {authenticated:true, user:json.data, token:token},
    receivedAt: Date.now()
  }
}

export function loginFailValidation(token, error) {
  return {
    type: LOGIN_FAIL_VALIDATION,
    token,
    auth: {authenticated: false, user:null, token:null, error:error}
  }
}

export function loginStartLogout(token) {
  return { type: LOGIN_START_LOGOUT, token}
}

export function loginLogout(token) {
  return { type: LOGIN_LOGOUT, token}
}
