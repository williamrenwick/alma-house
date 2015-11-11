var React = require('react');

var mixin = require('baobab-react/mixins').branch;

var PageTitle = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInGallery: ['routes', 'isInGallery'],
        isInBooking: ['routes', 'isInBooking']
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    getPageTitle: function() {

        if (this.state.isInHouse) {
            return 'The House & Area'
        } else if (this.state.isInGallery) {
            return 'Gallery & Video'
        } else if (this.state.isInBooking) {
            return 'Booking & Contact'
        }
    },
    getSideTitleStyle: function() {
        var style = {
            visibility: null,
            color: null,
            zIndex: null,
        }

        if (this.state.isInHouse) {
            style.visibility = 'visible';
            style.color = '#769ac4';
            style.zIndex = '11';
        } else if (this.state.isInGallery) {
            style.visibility = 'visible';
            style.color = '#CADFFE';
            style.zIndex = '-1';
        } else if (this.state.isInBooking) {
            style.visibility = 'visible';
            style.color = '#bec6cf';
            style.zIndex = '11';
        }

        return style
    },
    getTitleLineStyle: function() {
        var style = {
            color: null
        }

        if (this.state.isInHouse) {
            style.backgroundColor = '#769ac4';
        } else if (this.state.isInGallery) {
            style.backgroundColor = '#CADFFE';
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