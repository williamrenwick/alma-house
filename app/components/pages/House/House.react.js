var React = require('react');

var NextPage = require('../../common/NextPage.react.js');
var PageTitle = require('../../common/PageTitle.react.js');
var HouseContent = require('./HouseContent.react.js');

var mixin = require('baobab-react/mixins').branch;
var RouteActions = require('../../../actions/RouteActions.js');

var House = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isMobile: ['resize', 'isMobile'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking'],
        menuIsOpen: ['menu', 'isOpen']
    },

    componentWillMount : function() {
        RouteActions.isInHouse();
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    getStyle: function() {
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
        if (!this.state.isMobile) {
            return (
                <div id='house-wrap'>
                    <div id="main-content-logo" style={this.getStyle()}></div>
                    <PageTitle />
                    <HouseContent />
                    <NextPage {...this.props}/>
                </div>
            )            
        } else {
            return (
                <div id='house-wrap'>
                    <div id="main-content-logo" style={this.getStyle()}></div>
                    <PageTitle />
                    <div id="sub-menu-bg"></div>
                    <HouseContent />
                    <NextPage {...this.props}/>
                </div>
            ) 
        }

    }

})

module.exports = House; 