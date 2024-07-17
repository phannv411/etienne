const locoscroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true},
    smartphone: { smooth: true},
});


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    scroller: ".data-scroll-container"
  })


locoScroll.on("scroll", ScrollTrigger.update);


gsap.from(".about-title",{
    x: 80,
    duration: 3,


})