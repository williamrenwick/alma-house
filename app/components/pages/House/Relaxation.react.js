var React = require('react');

var mixin = require('baobab-react/mixins').branch;

var relaxText = "There are watersports at various beaches in the area or why not take the “sea tractor” over to Burgh Island and visit its famous Art Deco hotel. If a day spent walking the headlands is your thing, there are some truly stunning walks along the South West Coastal Path which is a designated Area of Outstanding Natural Beauty."

var Relaxation = React.createClass({

    propTypes: {},
    mixins : [mixin],
    cursors: {
        isMobile: ['resize', 'isMobile']
    },

    componentWillMount : function() {
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        if (!this.state.isMobile) { 
            return (
                <section id='relaxation'>
                    <div id="relaxation-img-1" className="multi-col">
                        <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_10.jpg)'}}></div>
                    </div>
                    <div id="relaxationText" className="multi-col">  
                        <h1>For Relaxation</h1>
                        <p>{relaxText}</p>
                    </div>
                </section>
            )
        } else if (this.state.isMobile) {
            return (
                <section id='relaxation'>
                    <div id="relaxationText" className="multi-col">  
                        <h1>For Relaxation</h1>
                        <p>{relaxText}</p>
                    </div>
                    <div id="relaxation-img-1" className="multi-col">
                        <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_10.jpg)'}}></div>
                    </div>
                </section>
            )
        }

    }

})

module.exports = Relaxation; 