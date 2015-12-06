 export default function() {
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
};

