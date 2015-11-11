var React = require('react'),
    classNames = require('classnames'),
    mixin = require('baobab-react/mixins').branch;

var BookingDownload = require('./BookingDownload.react.js');

var BookingActions = require('../../../actions/BookingActions.js');



var BookingWrapper = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        isDesktop: ['resize', 'isDesktop'],
        isTablet: ['resize', 'isTablet'],
        isMobile: ['resize', 'isMobile'],
        windowW: ['resize', 'currentWidth'],
        bookingIsActive: ['booking', 'bookingIsActive']
    },


    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    componentDidMount: function() {
        this.updateWrapHeight();
    },
    componentDidUpdate: function() {
        this.updateWrapHeight();
    },

    updateWrapHeight: function() {
        var bookingWrap = React.findDOMNode(this.refs.booking),
            bookingWrapHeight = bookingWrap.clientHeight;

        BookingActions.updateInfoHeight(bookingWrapHeight);
    },

    renderPriceList: function() {
        return this.props.priceList.map((item) => {

            var styles = {
                color: null,
                borderBottom: null
            }

            if (item.price >= 800) {
                styles.color = '#b192d7'
                styles.borderBottom = '2px solid #b192d7'
            } else if (item.price < 800 && item.price >= 700) {
                styles.color = '#929ed7'
                styles.borderBottom = '2px solid #929ed7'
            } else if (item.price < 700 && item.price >= 600) {
                styles.color = '#6b8fbc'
                styles.borderBottom = '2px solid #6b8fbc'
            } else if (item.price < 600 && item.price >= 500) {
                styles.color = '#78b6da'
                styles.borderBottom = '2px solid #78b6da'
            } else if (item.price < 500 && item.price >= 400) {
                styles.color = '#92d6d7'
                styles.borderBottom = '2px solid #92d6d7'
            }
            if (this.state.isDesktop) {
                return (
                    <li><span className="prices" style={styles}>{"£" + item.price}</span><span className="dates"><p>{item.date}</p></span></li>
                )                
            } else {
                return (
                    <li><span className="prices" style={styles}>{"£" + item.price}</span><br/><span className="dates"><p>{item.date}</p></span></li>
                )                  
            }


        })
    },
    render : function() {
        return (
            <section id='booking'>
                <div id="bookingRow1">
                    <h1 className="section-title">Booking</h1>
                    <div id="booking-info" className="multi-col"  ref="booking">
                        <p>Please see below for prices of the dates when you are interested in staying.<br/>The house is primarily set up for weekly rentals from Saturday - Saturday but occasionally weekend allocations can be made available upon request.<br/>Please also note the Terms and Conditions here for rental of the property.</p>
                    </div>
                    <BookingDownload />
                </div>
                <div id="bookingRow2">
                    <h1><span>Weekly Rates</span></h1>
                    <ul id="price-list">
                        {this.renderPriceList()}
                    </ul>
                </div>
            </section>
        )
    }

})

module.exports = BookingWrapper;