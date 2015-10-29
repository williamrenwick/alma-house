var StateTree = require('../data/stateTree.js');
var BookingCursor = StateTree.select('booking');

var BookingActions = {
	isBookingActive: function(Bool) {
		BookingCursor.set('bookingIsActive', Bool);
	},
	updateInfoHeight: function(height) {
		BookingCursor.set('bookingInfoHeight', height);
	},
	contactOffsetTop: function(num) {
		BookingCursor.set('contactOffsetTop', num);
	}
}

module.exports = BookingActions;