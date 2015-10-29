var React = require('react'),
    classNames = require('classnames'),
    mixin = require('baobab-react/mixins').branch;


var BookingDownload = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        bookingInfoHeight: ['booking', 'bookingInfoHeight']
    },


    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        return (
            <div id='booking-download' className="multi-col" style={{height: this.state.bookingInfoHeight}}>
                <div id="download-innerwrap">
                    <h1>Booking Form</h1>
                    <div id="download-button">
                        Download
                    </div>
                </div>
            </div>
        )
    }

})

module.exports = BookingDownload;