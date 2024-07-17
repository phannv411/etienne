gsap.registerPlugin(ScrollTrigger);


// const locoscroll = new LocomotiveScroll({
//     el:document.querySelector("[data-scroll-container]"),
//     smooth: true,
//     tablet: { smooth: true},
//     smartphone: { smooth: true},
// });




// ScrollTrigger.defaults({
//     scroller: ".data-scroll-container"
// });



gsap.from(".about-img-01",{
    x: 200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        start: "top 60%",
        end: "top 40%",
        toggleActions: "restart reverse restart reset",
        markers: true,
    }
});


gsap.from(".about-img-02",{
    x: -200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        toggleActions: "restart pause restart reset",
        markers: true,
    }
});
