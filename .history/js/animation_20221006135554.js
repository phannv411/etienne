const locoscroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true},
    smartphone: { smooth: true},
});


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    scroller: ".smooth-scroll"
  })