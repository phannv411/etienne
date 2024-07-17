const scroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true},
    smartphone: { smooth: true},
});


gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-img-01", {
    x: 300, 
    duration: 2,
    scrollTrigger: ".about-etienne",
    marker: true,
})