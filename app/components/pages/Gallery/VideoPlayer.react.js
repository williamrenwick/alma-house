var React = require('react');
var Youtube = require('react-youtube');

var GalleryActions = require('../../../actions/GalleryActions.js')
var mixin = require('baobab-react/mixins').branch;

var VideoPlayer = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isMobile: ['resize', 'isMobile'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking'],
        isVideoActive: ['gallery', 'isVideoActive'],
        menuIsOpen: ['menu', 'isOpen']
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    endOrPause: function() {
        GalleryActions.isVideoActive(false);
    },

    render : function() {
        const opts = {
            playerVars: {
                autoplay: 1,
                controls: 0,
                showinfo: 0
            }
        }

        return (
            <div id="video-player-wrap">
                <Youtube 
                    url={'https://www.youtube.com/watch?v=LlkjZQ1tNHI'}
                    className='youtube-video'
                    opts={opts}
                    onPause={this.endOrPause}
                    onEnd={this.endOrPause}
                />
            </div>
        )
    }

})

module.exports = VideoPlayer; 