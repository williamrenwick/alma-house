var StateTree = require('../data/stateTree.js');
var ScrollCursor = StateTree.select('scrolling');


var scrollingActions = {
	scrollPosUpdate: function(livePosition) {
		ScrollCursor.set('scrollPosition', livePosition)
		//StateTree.commit();
	},
	isScrolling: function(bool) {
		ScrollCursor.set('isScrolling', bool);
		StateTree.commit();
	}
}


module.exports = scrollingActions;