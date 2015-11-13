var StateTree = require('../data/stateTree.js');
var GalleryCursor = StateTree.select('gallery');

var GalleryActions = {
	isSliderActive: function(Bool) {
		GalleryCursor.set('isSliderActive', Bool);
	},
	isVideoActive: function(Bool) {
		GalleryCursor.set('isVideoActive', Bool);
	},
	setCurrentSlide: function(num) {
		GalleryCursor.set('currentSlide', num);
		StateTree.commit();
	}
}

module.exports = GalleryActions;