var React = require('react');

var mixin = require('baobab-react/mixins').branch;

var DesktopMenuBar = require('./DesktopMenuBar.react.js');
var MobileMenuBar = require('./MobileMenuBar.react.js');

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
                <DesktopMenuBar {...this.props}/>
            )  
        } else {
            return (
                <MobileMenuBar {...this.props}/>
            )           
        }
        
    }

})

module.exports = MenuBar; 