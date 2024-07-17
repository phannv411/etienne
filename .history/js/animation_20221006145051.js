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

locoScroll.on("scroll", ScrollTrigger.update);


gsap.from(".about-img-01",{
    y: 200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
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
        toggleActions: "restart none none complete",
    }
});

gsap.from(".about-img-03",{
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        toggleActions: "restart none none complete",
    }
});

gsap.from(".about-img-04",{
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        toggleActions: "restart none none complete",
    }
});

gsap.from(".about-img-05",{
    x: -150,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        toggleActions: "restart none none complete",
    }
});


gsap.from(".about-img-06",{
    y: -150,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        toggleActions: "restart none none complete",
    }
});

gsap.from(".about-info",{
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "back.In",
    scrollTrigger: {
        trigger: ".about-etienne",
        toggleActions: "restart none none complete",
    }
})

