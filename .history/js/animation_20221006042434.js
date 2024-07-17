const scroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true},
    smartphone: { smooth: true},
});


gsap.registerPlugin(ScrollTrigger);

gsap.to(".about-img-01", {
    x: 300, 
    duration: 2,
    scrollTrigger: {
        trigger: ".about-etienne",
        start: "top 30%",
        end: "center 20%",
        markets: true,
    }
})