var React = require('react');

var RouteActions = require('../../../actions/RouteActions.js');

var UsefulLinks = React.createClass({

    propTypes: {},
    mixins : [],

    componentWillMount : function() {
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        return (
            <div id="usefulLinks" className="extra-col multi-col">
                <h1>Useful Links</h1>
                <div id="link-wrap">
                    <ul>
                        <li className="title">Restaurants</li>
                        <li className="link">The Beach House</li>
                        <li className="link">The Crabshell Inn</li>
                        <li className="link">Winking Prawn</li>
                        <li className="link">South Sands</li>
                        <li className="link">Captain Flints</li>
                    </ul>
                    <ul>
                        <li className="title">Things To Do</li>
                        <li className="link">Sailing</li>
                        <li className="link">Golf</li>
                        <li className="link">Crabbing</li>
                        <li className="link">Farm</li>
                        <li className="link">Theme Park</li>
                    </ul>
                </div>
            </div>
        )
    }

})

module.exports = UsefulLinks; 