var React = require('react');

var RouteActions = require('../../../actions/RouteActions.js');

var introText = "Alma House is in the small village of Malborough, 2 miles from Salcombe and under 3 hours away from London Paddington via Totnes. This child friendly, 3 bedroom period cottage has been renovated to provide modern comfort within the charms of a classic Devon cottage. This includes a sun saturated newly fitted kitchen-diner that looks out on to the beautiful traditional stone walled garden. The huge sitting room boasts a large log fire which makes for a perfect place to escape to when the nights start drawing in. Having rented a number of cottages before we bought Alma House we learnt that, for us, it is important that guests can relax and feel like they are in a home away from home. We place real importance on the cottage being warm and friendly and a great place to hideaway and unwind."

var Introduction = React.createClass({

    propTypes: {},
    mixins : [],

    componentWillMount : function() {
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        return (
            <section id='the-house-intro'>
                <div id="intro-img-1">
                    <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_1.jpg)'}}></div>
                </div>
                <div id="intro-inner-wrap">
                    <div id="intro-top-row">
                        <div id='intro-text' className="multi-col">
                            <h1>Introduction</h1>
                            <p>{introText}</p>
                        </div>
                        <div id="intro-img-2" className="multi-col">
                            <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_2.jpg)'}}></div>
                        </div>
                    </div>
                    <div id="intro-img-3" className="multi-col">
                        <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_3.jpg)'}}></div>
                    </div>
                    <div id="intro-img-4" className="multi-col">
                        <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_4.jpg)'}}></div>
                    </div>
                </div>
            </section>
        )
    }

})

module.exports = Introduction; 