const scroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true},
    smartphone: { smooth: true},
});


gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-img-01", {
    x: 300, 
    duration: 8,
    scrollTrigger: {
        trigger: ".about-img-01",
        start: "top 30%",
        end: "center 20%",
        markets: true,
    }
})