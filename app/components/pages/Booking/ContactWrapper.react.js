var React = require('react'),
    classNames = require('classnames'),
    mixin = require('baobab-react/mixins').branch;

import {GoogleMap, Marker} from "react-google-maps";

var BookingActions = require('../../../actions/BookingActions.js');


var ContactWrapper = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        bookingIsActive: ['booking', 'bookingIsActive'],
        windowW: ['resize', 'currentWidth'],
        windowH: ['resize', 'currentHeight'],
        scrollPos: ['scrolling', 'scrollPosition']
    },
    getInitialState: function() {
        return {
            center: {lat: 50.244769, lng: -3.813928}
        }
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    componentDidMount: function() {
        this.amIActive();
    },
    componentDidUpdate: function() {
        this.amIActive();
    },

    amIActive: function() {
        var contactContainer = React.findDOMNode(this.refs.contact),
            contactTop = contactContainer.offsetTop,
            windowMidpoint = this.state.windowH / 2;

        BookingActions.contactOffsetTop(contactTop);

        if (this.state.scrollPos + windowMidpoint >= contactTop) {
            BookingActions.isBookingActive(false);
        } else {
            BookingActions.isBookingActive(true);
        }
    },

    render : function() {
        return (
            <section id='contact' ref="contact">
                <div id="contactRow1">
                    <h1 className="section-title">Contact</h1>
                    <div id="contact-detail-row">
                        <div id="address" className="multi-col">
                            <h1><span>Address</span></h1>
                            <p>Alma House, Luckhams Lane,<br/>Malborough, Devon,<br/>TQ7 3RY </p>
                        </div>
                        <div id="telephone" className="multi-col">
                            <h1><span>Telephone</span></h1>
                            <p>+44 (0)1548 561 691</p>
                        </div>
                    </div>
                    <div id="map-wrap">
                        <div id="map-content">
                            <GoogleMap containerProps={{
                                  style: {
                                    height: "100%",
                                  },
                                }}
                                defaultZoom={9}
                                defaultCenter={{lat: 50.244769, lng: -3.813928}}
                            >
                                <Marker
                                  defaultPosition={this.state.center}/>
                            </GoogleMap>
                        </div>
                    </div>
                </div>                
            </section>
        )
    }

})

module.exports = ContactWrapper;