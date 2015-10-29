var React = require('react');

var RouteActions = require('../../../actions/RouteActions.js');

var outsideText = "Parking is readily available by the secure gate to the house which leads into the parking space within the house grounds. The house overlooks Dartmoor and is located in the heart of the village, with a Cooperative supermarket, post office, two pubs and a playground all within a few minutes’ walk from the house. If you fancy getting some sand between your toes there are beautiful child-friendly beaches just five minutes’ drive away such as Hope Cove, North and South Sands and South Milton Sands."

var Outside = React.createClass({

    propTypes: {},
    mixins : [],

    componentWillMount : function() {
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        return (
            <section id='outside'>
                <div id="outsideText" className="multi-col">  
                    <h1>Outside</h1>
                    <p>{outsideText}</p>
                </div>
                <div id="outside-img-1" className="multi-col">
                    <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_9.jpg)'}}></div>
                </div>
            </section>
        )
    }

})

module.exports = Outside; 