var React = require('react');

var RouteActions = require('../../../actions/RouteActions.js');

var Amenities = React.createClass({

    propTypes: {},
    mixins : [],

    componentWillMount : function() {
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    renderListItems: function() {
        return this.props.amenities.map((liData) => {

            return (
                <li><span className="amenities-icon" style={{backgroundImage: 'url(' + liData.icon + ')'}}></span><span className="amenities-text">{liData.text}</span></li>
            )

        })
    },
    render : function() {
        
        return (
            <div id="amenities" className="extra-col multi-col">
                <h1>Amenities</h1>
                <ul>
                    {this.renderListItems()}
                </ul>
            </div>
        )
    }

})

module.exports = Amenities; 