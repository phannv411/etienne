// images

const images = [
    "../img/slider/1.jpg",
    "../img/slider/2.jpg",
    "../img/slider/3.jpg",
    "../img/slider/4.jpg",
    "../img/slider/5.jpg",
]


// content

const texts = [
    ["Hero Banner 1", "This is banner 1"],
    ["Hero Banner 2", "This is banner 2"],
    ["Hero Banner 3", "This is banner 3"],
    ["Hero Banner 4", "This is banner 4"],
    ["Hero Banner 5", "This is banner 5"],
]


//Initation
rgbKineticSlider = new rgbKineticSlider({
    slideImages: images,
    itemsTitles: texts;



    backgroundDisplacementSprite: "../img/map-4.jpg",
    cursorDisplacementSprite: "../img/displace-circle.png"
})