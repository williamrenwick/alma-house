var React = require('react');
var Link= require('react-router').Link;
var mixin = require('baobab-react/mixins').branch;

var MenuActions = require('../../actions/MenuActions.js');

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

    handleClick: function() {
        MenuActions.isOpen(false)
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {

        return (
            <div id='menu-main-inner'>
                <ul>
                    <li onClick={this.handleClick}><Link to="the-house"><span>The House</span></Link></li>
                    <li onClick={this.handleClick}><Link to="gallery"><span>Gallery & Video</span></Link></li>
                    <li onClick={this.handleClick}><Link to="booking"><span>Booking & Contact</span></Link></li>
                </ul>
            </div>
        )
    }

})

module.exports = SideMenuBar; 