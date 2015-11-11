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
                        <li className="link"><a target="_blank" href="http://www.beachhousedevon.com/">The Beach House</a></li>
                        <li className="link"><a target="_blank" href="http://www.thecrabshellinn.com/">The Crabshell Inn</a></li>
                        <li className="link"><a target="_blank" href="http://www.winkingprawn.co.uk/">Winking Prawn</a></li>
                        <li className="link"><a target="_blank" href="http://www.southsands.com/">South Sands</a></li>
                        <li className="link"><a target="_blank" href="http://www.idevon.co.uk/profile/793959/Salcombe/Captain-Flints">Captain Flints</a></li>
                    </ul>
                    <ul>
                        <li className="title">Things To Do</li>
                        <li className="link"><a target="_blank" href="http://www.salcombedinghysailing.co.uk/">Sailing</a></li>
                        <li className="link"><a target="_blank" href="http://www.thurlestonegolfclub.co.uk/">Golf</a></li>
                        <li className="link"><a target="_blank" href="http://www.visitsouthdevon.co.uk/food-and-drink/south-devon-crab/crabbing-hotspots">Crabbing</a></li>
                        <li className="link"><a target="_blank" href="http://www.pennywellfarm.co.uk/">Farm</a></li>
                        <li className="link"><a target="_blank" href="http://www.woodlandspark.com/">Theme Park</a></li>
                    </ul>
                </div>
            </div>
        )
    }

})

module.exports = UsefulLinks; 