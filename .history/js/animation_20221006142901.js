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
    duration: 3,
    scrollTrigger: {
        trigger: ".about-etienne",
        start: "top 95%",
        end: "top 30%",
        toggleActions: "restart none restart complete",
        markers: true,
    }
});

