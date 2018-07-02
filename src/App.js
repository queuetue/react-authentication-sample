import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: ''};
  }

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
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
        const token = r.headers.get('x-auth-token');
        console.log("1 got response", r, token);
        r.json().then(user => {
          if (token) {
                this.setState({isAuthenticated: true, user, token})
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
