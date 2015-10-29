var StateTree = require('../data/stateTree.js');
var MenuCursor = StateTree.select('menu');

var BookingActions = {
	isOpen: function(Bool) {
		MenuCursor.set('isOpen', Bool);
	}
}

module.exports = BookingActions;