var React = require('react');

var NextPage = require('../../common/NextPage.react.js'),
    MobileSubMenu = require('../../common/MobileSubMenu.react.js'),
    GallerySlideShow = require('./GallerySlideShow.react.js'),
    GalleryMain = require('./GalleryMain.react.js'),
    VideoPlayer = require('./VideoPlayer.react.js');

var mixin = require('baobab-react/mixins').branch;

var RouteActions = require('../../../actions/RouteActions.js'),
    GalleryActions = require('../../../actions/GalleryActions.js');

var PHOTOS = require('../../../data/photoList.js').galleryPhotos;

var Gallery = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        windowH: ['resize', 'currentHeight'],
        isMobile: ['resize', 'isMobile'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking'],
        isVideoActive: ['gallery', 'isVideoActive'],
        isSliderActive: ['gallery', 'isSliderActive'],
        menuIsOpen: ['menu', 'isOpen']
    },

    componentWillMount : function() {
        RouteActions.isInGallery();
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    handleClose: function() {
        GalleryActions.isSliderActive(false);
    },

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
    wrapStyle: function() {
        var style = {
            height: null
        }

        if (!this.state.isMobile) {
            style.height = (this.state.windowH - 136) + 'px';
        } else {
            style.height = (this.state.windowH - 50) + 'px';
        }

        return style
    },

    renderMobileElems: function() {
        if (this.state.isMobile) {
            return (
                <MobileSubMenu />
            )
        }
    },
    render : function() {
        if (!this.state.isVideoActive && !this.state.isSliderActive) {
            return (
                <div id='gallery-wrap'>
                    {this.renderMobileElems()}
                    <GalleryMain photos={PHOTOS}/>
                    }
                </div>
            )
        } else if (this.state.isSliderActive) {
            return (
                <div id='gallery-wrap' style={this.wrapStyle()}>
                    {this.renderMobileElems()}
                    <div id="close-button" onClick={this.handleClose}>
                        <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
                            <circle className="circle" fill="none" stroke="#4587e9" strokeWidth="2" strokeMiterlimit="10" cx="16" cy="16" r="15"/>
                            <line fill="none" stroke="#4587e9" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" x1="11" y1="11" x2="21" y2="21"/>
                            <line fill="none" stroke="#4587e9" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" x1="21" y1="11" x2="11" y2="21"/>
                        </svg>
                    </div>
                    <GallerySlideShow photos={PHOTOS}/>
                </div>
            )
        } else {
            return (
                <div id='gallery-wrap' style={{height: '100%'}}>
                    <VideoPlayer />
                </div>
            )
        }
    }

})

module.exports = Gallery; 