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
                    <li>Beds: <span className="list-bold">6</span></li>
                    <li>Bed Types: <span className="list-bold">1x Super King Size, 1x King Size, 1x Bunk Bed</span></li>
                    <li>Sleeps: <span className="list-bold">6 (+ a cot)</span></li>
                    <li>Sitting Room: <span className="list-bold">1</span></li>
                    <li>Bathrooms: <span className="list-bold">2</span></li>
                </ul>
            </div>
        )
    }

})

module.exports = TheCottage; 