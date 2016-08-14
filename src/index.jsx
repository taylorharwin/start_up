import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Router } from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler, hashHistory } from 'react-router';
import LoginHandler from './components/Login.jsx';
import Foo from './routes/Foo.jsx';
import Bar from './routes/Bar.jsx';


const App = React.createClass({
  render() {
    return( 
      <div>
        <h1>Routes</h1>
        <ul>
          <li><Link to="/foo">Foo</Link></li>
          <li><Link to="/bar">Bar</Link></li>
        </ul>
          <div>
          {this.props.children}
          </div>
      </div>
    )
  } 
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/login" component={LoginHandler}></Route>
    <Route path="/" component={App}>
      <Route path="/foo" component={Foo}></Route>
      <Route path="/bar" component={Bar}></Route>
    </Route>
  </Router>
), document.getElementById('app'));