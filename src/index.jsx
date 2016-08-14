import React from 'react'; 
import ReactDOM from 'react-dom'; 

import { Router } from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler, browserHistory } from 'react-router';

import LoginHandler from './routes/Login.jsx';
import LogoutHandler from './routes/Logout.jsx';
import Foo from './routes/Foo.jsx';
import Bar from './routes/Bar.jsx';
import auth from './auth/auth'

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },
  render() {
    return( 
      <div>
        <h1>Routes</h1>
        <ul>
        <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/foo">Foo</Link></li>
          <li><Link to="/bar">Bar</Link></li>
        </ul>
          <div>
          {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
          </div>
      </div>
    )
  } 
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/login" component={LoginHandler}></Route>
    <Route path="/logout" component={LogoutHandler} />
    <Route path="/" component={App} onEnter={requireAuth}>
      <Route path="/foo" component={Foo}></Route>
      <Route path="/bar" component={Bar}></Route>
    </Route>
  </Router>
), document.getElementById('app'));