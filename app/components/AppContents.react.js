var React = require('react');

var MenuBar = require('./common/MenuBar.react.js');
var MenuOpen = require('./common/MainMenuWrap.react.js');
var Loader = require('./common/Loader.react.js')

var mixin = require('baobab-react/mixins').branch;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var LoadingActions = require('../actions/LoadingActions.js')


var AppContents = React.createClass({
	mixins: [mixin], 
	cursors: {
		menuIsOpen: ['menu', 'isOpen'],
		isPreloaded: ['loading', 'isPreloaded']
	},

	render: function() {
		if (!this.state.isPreloaded) {
			return (
				<div id="reactWrap">
					<Loader />
				</div>
			)
		} else {
			return (
				<div id="reactWrap">
					<MenuBar {...this.props} />
					<MenuOpen />
					<RouteHandler {...this.props} />
				</div>
			)			
		}

	}
});

module.exports = AppContents;