var StateTree = require('../data/stateTree.js');
var GalleryCursor = StateTree.select('gallery');

var GalleryActions = {
	isVideoActive: function(Bool) {
		GalleryCursor.set('isVideoActive', Bool);
	},
	setCurrentSlide: function(num) {
		GalleryCursor.set('currentSlide', num);
		StateTree.commit();
	}
}

module.exports = GalleryActions;