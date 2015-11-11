var React = require('react');
var classNames = require('classnames');

var mixin = require('baobab-react/mixins').branch;

var MenuTopBar = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        isInHouse: ['routes', 'isInHouse'],
        isInGallery: ['routes', 'isInGallery'],
        isInBooking: ['routes', 'isInBooking'],
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    componentDidMount: function() {
        console.log('menu bars mounted')
    },

    getCurrentBarStyle: function() {
        var style = {
            backgroundColor: null
        }

        if (this.state.isInHouse) {
            style.backgroundColor = '#A6E8D2';
        } else if (this.state.isInGallery) {
            style.backgroundColor = '#cadffe'
        } else if (this.state.isInBooking) {
            style.backgroundColor = '#EFC38D';
        }

        return style
    },

    render : function() {
        return (
            <div id='menu-top-bars'>
                <div id="current-top-bar" className={classNames({topBar: true})} style={this.getCurrentBarStyle()}></div>
            </div>
        )
    }

})

module.exports = MenuTopBar; 