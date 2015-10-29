var StateTree = require('../data/stateTree.js');
var RouteCursor = StateTree.select('routes');

var RouteActions = {
	isInIntro: function() {
		RouteCursor.set('isInIntro', true);
		RouteCursor.set('isInHouse', false);
		RouteCursor.set('isInBooking', false);
		StateTree.commit();
	},
	isInHouse: function() {
		RouteCursor.set('isInIntro', false);
		RouteCursor.set('isInHouse', true);
		RouteCursor.set('isInBooking', false);
		StateTree.commit();
	},
	isInBooking: function() {
		RouteCursor.set('isInIntro', false);
		RouteCursor.set('isInHouse', false);
		RouteCursor.set('isInBooking', true);
		StateTree.commit();
	}
}

module.exports = RouteActions;