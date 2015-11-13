var React = require('react');

var mixin = require('baobab-react/mixins').branch;
var GalleryActions = require('../../../actions/GalleryActions.js');

var GalleryThumbItem = React.createClass({

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

    handleClick: function() {
        GalleryActions.isSliderActive(true);
        GalleryActions.setCurrentSlide(this.props.id);
    },

    render : function() {
            var item = this.props.item;


            return (
                <div className="gallery-thumb-item" onClick={this.handleClick} >
                    <div className="gallery-thumbnail">
                        <div className="content" style={{backgroundImage: 'url(' + item.url + ')'}}></div>
                        <div id="see-more-hover">
                            <svg x="0px" y="0px" width="43px" height="43px" viewBox="0 0 43 43" enable-background="new 0 0 43 43">
                            <circle fill="none" className="circle" stroke="#f7f7f5" strokeWidth="3" strokeMiterlimit="10" cx="21.5" cy="21.5" r="20"/>
                            <line fill="none" stroke="#f7f7f5" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="21.5" y1="14.6" x2="21.5" y2="28.5"/>
                            <line fill="none" stroke="#f7f7f5" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="28.5" y1="21.5" x2="14.5" y2="21.5"/>
                            </svg>

                        </div>
                    </div>
                    <h2><span>{item.photoTitle}</span></h2>
                </div>
            ) 
    }

})

module.exports = GalleryThumbItem; 