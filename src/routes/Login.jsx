import React from 'react';
import auth from  '../auth/auth.js';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

const Login = withRouter(
  React.createClass({

    getInitialState() {
      return {
        error: false
      }
    },

    handleSubmit(e) {
      e.preventDefault()
      const email = this.refs.email.value
      const pass = this.refs.pass.value
      auth.login(email, pass, (loggedIn) => {
        if (!loggedIn){
          return this.setState({ error: true })
        }
        
        const { location } = this.props
        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace('/')
        }
      })
    },

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label><input ref="email" placeholder="email"/></label>
          <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />

          <button type="submit">login</button>
          {this.state.error && (
            <p>Bad login information</p>
          )}
        </form>
      )
    }
  })
  );

export default Login;








