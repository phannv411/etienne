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
    cursorDisplacementSprite: "../img/displace-circle.png",

    // cursor displacement effect
  cursorImgEffect: true, // enable cursor effect
  cursorTextEffect: false, // enable cursor text effect
  cursorScaleIntensity: 0.65, // cursor effect intensity
  cursorMomentum: 0.14, // lower is slower

  // swipe
  swipe: true, // enable swipe
  swipeDistance: window.innerWidth * 0.4, // swipe distance - ex : 580
  swipeScaleIntensity: 2, // scale intensity during swipping

  // slide transition
  slideTransitionDuration: 1, // transition duration
  transitionScaleIntensity: 30, // scale intensity during transition
  transitionScaleAmplitude: 160, // scale amplitude during transition

  // regular navigation
  nav: true, // enable navigation
  navElement: ".main-nav", // set nav class

  // image rgb effect
  imagesRgbEffect: true, // enable img rgb effect
  imagesRgbIntensity: 0.9, // set img rgb intensity
  navImagesRgbIntensity: 80, // set img rgb intensity for regular nav

  // texts settings
  textsDisplay: true, // show title
  textsSubTitleDisplay: true, // show subtitles
  textsTiltEffect: true, // enable text tilt
  googleFonts: ["Josefin Sans:700", "Poppins:400"], // select google font to use
  buttonMode: false, // enable button mode for title
  textsRgbEffect: true, // enable text rgb effect
  textsRgbIntensity: 0.03, // set text rgb intensity
  navTextsRgbIntensity: 15, // set text rgb intensity for regular nav

  textTitleColor: "#fff", // title color
  textTitleSize: 125, // title size
  mobileTextTitleSize: 125, // title size
  textTitleLetterspacing: 3, // title letterspacing

  textSubTitleColor: "white", // subtitle color ex : 0x000000
  textSubTitleSize: 21, // subtitle size
  mobileTextSubTitleSize: 21, // mobile subtitle size
  textSubTitleLetterspacing: 2, // subtitle letter spacing
  textSubTitleOffsetTop: 90, // subtitle offset top
  mobileTextSubTitleOffsetTop: 90, // mobile subtitle offset top
});
