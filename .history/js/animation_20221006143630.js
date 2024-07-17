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
    y: 200,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".about-etienne",
        start: "top 95%",
        end: "top 30%",
        toggleActions: "restart none none complete",
        markers: true,
    }
});


gsap.from(".about-img-02",{
    x: -200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        start: "top 95%",
        end: "top 30%",
        toggleActions: "restart none none complete",
        markers: true,
    }
});

gsap.from(".about-img-03",{
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        start: "top 95%",
        end: "top 30%",
        toggleActions: "restart none none complete",
        markers: true,
    }
});

