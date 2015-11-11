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
        if (!this.state.isVideoActive && !this.state.isMobile) {
            return (
                <div id='gallery-wrap'>
                    <GallerySlideShow photos={PHOTOS}/>
                </div>
            )
        } else if (!this.state.isVideoActive && this.state.isMobile) {
            return (
                <div id='gallery-wrap'>
                    <div id="main-content-logo" style={this.getLogoStyle()}></div>
                    <PageTitle />
                    <GallerySlideShow photos={PHOTOS}/>
                </div>
            )
        } else if (this.state.isVideoActive && !this.state.isMobile) {
            return (
                <div id='gallery-wrap'>
                    <VideoPlayer />
                </div>
            )
        } else if (this.state.isVideoActive && this.state.isMobile) {
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