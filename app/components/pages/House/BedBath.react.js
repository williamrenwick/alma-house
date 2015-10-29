var React = require('react');


var BedBathRow1 = require('./BedBathRow1.react.js');
var BedBathRow2 = require('./BedBathRow2.react.js');

var bedText = "Upstairs you’ll find the master bedroom with a sumptuous, comfortable super king size bed. Next door is a bunk room perfect for kids and at the end of the hallway is the family bathroom with bath and shower. Downstairs there’s the second double bedroom with a king size bed, a travel cot and a handy en-suite shower room."

var Bedrooms = React.createClass({

    propTypes: {},
    mixins : [],

    componentWillMount : function() {
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        return (
            <section id='bedroomBaths'>
                <div id="bedroom-inner-wrap">
                    <BedBathRow1 />
                    <BedBathRow2 />
                </div>
            </section>
        )
    }

})

module.exports = Bedrooms; 