import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Router } from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler, hashHistory } from 'react-router';
import LoginHandler from './components/Login.jsx';


const Hello = React.createClass({
  render() {
   return(
     <h1>Hello, Taylor!</h1>
   ) 
  }
});
const App = React.createClass({
  render() {
    return( 
      <div>
        <Hello name='Router'/>
        ABCDE
      </div>
    )
  } 
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
     
    </Route>
  </Router>
), document.getElementById('app'));