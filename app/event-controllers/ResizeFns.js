var ResizeActions = require('../actions/ResizeActions.js');
var StateTree = require('../data/stateTree.js');
var debounce = require('lodash.debounce');

var $window = $(window),
	$doc = $(document); 

function checkForChrome() {
	var isChromium = window.chrome,
	    vendorName = window.navigator.vendor,
	    isOpera = window.navigator.userAgent.indexOf("OPR") > -1,
	    isIEedge = window.navigator.userAgent.indexOf("Edge") > -1;

	if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
	   // is Google chrome 
	   return true
	} else { 
	   // not Google chrome 
	   return false
	}	
}


var resizeFn = debounce(function() {
	var isChrome = checkForChrome(),
		widthCalc = function() {
			if (isChrome == true) {
				return window.outerWidth
			} else {
				return $window.width()
			}
		},
		windowW = widthCalc(),
		windowH = $window.height(),
		docH = $doc.height();

	ResizeActions.updateWindowDimensions(windowW, windowH, docH)

	if (windowW > 1024) {
		ResizeActions.isDesktop(true);
		ResizeActions.isTablet(false);
		ResizeActions.isMobile(false);
	} else if (windowW <= 1024 && windowW > 768) {
		ResizeActions.isDesktop(false);
		ResizeActions.isTablet(true);
		ResizeActions.isMobile(false);
	} else if (windowW <= 768) {
		ResizeActions.isDesktop(false);
		ResizeActions.isTablet(false);
		ResizeActions.isMobile(true);
	}

	console.log(isChrome, windowW, $('body').outerWidth());

}, 50);


var init = function() {
	resizeFn();
	$window.on('resize', resizeFn);
}


module.exports = {
	init: init
};