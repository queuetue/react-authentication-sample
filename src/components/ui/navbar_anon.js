import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

import './navbar_anon.css';

class NavbarAnonymous extends Component {
  render() {
    return(
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
    )
  }
}

export default NavbarAnonymous;
