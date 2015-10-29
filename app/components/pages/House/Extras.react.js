var React = require('react');

var RouteActions = require('../../../actions/RouteActions.js');

var TheCottage = require('./TheCottage.react.js');
var UsefulLinks = require('./UsefulLinks.react.js');
var Amenities = require('./Amenities.react.js');

var amenitiesListItems = require('../../../data/amenitiesListItems.js')

var Extra = React.createClass({

    propTypes: {},
    mixins : [],

    componentWillMount : function() {
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        return (
            <section id='extraInfo'>
                <div id="extraRow1" className="extraRow">
                    <TheCottage />
                    <UsefulLinks />
                </div>
                <div id="extraRow2" className="extraRow">
                    <Amenities amenities={amenitiesListItems}/>
                </div>
            </section>
        )
    }

})

module.exports = Extra; 