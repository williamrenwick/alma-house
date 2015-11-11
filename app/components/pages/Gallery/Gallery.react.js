var React = require('react');

var NextPage = require('../../common/NextPage.react.js');
var PageTitle = require('../../common/PageTitle.react.js');
var GallerySlideShow = require('./GallerySlideShow.react.js');
var VideoPlayer = require('./VideoPlayer.react.js');

var mixin = require('baobab-react/mixins').branch;
var RouteActions = require('../../../actions/RouteActions.js');

var PHOTOS = require('../../../data/photoList.js');

var Gallery = React.createClass({

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

    componentWillMount : function() {
        RouteActions.isInGallery();
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    getLogoStyle: function() {
        var style = {
            zIndex: null
        }

        if (this.state.isVideoActive && !this.state.isMobile) {
            style.zIndex = '-1'
        } else {
            style.zIndex = '102'
        }

        return style
    },

    render : function() {
        if (!this.state.isVideoActive) {
            return (
                <div id='gallery-wrap'>
                    <div id="main-content-logo"></div>
                    <PageTitle />
                    <GallerySlideShow photos={PHOTOS}/>
                </div>
            )
        } else {
            return (
                <div id='gallery-wrap'>
                    <div id="main-content-logo" style={this.getLogoStyle()}></div>
                    <PageTitle />
                    <VideoPlayer />
                </div>
            )

        }
    }

})

module.exports = Gallery; 