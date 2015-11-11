var Baobab = require('baobab');

var stateTree = new Baobab({
	general: {
		isNowLoaded: false
	},
	resize: {
		currentWidth: null,
		currentHeight: null,
		currentDocHeight: null,
		isMobile: null,
		isTablet: null,
		isDesktop: null
	},
	menu: {
		isHovering: false,
		isOpen: false
	},
	scrolling: {
		scrollPosition: null
	},
	routes: {
		isInIntro: null,
		isInHouse: null,
		isInGallery: null,
		isInBooking: null
	},
	gallery: {
		currentSlide: null,
		isVideoActive: false
	},
	booking: {
		bookingIsActive: true,
		bookingInfoHeight: null,
		contactOffsetTop: null
	}
})



module.exports = stateTree;