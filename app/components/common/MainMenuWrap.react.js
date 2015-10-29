var React = require('react');

var mixin = require('baobab-react/mixins').branch;

var MainMenuInner = require('./MainMenuInner.react.js');

var SideMenuBar = React.createClass({

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


    getMenuWrapStyle: function() {
        var style = {
            backgroundColor: null,
            height: 0
        }

        if (this.state.menuIsOpen) {
            style.height = '100vh'
        }

        if (this.state.isInIntro) {
            style.backgroundColor = 'transparent';
        } else if (this.state.isInHouse) {
            style.backgroundColor = '#769ac4';
        } else if (this.state.isInBooking) {
            style.backgroundColor = '#bec6cf';
        }

        return style
    },
    render : function() {
        if (!this.state.menuIsOpen) {
            return (
                <div id='menu-main-wrap' style={this.getMenuWrapStyle()}>
                </div>
            )
        } else {
            return (
                <div id='menu-main-wrap' style={this.getMenuWrapStyle()}>
                    <MainMenuInner />
                </div>
            )
        }
    }

})

module.exports = SideMenuBar; 