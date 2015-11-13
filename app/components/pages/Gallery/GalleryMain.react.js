var React = require('react');

var VideoRow = require('./VideoRow.react.js'),
    GalleryThumbnails = require('./GalleryThumbnails.react.js');

var mixin = require('baobab-react/mixins').branch;


var GalleryMain = React.createClass({

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


    render : function() {
        return (
            <div id="gallery-main-wrap">
                <VideoRow />
                <GalleryThumbnails photos={this.props.photos}/>
            </div>
        )
    }

})

module.exports = GalleryMain; 