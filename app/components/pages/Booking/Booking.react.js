var React = require('react');

var NextPage = require('../../common/NextPage.react.js');
var MobileSubMenu = require('../../common/MobileSubMenu.react.js');
var BookingOrContact = require('./BookingOrContact.react.js');
var ContentWrapper = require('./ContentWrapper.react.js');

var mixin = require('baobab-react/mixins').branch;
var RouteActions = require('../../../actions/RouteActions.js'),
    GalleryActions = require('../../../actions/GalleryActions.js');

var Booking = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isMobile: ['resize', 'isMobile'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking'],
        menuIsOpen: ['menu', 'isOpen'],
        scrollPos: ['scrolling', 'scrollPosition'],
        isSliderActive: ['gallery', 'isSliderActive'],
        isVideoActive: ['gallery', 'isVideoActive']
    },

    componentWillMount : function() {
        RouteActions.isInBooking();
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    componentDidMount: function() {
        if (this.state.isSliderActive) {
            GalleryActions.isSliderActive(false);
        }
        if (this.state.isVideoActive) {
            GalleryActions.isVideoActive(false);
        }
    },

    getLogoStyle: function() {
        var style = {
            opacity: null
        }

        if (this.state.menuIsOpen) {
            style.opacity = '0';
        } else {
            style.opacity = '1';
        }

        return style
    },
    getWrapStyle: function() {
        var style = {
           paddingTop: null
        }

        if (!this.state.isMobile) {
            if (this.state.scrollPos > 0) {
                style.paddingTop = 60 + 136 + 'px';
            } else if (this.state.scrollPos == 0) {
                style.paddingTop = 60;
            }  
        } else {
            style.paddingTop = 105 + 'px';
        }

        return style
    },
    renderMobileElems: function() {
        if (this.state.isMobile) {
            return (
                <MobileSubMenu />
            )
        }
    },

    render : function() {
        return (
            <div id='booking-wrap' style={this.getWrapStyle()}>
                {this.renderMobileElems()}
                <BookingOrContact />
                <ContentWrapper />
            </div>
        )
    }

})

module.exports = Booking; 