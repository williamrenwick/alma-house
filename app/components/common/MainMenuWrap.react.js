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
        isInGallery: ['routes', 'isInGallery'],
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
            style.backgroundColor = '#9ddbdc';
        } else if (this.state.isInHouse) {
            style.backgroundColor = '#A6E8D2';
        } else if (this.state.isInGallery) {
            style.backgroundColor = '#cadffe'
        } else if (this.state.isInBooking) {
            style.backgroundColor = '#EFC38D';
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