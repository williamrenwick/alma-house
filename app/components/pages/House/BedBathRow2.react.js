var React = require('react');


var bedText = "Upstairs you’ll find the master bedroom with a sumptuous, comfortable super king size bed. Next door is a bunk room perfect for kids and at the end of the hallway is the family bathroom with bath and shower. Downstairs there’s the second double bedroom with a king size bed, a travel cot and a handy en-suite shower room."

var BedroomRow1 = React.createClass({

    propTypes: {},
    mixins : [],

    componentWillMount : function() {
    },
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    render : function() {
        return (
            <div id="bedRow2">
                <div id="bed-img-2" className="multi-col">
                    <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_6.jpg)'}}></div>
                </div>
                <div id="bed-img-3" className="multi-col">
                    <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_7.jpg)'}}></div>
                </div>
                <div id="bed-img-4" className="multi-col">
                    <div className="content" style={{backgroundImage: 'url(img/gallery/almahouse_8.jpg)'}}></div>
                </div>
            </div>
        )
    }

})

module.exports = BedroomRow1; 