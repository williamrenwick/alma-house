var React = require('react');
var styles = require('../main.css');

var MenuBar = require('./common/MenuBar.react.js');
var MenuOpen = require('./common/MainMenuWrap.react.js');


var rootMixin = require('baobab-react/mixins').root;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Resize = require('../event-controllers/ResizeFns.js');
var Scroll = require('../event-controllers/ScrollFns.js');


var App = React.createClass({
	mixins: [rootMixin], 
	cursors: {
		menuIsOpen: ['menu', 'isOpen']
	},
	componentWillMount: function() {
		Resize.init();
		Scroll.init();
	},
	render: function() {
		return (
			<div id="reactWrap">
				<MenuBar {...this.props} />
				<MenuOpen />
				<RouteHandler {...this.props} />
			</div>
		)
	}
});

module.exports = App;