var React = require('react');

var mixin = require('baobab-react/mixins').branch;

var PageTitle = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isMobile: ['resize', 'isMobile'],
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
            return 'The House'
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

        if (!this.state.isMobile) {
            style.visibility = 'hidden';
            style.color = '#ffffff';
            style.zIndex = '-1';
        } else {
            style.visibility = 'visible';
            style.zIndex = '11';
            
            if (this.state.isInHouse) {
                style.color = '#A6E8D2';
            } else if (this.state.isInGallery) {
                style.color = '#CADFFE';
            } else if (this.state.isInBooking) {
                style.color = '#EFC38D';
            }

        }



        return style
    },
    getTitleLineStyle: function() {
        var style = {
            color: null
        }

        if (this.state.isInHouse) {
            style.backgroundColor = '#A6E8D2';
        } else if (this.state.isInGallery) {
            style.backgroundColor = '#CADFFE';
        } else if (this.state.isInBooking) {
            style.backgroundColor = '#EFC38D';
        }

        return style
    },
    render : function() {
        return (
            <div>
                <div id='page-title' style={this.getSideTitleStyle()}>
                    <div id='page-title-line' style={this.getTitleLineStyle()}></div>
                    <h1>{this.getPageTitle()}</h1>
                </div>
                <div id="sub-menu-bg"></div>
            </div>
        )
    }

})

module.exports = PageTitle; 