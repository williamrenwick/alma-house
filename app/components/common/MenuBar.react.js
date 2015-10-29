var React = require('react');

var mixin = require('baobab-react/mixins').branch;

var SideMenuBar = require('./SideMenuBar.react.js');
var TopMenuBar = require('./TopMenuBar.react.js');

var MenuBar = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isMobile: ['resize', 'isMobile'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking']
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {


        if (!this.state.isMobile) {
            return (
                <SideMenuBar {...this.props}/>
            )  
        } else {
            return (
                <TopMenuBar {...this.props}/>
            )           
        }
        
    }

})

module.exports = MenuBar; 