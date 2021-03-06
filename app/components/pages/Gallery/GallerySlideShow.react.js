var React = require('react');

var GalleryActions = require('../../../actions/GalleryActions.js')
var mixin = require('baobab-react/mixins').branch;

var activeSlide = 0;

var GallerySlideShow = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        windowW: ['resize', 'currentWidth'],
        isMobile: ['resize', 'isMobile'],
        isInIntro: ['routes', 'isInIntro'],
        isInHouse: ['routes', 'isInHouse'],
        isInBooking: ['routes', 'isInBooking'],
        currentSlide: ['gallery', 'currentSlide'],
        isVideoActive: ['gallery', 'isVideoActive'],
        menuIsOpen: ['menu', 'isOpen']
    },

    componentWillMount : function() {
        activeSlide = this.state.currentSlide;
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    getImageFromProps: function() {
        var photos = this.props.photos;

        return this.props.photos[this.state.currentSlide]
    },
    getSlideStyle: function() {
        var photoObj = this.getImageFromProps();

        return {
            backgroundImage: 'url(' + photoObj.url + ')'
        }
    },
    getCurrentIndexStyle: function() {
        var style = {
            WebkitTransform: null,
            MozTransform: null,
            msTransform: null,
            transform: null
        }


        if (this.state.currentSlide <= 8) {
            style.WebkitTransform = 'translateX(5px)';
            style.MozTransform = 'translateX(5px)';
            style.msTransform = 'translateX(5px)';
            style.transform = 'translateX(5px)';
        } else {
            style.WebkitTransform = 'translateX(0px)';
            style.MozTransform = 'translateX(0px)';
            style.msTransform = 'translateX(0px)';
            style.transform = 'translateX(0px)';
        }

        return style
    },
    getButtonStyle: function() {
        var style = {
            display: 'none'
        }

        /*if (activeSlide == 0) {
            style.display = 'block'
        } else {
            style.display = 'none'
        }*/
        return style
    },

    handlePrevClick: function() {
        if (activeSlide == 0) {
            activeSlide = this.props.photos.length - 1;
        } else if (activeSlide > 0) {
            activeSlide --      
        }
        GalleryActions.setCurrentSlide(activeSlide);
    },
    handleNextClick: function() {
        if (activeSlide == this.props.photos.length - 1) {
            activeSlide = 0;
        } else if (activeSlide < this.props.photos.length - 1) {
            activeSlide ++  
        }
        GalleryActions.setCurrentSlide(activeSlide);
    },

    render : function() {
        return (
            <div id='gallery-slideshow'>
                <div id='gallery-slide' style={this.getSlideStyle()}>
                    <div id="slide-info">
                        <div id="index-wrapper">
                            <h5><span id="current-index" style={this.getCurrentIndexStyle()}>{this.state.currentSlide + 1}</span><span id="index-total">{this.props.photos.length}</span></h5>
                        </div>
                        <h2>{this.getImageFromProps().photoTitle}</h2>
                    </div>
                </div>
                <div id='gallery-prev' onClick={this.handlePrevClick}><p>Prev</p></div>
                <div id='gallery-next' onClick={this.handleNextClick}><p>Next</p></div>
            </div>
        )            
    }

})

module.exports = GallerySlideShow; 