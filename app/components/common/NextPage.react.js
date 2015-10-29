var React = require('react');

var Link= require('react-router').Link;
var mixin = require('baobab-react/mixins').branch;

var NextPage = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        windowH: ['resize', 'currentHeight'],
        isMobile: ['resize', 'isMobile'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking'],
        scrollPos: ['scrolling', 'scrollPosition']
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    determineLink: function() {
        var path = this.props.path;


        if (this.state.isInIntro) {
            return 'the-house'
        } else if (this.state.isInHouse) {
            return 'booking'
        }
    },
    getWrapStyle: function() {
        if (this.state.isInIntro && this.state.isMobile) {
            return {
                top: 'auto',
                left: '70px',
                right: 'auto',
                bottom: '0',
                width: '100px',
                height: '150px'
            }
        }
    },
    getLineStyle: function() {
        var style = {
            top: null,
            height: null,
            backgroundColor: null,
            opacity: '0'
        }

        if (this.state.isInIntro) {
            style.top = '0%';
            style.height = '100%';
            style.backgroundColor = '#ffffff';
        } else {
            style.top = '100%';
            style.height = '100%';
            style.backgroundColor = '#b6bfc9';
            style.opacity = '0';
            if (this.state.scrollPos + this.state.windowH == $(document).height()) {
                style.top = '0%';
                style.opacity = '1';
            }
        }

        return style
    },
    getTextStyle: function() {
        var style = {
            color: null,
            marginLeft: null,
            opacity: null
        }


        if (this.state.isInIntro) {
            style.color = '#ffffff';
            style.marginLeft = '20px';
            style.opacity = '1';
        } else if (this.state.isInHouse) {
            style.color = '#b6bfc9';
            style.marginLeft = '20px';
            style.opacity = '0';

            if (this.state.scrollPos + this.state.windowH == $(document).height()) {
                style.opacity = '1';
            }
        }

        return style
    },
    renderText: function() {
        var path = this.props.path;

        if (path == '/') {
            return 'The House & Area'
        } else if (path == '/the-house') {
            return 'Booking & Contact'
        }
    },
    renderInner: function() {

        if (this.state.isMobile && !this.state.isInIntro) {
            return (
                <div id='next-page-arrow'></div>
            )
        } else if (!this.state.isMobile || this.state.isMobile && this.state.isInIntro) {
            return (
                <div style={{height: '100%'}}>
                    <div id='next-page-line' style={this.getLineStyle()}></div>
                    <div id='next-page-text' style={this.getTextStyle()}>
                        {this.renderText()}
                    </div>
                </div>
            )
        }
    },
    render : function() {

        return (
            <Link to={this.determineLink()}>
                <div id='next-page' style={this.getWrapStyle()}>
                    {this.renderInner()}
                </div>
            </Link>
        )
    }

})

module.exports = NextPage; 