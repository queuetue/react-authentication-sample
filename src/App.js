import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import cookie from 'react-cookies';
import UserNavbar from './components/ui/navbar_user';
import AnonymousNavbar from './components/ui/navbar_user';


import './App.css';

class App extends Component {

  constructor() {
    super();
    let token = cookie.load('_atf_token');
    this.state = { isAuthenticated: false, user: null, token: null};
    if (token) {
      const options = {
        method: 'POST',
        body: '',
        mode: 'cors',
        cache: 'default'
      };
      fetch('http://192.168.0.147:4000/api/v1/auth/token/' + token, options).then(r => {
        r.json().then(payload => {
          if (payload.user) {
            this.setState({ isAuthenticated: true, user: payload.user, token: payload.token});
            cookie.save('_atf_token', payload.token, { path: '/' })
          }
        });
      })
    }

    }

  logout = () => {
    const options = {
      method: 'POST',
      body: '',
      mode: 'cors',
      cache: 'default'
    };
    fetch('http://192.168.0.147:4000/api/v1/auth/logout/' + cookie.load('_atf_token'), options).then(r => {
      r.json().then(payload => {
        this.setState({isAuthenticated: false, token: '', user: null})
        cookie.remove('_atf_token')
      });
    })
  };

  twitterResponse = (e) => {};

  facebookResponse = (response) => {

    const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
    const options = {
        method: 'POST',
        body: tokenBlob,
        mode: 'cors',
        cache: 'default'
    };

    fetch('http://192.168.0.147:4000/api/v1/auth/facebook', options).then(r => {
        r.json().then(payload => {
          if (payload.user) {
            this.setState({isAuthenticated: true, user: payload.user, token: payload.token})
            cookie.save('_atf_token', payload.token, { path: '/' })
          }
        });
    })

  };

  googleResponse = (e) => {};
  onFailure = (error) => {
    alert(error);
  }

  render() {
    let content = !!this.state.isAuthenticated ?
        (
            <div>
                <p>Authenticated</p>
                <div>
                    {this.state.user.email}
                </div>
                <div>
                    <button onClick={this.logout} className="button">
                        Log out
                    </button>
                </div>
            </div>
        ) :
        (
            <div>
                <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                    onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
                    requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
                <FacebookLogin
                    appId="623106321225566"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.facebookResponse} />
                <GoogleLogin
                    clientId="334152309377-9900pfb46fo5efr16jljl9evif7vc5ac.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.googleResponse}
                    onFailure={this.googleResponse}
                />
            </div>
        );

    return (
        <div className="App">
            {content}
        </div>
    );
  }
}

export default App;
