var React = require('react');

var mixin = require('baobab-react/mixins').branch;

var bedText = "Upstairs you’ll find the master bedroom with a sumptuous, comfortable super king size bed. Next door is a bunk room perfect for kids and at the end of the hallway is the family bathroom with bath and shower. Downstairs there’s the second double bedroom with a king size bed, a travel cot and a handy en-suite shower room."

var BedroomRow1 = React.createClass({

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
                <div id="bedRow1">
                    <div id="bed-img-1" className="multi-col">
                        <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_5.jpg)'}}></div>
                    </div>
                    <div id="bedText" className="multi-col">
                        <h1>Bedrooms & Bathrooms</h1>
                        <p>{bedText}</p>
                    </div>                    
                </div>
            )
        } else if (this.state.isMobile) {
            return (
                <div id="bedRow1">
                    <div id="bedText" className="multi-col">
                        <h1>Bedrooms & Bathrooms</h1>
                        <p>{bedText}</p>
                    </div>
                    <div id="bed-img-1" className="multi-col">
                        <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_5.jpg)'}}></div>
                    </div>                    
                </div>
            )
        }
    }

})

module.exports = BedroomRow1; 