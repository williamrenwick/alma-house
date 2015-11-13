var React = require('react');

var mixin = require('baobab-react/mixins').branch;


var Loader = React.createClass({
	mixins: [mixin], 
	cursors: {
		isPreloaded: ['loading', 'isPreloaded']
	},

	render: function() {
		return (
			<div id="loader">
				<div id="wavey-loader">
					<div id="waves">
						<svg x="0px" y="0px" width="100px" height="48px" viewBox="0 0 100 48" enable-background="new 0 0 100 48">
						<g>
							<path fill="none" stroke="#F7F7F5" strokeWidth="3" strokeMiterlimit="10" d="M0,1.5c12.5,0,12.5,6,25,6c12.5,0,12.5-6,25-6
								c12.5,0,12.5,6,25,6s12.5-6,25-6"/>
							<path fill="none" stroke="#F7F7F5" strokeWidth="3" strokeMiterlimit="10" d="M0,14.5c12.5,0,12.5,6,25,6c12.5,0,12.5-6,25-6
								c12.5,0,12.5,6,25,6s12.5-6,25-6"/>
							<path fill="none" stroke="#F7F7F5" strokeWidth="3" strokeMiterlimit="10" d="M0,27.5c12.5,0,12.5,6,25,6c12.5,0,12.5-6,25-6
								c12.5,0,12.5,6,25,6s12.5-6,25-6"/>
							<path fill="none" stroke="#F7F7F5" strokeWidth="3" strokeMiterlimit="10" d="M0,40.5c12.5,0,12.5,6,25,6c12.5,0,12.5-6,25-6
								c12.5,0,12.5,6,25,6s12.5-6,25-6"/>
						</g>
						</svg>

					</div>
				</div>
			</div>
		)
	}
});

module.exports = Loader;