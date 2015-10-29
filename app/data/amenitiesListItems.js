var itemText = [
    'TV', 
    'Blu-Ray Player', 
    'Sky TV', 
    'Wireless Internet', 
    'Computer', 
    'Movie Collection', 
    'Hifi', 
    'Log Fire', 
    'Bed Linens', 
    'Free Parking', 
    'Towels', 
    'Oven', 
    'Dishwasher', 
    'Microwave',
    'Fridge/Freezer',
    'Underfloor Heating'
];

var amenitiesListItems = [];

for (var i = 0; i < itemText.length; i++) {
    var imgDirectory = './img/gallery/icons/';
    var listItem = {
        icon: imgDirectory + 'icons-' + (i + 1) + '.png',
        text: itemText[i]
    }
   
   amenitiesListItems.push(listItem);
}


module.exports = amenitiesListItems;

