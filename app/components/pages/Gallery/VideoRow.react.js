var React = require('react');

var mixin = require('baobab-react/mixins').branch;
var GalleryActions = require('../../../actions/GalleryActions.js')

var VideoRow = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isMobile: ['resize', 'isMobile'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking'],
        isVideoActive: ['gallery', 'isVideoActive'],
        menuIsOpen: ['menu', 'isOpen']
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    handlePlay: function() {
        GalleryActions.isVideoActive(true);
    },

    render : function() {
        return (
            <section id="video-row">    
                <h1>Video</h1>
                <div id="video-image">
                    <div className="content" style={{backgroundImage: 'url(img/gallery/full/alma-img-30.jpg)'}}>
                        <div id='play-button' onClick={this.handlePlay}>
                            <svg x="0px" y="0px" width="95px" height="95px" viewBox="0 0 95 95" enable-background="new 0 0 95 95">
                            <polyline fill="none" className="triangle" stroke="#f7f7f5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="
                                39.6,31.6 67.1,47.5 33.9,66.7 33.9,28.3 "/>
                            <circle fill="none" className="circle" stroke="#f7f7f5" strokeWidth="3" strokeMiterlimit="10" cx="47.5" cy="47.5" r="46"/>
                            </svg>

                        </div>
                    </div>
                </div>
            </section>
        )
    }

})

module.exports = VideoRow; 