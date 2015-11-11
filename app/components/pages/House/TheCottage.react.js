var React = require('react');

var RouteActions = require('../../../actions/RouteActions.js');

var TheCottage = React.createClass({

    propTypes: {},
    mixins : [],

    componentWillMount : function() {
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        return (
            <div id="the-cottage" className="extra-col multi-col">
                <h1>The Cottage</h1>
                <ul>
                    <li>Bedrooms: <span className="list-bold">3</span></li>
                    <li>Sleeps: <span className="list-bold">6/8</span></li>
                    <li>Bed Types: <span className="list-bold">1x Super King Size, 1x King Size, 1x Bunk Bed, 1x Sofa Bed</span></li>
                    <li>Bathrooms: <span className="list-bold">2</span></li>
                </ul>
            </div>
        )
    }

})

module.exports = TheCottage; 