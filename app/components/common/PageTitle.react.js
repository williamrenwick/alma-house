var React = require('react');

var mixin = require('baobab-react/mixins').branch;

var PageTitle = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking']
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    getPageTitle: function() {

        if (this.state.isInHouse) {
            return 'The House & Area';
        } else if (this.state.isInBooking) {
            return 'Booking & Contact'
        }
    },
    getSideTitleStyle: function() {
        var style = {
            visibility: null,
            color: null
        }

        if (this.state.isInHouse) {
            style.visibility = 'visible';
            style.color = '#769ac4';
        } else if (this.state.isInBooking) {
            style.visibility = 'visible';
            style.color = '#bec6cf';
        }

        return style
    },
    getTitleLineStyle: function() {
        var style = {
            color: null
        }

        if (this.state.isInHouse) {
            style.backgroundColor = '#769ac4';
        } else if (this.state.isInBooking) {
            style.backgroundColor = '#bec6cf';
        }

        return style
    },
    render : function() {
        return (
            <div id='side-page-title' style={this.getSideTitleStyle()}>
                <div id='page-title-line' style={this.getTitleLineStyle()}></div>
                <h1>{this.getPageTitle()}</h1>
            </div>
        )
    }

})

module.exports = PageTitle; 