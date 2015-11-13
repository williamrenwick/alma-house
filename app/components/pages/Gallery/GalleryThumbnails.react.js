var React = require('react');

var GalleryThumbItem = require('./GalleryThumbItem.react.js');

var mixin = require('baobab-react/mixins').branch;
var GalleryActions = require('../../../actions/GalleryActions.js');

var GalleryThumbnails = React.createClass({

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

    renderThumbnails: function() {
        return this.props.photos.map((thumb, i) => { 
            return (
               <GalleryThumbItem item={thumb} id={i} key={i}/>
            ) 
        })
    },

    render : function() {
        return (
            <section id="gallery-thumbs">
                <h1>gallery</h1>
                <div id="gallery-thumb-wrap">
                    {this.renderThumbnails()}
                </div>
            </section>
        )
    }

})

module.exports = GalleryThumbnails; 