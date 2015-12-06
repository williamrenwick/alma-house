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
        scrollPos: ['scrolling', 'scrollPosition'],
        isSliderActive: ['gallery', 'isSliderActive'],
        isVideoActive: ['gallery', 'isVideoActive']
    },

    componentWillMount : function() {
        RouteActions.isInIntro();
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    componentDidMount: function() {
        if (this.state.isSliderActive) {
            GalleryActions.isSliderActive(false);
        }
        if (this.state.isVideoActive) {
            GalleryActions.isVideoActive(false);
        }
    },

    render : function() {
        return (
            <div id='header-image' style={{backgroundImage: 'url(img/headerImage.png)'}}>
                <video autoPlay loop muted id="intro-vid">
                    <source src='https://player.vimeo.com/external/145372078.hd.mp4?s=f05447b48664c0174fc83334f48127784e90ee52&profile_id=119' type="video/mp4" />
                </video>
                <div id='header-logo'></div>
                <NextPage {...this.props}/>
            </div>
        )
    }

})

module.exports = Homepage; 