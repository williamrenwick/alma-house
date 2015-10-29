var React = require('react');

var NextPage = require('../../common/NextPage.react.js');

var RouteActions = require('../../../actions/RouteActions.js');
var mixin = require('baobab-react/mixins').branch;

var Homepage = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        windowH: ['resize', 'currentHeight'],
        scrollPos: ['scrolling', 'scrollPosition']
    },

    componentWillMount : function() {
        RouteActions.isInIntro();
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    componentDidMount: function() {
        $(window).scrollTop(0);
    },

    shouldIRoute: function() {
        if (this.state.scrollPos > this.state.windowH * 0.18) {
            return true
        } else {
            return false
        }
    },
    routeTo: function(newRoute) {
        var iShouldRoute = this.shouldIRoute()

        if (iShouldRoute == true) {
            console.log(iShouldRoute)

            window.location.hash = newRoute
        }
    },
    render : function() {
        this.routeTo('#the-house'); 

        return (
            <div id='header-image' style={{backgroundImage: 'url(img/headerImage.png)'}}>
                <div id='header-logo'></div>
                <NextPage {...this.props}/>
            </div>
        )
    }

})

module.exports = Homepage; 