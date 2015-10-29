var React = require('react');
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require("../components/app.react.js");
var Homepage = require('../components/pages/Homepage/Homepage.react.js');
var TheHouse = require('../components/pages/House/House.react.js');
var Booking = require('../components/pages/Booking/Booking.react.js');

module.exports = (
  <Route handler={App}>
  	<DefaultRoute name="home" handler={Homepage} />
  	<Route name="the-house" handler={TheHouse}/>
  	<Route name="booking" handler={Booking}/>
  </Route>
);