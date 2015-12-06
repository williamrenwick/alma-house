var houseDirectory = 'img/gallery/',
    galleryDirectory = 'img/gallery/full/';

var homepageImage = 'img/headerImage.png';

var galleryImages = [
    {
        url: galleryDirectory + 'alma-img-34.jpg',
        photoTitle: 'The Beach'
    }, {
        url: galleryDirectory + 'alma-img-18.jpg',
        photoTitle: 'The House'
    }, {
        url: galleryDirectory + 'alma-img-1.jpg',
        photoTitle: 'The Master Bedroom'
    }, {
        url: galleryDirectory + 'alma-img-2.jpg',
        photoTitle: 'The Master Bedroom'
    }, {
        url: galleryDirectory + 'alma-img-3.jpg',
        photoTitle: 'The Upstairs Hallway'
    }, {
        url: galleryDirectory + 'alma-img-4.jpg',
        photoTitle: 'The Kids Bedroom'
    }, {
        url: galleryDirectory + 'alma-img-6.jpg',
        photoTitle: 'The Upstairs Bathroom'
    }, {
        url: galleryDirectory + 'alma-img-9.jpg',
        photoTitle: 'The Downstairs Bedroom'
    }, {
        url: galleryDirectory + 'alma-img-10.jpg',
        photoTitle: 'The Downstairs Ensuite'
    }, {
        url: galleryDirectory + 'alma-img-11.jpg',
        photoTitle: 'The Living Room'
    }, {
        url: galleryDirectory + 'alma-img-12.jpg',
        photoTitle: 'The Living Room'
    }, {
        url: galleryDirectory + 'alma-img-13.jpg',
        photoTitle: 'The Kitchen-Diner'
    }, {
        url: galleryDirectory + 'alma-img-14.jpg',
        photoTitle: 'The Kitchen-Diner'
    }, {
        url: galleryDirectory + 'alma-img-15.jpg',
        photoTitle: 'The Kitchen-Diner'
    }, {
        url: galleryDirectory + 'alma-img-16.jpg',
        photoTitle: 'The Kitchen-Diner'
    }, {
        url: galleryDirectory + 'alma-img-17.jpg',
        photoTitle: 'The Kitchen-Diner'
    }, {
        url: galleryDirectory + 'alma-img-5.jpg',
        photoTitle: 'The Garden'
    }, {
        url: galleryDirectory + 'alma-img-18.jpg',
        photoTitle: 'The Garden'
    }, {
        url: galleryDirectory + 'alma-img-35.jpg',
        photoTitle: 'The House'
    }, {
        url: galleryDirectory + 'alma-img-36.jpg',
        photoTitle: 'The House'
    }, {
        url: galleryDirectory + 'alma-img-21.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-23.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-24.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-25.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-26.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-27.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-28.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-29.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-31.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-33.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-34.jpg',
        photoTitle: 'The Surrounding Area'
    }, {
        url: galleryDirectory + 'alma-img-39.jpg',
        photoTitle: 'Christmas'
    }, {
        url: galleryDirectory + 'alma-img-40.jpg',
        photoTitle: 'Christmas'
    }, {
        url: galleryDirectory + 'alma-img-41.jpg',
        photoTitle: 'Christmas'
    }, {
        url: galleryDirectory + 'alma-img-42.jpg',
        photoTitle: 'Christmas'
    }, {
        url: galleryDirectory + 'alma-img-43.jpg',
        photoTitle: 'Christmas'
    }
];

var houseImages = [
    {
        url: houseDirectory + 'almahouse_1.jpg'
    }, {
        url: houseDirectory + 'almahouse_2.jpg'
    }, {
        url: houseDirectory + 'almahouse_3.jpg'
    }, {
        url: houseDirectory + 'almahouse_4.jpg'
    }, {
        url: houseDirectory + 'almahouse_5.jpg'
    }, {
        url: houseDirectory + 'almahouse_6.jpg'
    }, {
        url: houseDirectory + 'almahouse_7.jpg'
    }, {
        url: houseDirectory + 'almahouse_8.jpg'
    }, {
        url: houseDirectory + 'almahouse_9.jpg'
    }, {
        url: houseDirectory + 'almahouse_10.jpg'
    }
]

var allPhotos = [homepageImage];


(function callLoops() {
    for (var i = 0; i < galleryImages.length; i++) {
        var imgUrl = galleryImages[i].url

        allPhotos.push(imgUrl);

        if (i == (galleryImages.length - 1)) {
            houseLoop();
        }
    }   

    function houseLoop() {
        for (var i = 0; i < houseImages.length; i++) {
            var imgUrl = houseImages[i].url

            allPhotos.push(imgUrl);
        }
    }
})();



module.exports = {
    galleryPhotos: galleryImages,
    allPhotoUrls: allPhotos
};