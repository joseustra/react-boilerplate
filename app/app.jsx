var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load foundation
$(document).foundation();

// Load app css
require('style!css!sass!applicationStyles');

// <Route path="/" component={}/>
// <IndexRoute component={}/>

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route> 
  </Router>,
  document.getElementById("app")
);
