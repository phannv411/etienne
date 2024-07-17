gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true, 
    tablet: { smooth: true},
    smartphone: { smooth: true},
    lerp: .07, 
  });
  

  
  
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
   return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  ScrollTrigger.defaults({
    scroller: "[data-scroll-container]"
  });



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
        trigger: ".category-title",
        start: "-20%",
        scrub: 3,
        toggleActions: "restart none none none",
    }
});

var tlCategory = gsap.timeline({
    scrollTrigger: {
        trigger: ".category-title",
        toggleActions: "restart complete none complete",
        start: "-20%",
        scrub: 5,
    }
});

tlCategory.from(".category1", {
    duration: 0.5, 
    x: 100,
    opacity: 0,
    ease: "sine.out(1)",
})

  .from(".category2", {
    duration: 0.5,
    x: 100,
    opacity: 0,
    ease: "sine.out(1)",
})

  .from(".category3", {
    duration: 0.5, 
    x: 100,
    opacity: 0,
    ease: "sine.out(1)",
})

  .from(".category4", {
    duration: 0.5,
    x: 100,
    opacity: 0,
    ease: "sine.out(1)",
});


var tlLookbook = gsap.timeline({
    scrollTrigger: {
        trigger: ".category-section",
        toggleActions: "restart complete none complete",
        start: "20%",
        end: "70%",
        scrub: 5,
    }
});


tlLookbook.from(".left-section", {
    duration: 1, 
    x: -100,
    opacity: 0,
})

    .from(".right-section", {
    duration: 2,
    y: -100,
    opacity: 0,
});


gsap.from(".product-ft-title",{
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "expo.out(1.7)",
    scrollTrigger: {
        trigger: ".home-lookbook",
        start: "5%",
        scrub: 1,
        toggleActions: "restart none none none",
    }
});


var tlftProduct = gsap.timeline({
    scrollTrigger: {
        trigger: ".home-lookbook",
        toggleActions: "restart complete none complete",
        start: "40%",
        end: "85%",
        scrub: 4,
        markers: true,
    }
});

tlftProduct.from(".cardproduct4", {
    duration: 1, 
    x: -100,
    ease: "power1.out",
    opacity: 0,
})

    .from(".cardproduct3", {
    duration: 1, 
    x: -100,
    ease: "power1.out",
    opacity: 0,
})

.from(".cardproduct2", {
    duration: 1, 
    x: -100,
    ease: "power1.out",
    opacity: 0,
})

.from(".cardproduct1", {
    duration: 1, 
    x: -100,
    ease: "power1.out",
    opacity: 0,
})

.from(".cardproduct5", {
    duration: 1, 
    x: 100,
    ease: "power1.out",
    opacity: 0,
})

.from(".cardproduct6", {
    duration: 1, 
    x: 100,
    ease: "power1.out",
    opacity: 0,
})

.from(".cardproduct7", {
    duration: 1, 
    x: 100,
    ease: "power1.out",
    opacity: 0,
})

.from(".cardproduct8", {
    duration: 1, 
    x: 100,
    ease: "power1.out",
    opacity: 0,
});




