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
                <a href="downloadables/AlmaHouse-Booking form.docx" download>
                    <div id="download-innerwrap">
                        <div id="booking-icon">
                            <svg x="0px" y="0px" width="49px" height="24px" viewBox="0 0 49 24" enable-background="new 0 0 49 24">
                                <rect x="0" y="0" fill="#EFC38D" width="27" height="3"/>
                                <rect x="0" y="7" fill="#EFC38D" width="49" height="3"/>
                                <rect x="0" y="14" fill="#EFC38D" width="33" height="3"/>
                                <rect x="0" y="21" fill="#EFC38D" width="24" height="3"/>
                                <rect x="30" y="0" fill="#EFC38D" width="8" height="3"/>
                                <rect x="36" y="14" fill="#EFC38D" width="8" height="3"/>
                            </svg>
                        </div>
                        <h1>Booking Form</h1>
                        <div id="download-button">
                            Download
                        </div>
                    </div>
                </a>
            </div>
        )
    }

})

module.exports = BookingDownload;