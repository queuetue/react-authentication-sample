import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { ConnectedRouter} from 'connected-react-router'
import { Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import TodoPage from './pages/TodoPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import './normalize.css';
import './App.css';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <div className="wrapper">
            <div className="box logo">React Authentication Test</div>
            <div className="box navbar"><Navbar /></div>
            <div className="box sidebar">Sidebar</div>
            <div className="box content">
              <Switch>
                <Route exact path="/" render={() => (<div><HomePage /></div>)} />
                <Route exact path="/todo" render={() => (<div><TodoPage /></div>)} />
                <Route exact path="/login" render={() => (<div><LoginPage /></div>)} />
                <Route render={() => (<div>Content</div>)} />
              </Switch>
            </div>
            <div className="box footer">Footer</div>
          </div>
        </ConnectedRouter>
      </div>
    );
  }
}

export default App;
