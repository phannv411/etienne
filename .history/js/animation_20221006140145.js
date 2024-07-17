const locoscroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true},
    smartphone: { smooth: true},
});


gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//     scroller: ".data-scroll-container"
//   })


// locoScroll.on("scroll", ScrollTrigger.update);


gsap.to(".about-img-01",{
    x: 200,
    duration: 3,
    scrollTrigger: {
        trigger: ".about-etienne",
        markers: true,
    }


})