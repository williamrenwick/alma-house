var React = require('react');
var classNames = require('classnames');
var Link= require('react-router').Link;

var MenuTopBar = require('./MenuTopBar.react.js');

var mixin = require('baobab-react/mixins').branch;

var MenuActions = require('../../actions/MenuActions.js');
var GalleryActions = require('../../actions/GalleryActions.js');

var DesktopMenuBar = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInGallery: ['routes', 'isInGallery'],
        isInBooking: ['routes', 'isInBooking'],
        menuIsOpen: ['menu', 'isOpen'],
        isVideoActive: ['gallery', 'isVideoActive'],
        scrollPos: ['scrolling', 'scrollPosition']
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    handleLiClick: function() {
        if (this.state.isVideoActive) {
            GalleryActions.isVideoActive(false);
        }
    },

    getLogoStyle: function() {
        var style = {
            backgroundImage: (this.state.isVideoActive) ? 'url(img/logo-white.png)' : 'url(img/logo-black.png)'
        }
        return style
    },
    getMenuBarStyle: function() {
        var style = {
            display: null
        }
        if (this.state.isInIntro) {
            style.display = 'none'
        } else {
            style.display = 'block'
        }
        return style
    },

    getMenuBarClass: function() {
        return {
            scrolled: (this.state.scrollPos > 0 || this.state.isVideoActive) ? true : false,
            dark: (this.state.isVideoActive) ? true : false
        }
    },

    render : function() {
        return (
            <div id='desktop-menu-bar' className={classNames(this.getMenuBarClass())} style={this.getMenuBarStyle()}>
                <MenuTopBar />
                <div id='desktop-menu-row-1'>
                    <div id='desktop-menu-bar-logo' style={this.getLogoStyle()}></div>
                </div>
                <div id="desktop-menu-row-3">
                    <ul id="desktop-menu">
                        <li classNames={classNames({active: this.state.isInHouse})} onClick={this.handleLiClick}><Link to="the-house">The House</Link></li>
                        <li classNames={classNames({active: this.state.isInGallery})} onClick={this.handleLiClick}><Link to="gallery">Gallery & Video</Link></li>
                        <li classNames={classNames({active: this.state.isInBooking})} onClick={this.handleLiClick}><Link to="booking">Booking & Contact</Link></li>
                    </ul>
                </div>
            </div>
        )
    }

})

module.exports = DesktopMenuBar; 