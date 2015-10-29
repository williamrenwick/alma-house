var React = require('react');

var NextPage = require('../../common/NextPage.react.js');
var PageTitle = require('../../common/PageTitle.react.js');
var BookingOrContact = require('./BookingOrContact.react.js');
var ContentWrapper = require('./ContentWrapper.react.js');

var mixin = require('baobab-react/mixins').branch;
var RouteActions = require('../../../actions/RouteActions.js');

var Booking = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isMobile: ['resize', 'isMobile'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking'],
        menuIsOpen: ['menu', 'isOpen']
    },

    componentWillMount : function() {
        RouteActions.isInBooking();
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    getStyle: function() {
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
    render : function() {
        if (!this.state.isMobile) {
            return (
                <div id='booking-wrap'>
                    <div id="main-content-logo"></div>
                    <BookingOrContact />
                    <ContentWrapper />
                    <PageTitle />
                </div>
            )
        } else {
            return (
                <div id='booking-wrap'>
                    <div id="main-content-logo"></div>
                    <div id="sub-menu-bg"></div>
                    <BookingOrContact />
                    <ContentWrapper />
                    <PageTitle />
                </div>
            )            
        }
    }

})

module.exports = Booking; 