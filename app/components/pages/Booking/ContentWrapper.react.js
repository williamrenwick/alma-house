var React = require('react'),
    classNames = require('classnames'),
    mixin = require('baobab-react/mixins').branch;

var PriceList = require('../../../data/priceList.js');

var BookingWrapper = require('./BookingWrapper.react.js'),
    ContactWrapper = require('./ContactWrapper.react.js');


var ContentWrapper = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        bookingIsActive: ['booking', 'bookingIsActive']
    },


    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        return (
            <article id='content-wrapper' className="multi-col">
                <BookingWrapper priceList={PriceList}/>
                <ContactWrapper />
            </article>
        )
    }

})

module.exports = ContentWrapper;