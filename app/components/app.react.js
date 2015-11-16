var React = require('react');
var styles = require('../main.css');

var AppContents = require('./AppContents.react.js');

var photosForPreload = require('../data/photoList.js').allPhotoUrls;

var rootMixin = require('baobab-react/mixins').root;
var mixin = require('baobab-react/mixins').branch;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Resize = require('../event-controllers/ResizeFns.js');
var Scroll = require('../event-controllers/ScrollFns.js');
var LoadingActions = require('../actions/LoadingActions.js')


function preloader() {
	var images = new Array();

	function preload(preloadArr) {
		var preloadArr = preloadArr;

		for (var i = 0; i < preloadArr.length; i++) {
			images[i] = new Image()
			images[i].src = preloadArr[i]
		}
	}
	preload(photosForPreload);
}

var App = React.createClass({
	mixins: [rootMixin], 
	cursors: {
		menuIsOpen: ['menu', 'isOpen'],
		isPreloaded: ['loading', 'isPreloaded']
	},
	componentWillMount: function() {
		Resize.init();
		Scroll.init();
	},

	componentDidMount: function() {
		//preloader();
		setTimeout(LoadingActions.isNowLoaded, 4000)
	},

	render: function() {
		return (
			<AppContents {...this.props}/>
		)
	
	}
});

module.exports = App;