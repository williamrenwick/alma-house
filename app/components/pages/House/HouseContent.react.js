var React = require('react');

var Introduction = require('./Introduction.react.js');
var BedBath = require('./BedBath.react.js');
var Outside = require('./Outside.react.js');
var Relaxation = require('./Relaxation.react.js');
var Extras = require('./Extras.react.js');

var RouteActions = require('../../../actions/RouteActions.js');

var HouseContent = React.createClass({

    propTypes: {},
    mixins : [],

    componentWillMount : function() {
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        return (
            <div id='house-content-wrap'>
                <Introduction />
                <BedBath />
                <Outside />
                <Relaxation />
                <Extras />
            </div>
        )
    }

})

module.exports = HouseContent; 