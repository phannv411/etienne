gsap.registerPlugin(ScrollTrigger);


const locoscroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true},
    smartphone: { smooth: true},
});




ScrollTrigger.defaults({
    scroller: ".data-scroll-container"
});



gsap.from(".about-img-01",{
    x: 200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        toggleActions: "play none none none",
        markers: true,
    }
});
