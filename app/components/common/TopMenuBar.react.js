var React = require('react');
var classNames = require('classnames');

var mixin = require('baobab-react/mixins').branch;
var MenuActions = require('../../actions/MenuActions.js');

var TopMenuBar = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking'],
        menuIsOpen: ['menu', 'isOpen']
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    handleClick: function() {
        if (!this.state.menuIsOpen) {
            MenuActions.isOpen(true)
        } else {
            MenuActions.isOpen(false)
        }
    },

    getSideBarStyle: function() {
        var style = {
            height: null
        }

        if (this.state.isInIntro) {
            style.height = '50px';
        } else if (this.state.isInHouse) {
            style.height = '50px';
        }

        return style
    },
    getMenuBgStyle: function() {
        var style = {
            backgroundColor: null,
            WebkitTransform: null,
            MozTransform: null,
            msTransform: null,
            OTransform: null,
            transform: null
        }
        if (this.state.isInIntro) {
            style.backgroundColor = 'transparent';
            style.WebkitTransform = 'translateY(-50px)';
            style.MozTransform = 'translateY(-50px)';
            style.msTransform = 'translateY(-50px)';
            style.OTransform = 'translateY(-50px)';
            style.transform = 'translateY(-50px)';
        } else if (this.state.isInHouse) {
            style.backgroundColor = '#769ac4';
            style.WebkitTransform = 'translateY(0px)';
            style.MozTransform = 'translateY(0px)';
            style.msTransform = 'translateY(0px)';
            style.OTransform = 'translateY(0px)';
            style.transform = 'translateY(0px)';
        } else if (this.state.isInBooking) {
            style.backgroundColor = '#bec6cf';
            style.WebkitTransform = 'translateX(0px)';
            style.MozTransform = 'translateX(0px)';
            style.msTransform = 'translateX(0px)';
            style.OTransform = 'translateX(0px)';
            style.transform = 'translateX(0px)';
        }

        return style
    },
    render : function() {
        return (
            <div id='top-menu-bar' style={this.getSideBarStyle()}>
                <div id="top-menu-bg" style={this.getMenuBgStyle()}></div>
                <div id="menu-button" className={classNames({isOpen: this.state.menuIsOpen})} onClick={this.handleClick}>
                    <span className='menu-button-line'></span>
                </div>
            </div>
        )
    }

})

module.exports = TopMenuBar; 