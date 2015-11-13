var StateTree = require('../data/stateTree.js');
var GeneralCursor = StateTree.select('loading');


var LoadingActions = {
	isNowLoaded: function() {
		GeneralCursor.set('isPreloaded', true)
		StateTree.commit();
	}
}


module.exports = LoadingActions;