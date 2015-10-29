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

    render : function() {
        return (
            <div id='header-image' style={{backgroundImage: 'url(img/headerImage.png)'}}>
                <div id='header-logo'></div>
                <NextPage {...this.props}/>
            </div>
        )
    }

})

module.exports = Homepage; 