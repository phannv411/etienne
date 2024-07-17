window.addEventListener("load", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.75,
    scrollFromAnywhere: true,
  });
});
setTimeout(() => {
  scroll.update();
}, 5000);
  

  
  
// locoScroll.on("scroll", ScrollTrigger.update);
//   ScrollTrigger.scrollerProxy("[data-scroll-container]", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, 
//     getBoundingClientRect() {
//    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
//   });
//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
  
//   ScrollTrigger.defaults({
//     scroller: "[data-scroll-container]"
//   });
