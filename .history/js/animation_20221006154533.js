gsap.registerPlugin(ScrollTrigger);


// const locoscroll = new LocomotiveScroll({
//     el:document.querySelector("[data-scroll-container]"),
//     smooth: true,
//     tablet: { smooth: true},
//     smartphone: { smooth: true},
// });




// ScrollTrigger.defaults({
//     scroller: ".data-scroll-section"
// });




gsap.from(".about-img-01",{
    y: 200,
    opacity: 0.7,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        scrub: 1,
        toggleActions: "restart none none none",
    }
});


gsap.from(".about-img-02",{
    x: -200,
    opacity: 0.7,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        scrub: 1,
        toggleActions: "restart none none complete",
    }
});

gsap.from(".about-img-03",{
    x: 100,
    opacity: 0.7,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        scrub: 1,
        toggleActions: "restart none none complete",
    }
});

gsap.from(".about-img-04",{
    x: 100,
    opacity: 0.7,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        scrub: 1,
        toggleActions: "restart none none complete",
    }
});

gsap.from(".about-img-05",{
    x: -150,
    opacity: 0.7,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        scrub: 1,
        toggleActions: "restart none none complete",
    }
});


gsap.from(".about-img-06",{
    y: -150,
    opacity: 0.7,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        scrub: 1,
        toggleActions: "restart none none complete",
    }
});

gsap.from(".about-info",{
    scale: 0,
    opacity: 0,
    duration: 2.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".about-etienne",
        toggleActions: "restart none none complete",
    }
});


gsap.from(".category-title",{
    y: -200,
    opacity: 0,
    duration: 2.5,
    ease: "expo.out(1.7)",
    scrollTrigger: {
        trigger: ".about-etienne",
        start: "20%",
        scrub: 3,
        toggleActions: "restart none none none",
    }
});

var tlCategory = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-etienne",
        toggleActions: "restart complete none complete",
        start: "50%",
        end: "90%",
        scrub: 3,
        markers: true,
    }
});

tlCategory.from(".category1", {
    duration: 1, 
    x: 100,
    opacity: 0,
})

  .from(".category2", {
    duration: 1,
    x: 100,
    opacity: 0,
})

  .from(".category3", {
    duration: 1, 
    x: 100,
    opacity: 0,
})

  .from(".category4", {
    duration: 1,
    x: 100,
    opacity: 0,
});