var React = require('react'),
    classNames = require('classnames'),
    mixin = require('baobab-react/mixins').branch;

var BookingActions = require('../../../actions/BookingActions.js');

var $window = $(window);

var BookingOrContact = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        isMobile: ['resize', 'isMobile'],
        bookingIsActive: ['booking', 'bookingIsActive'],
        contactTop: ['booking', 'contactOffsetTop']
    },


    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    handleBookingClick: function() {  
        BookingActions.isBookingActive(true);
        $window.scrollTop(0)
    },
    handleContactClick: function() {
        BookingActions.isBookingActive(false);
        $window.scrollTop(this.state.contactTop);
    },

    getStyle:function() {
        var style = {
            display: null
        }

        if (!this.state.isMobile) {
            style.display = 'block'
        } else {
            style.display = 'none'
        }
        return style
    },

    render : function() {
        return (
            <nav id='booking-contact-buttons' className="multi-col" style={this.getStyle()}>
                <ul>
                    <li className={classNames({active: this.state.bookingIsActive})} onClick={this.handleBookingClick}>Booking</li>
                    <li className={classNames({active: !this.state.bookingIsActive})} onClick={this.handleContactClick}>Contact</li>
                </ul>
            </nav>
        )
    }

})

module.exports = BookingOrContact;