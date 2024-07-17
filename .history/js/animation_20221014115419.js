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



  


// -----------------CATEGORY DESKTOP-----------------
gsap.from(".hero-slider",{
    scale: 0,
    opacity: 0,
    duration: 2,
    ease: "power.out(1.7)",
});

gsap.from(".header-desktop",{
    y: -80,
    opacity: 0,
    delay: 2,
    duration: 1,
    ease: "power.out(1.7)",
});

gsap.from(".about-etienne",{
    y: -200,
    opacity: 0,
    duration: 2.5,
    ease: "expo.out(1.7)",
    scrollTrigger: {
        trigger: ".hero-slider",
        start: "5%",
        scrub: 3,
        toggleActions: "restart none none none",
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
        end: "80%",
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

// -----------------CATEGORY MOBILE-----------------

var tlCategoryMB = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-etienne",
        toggleActions: "restart complete none complete",
        start: "30%",
        scrub: 3,
    }
});

tlCategoryMB.from(".category1-mb", {
    duration: 0.5, 
    y: 100,
    opacity: 0,
    ease: "sine.out(1)",
})

  .from(".category2-mb", {
    duration: 0.5,
    y: 100,
    opacity: 0,
    ease: "sine.out(1)",
})

  .from(".category3-mb", {
    duration: 0.5, 
    y: 100,
    opacity: 0,
    ease: "sine.out(1)",
})

  .from(".category4-mb", {
    duration: 0.5,
    y: 100,
    opacity: 0,
    ease: "sine.out(1)",
});



// -----------------LOOKBOOK-----------------

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
    x: 50,
    opacity: 0,
})

    .from(".right-section", {
    duration: 2,
    y: 50,
    opacity: 0,
});

gsap.from(".main-section-mb",{
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out(1.7)",
    scrollTrigger: {
        trigger: ".category-section-mb",
        start: "25%",
        scrub: 1,
        toggleActions: "restart none none none",
    }
});

gsap.from(".main-img-mb",{
    scale: 0,
    opacity: 0,
    duration: 2,
    ease: "power1.in(2)",
    scrollTrigger: {
        trigger: ".category-section-mb",
        start: "70%",
        scrub: 1,
        toggleActions: "restart none none none",
        
    }
});

// -----------------MEET OUR DESIGNERS-----------------
gsap.from("#designer-banner",{
    y: 300,
    opacity: 0,
    duration: 4,
    ease: "power1.in(2)",
    scrollTrigger: {
        trigger: ".product-ft",
        start: "20%",
        end: "40%",
        scrub: 1,
        toggleActions: "restart none none none",
        
    }
});

gsap.from(".designer-list-title",{
    y: 100,
    opacity: 0,
    duration: 2,
    ease: "power1.in(2)",
    scrollTrigger: {
        trigger: "#designer-banner",
        start: "-60%",
        end: "20%",
        scrub: 1,
        toggleActions: "restart none none none",
        
    }
});



// -----------------SUPPORT SECTION-----------------

var tlSupport = gsap.timeline({
    scrollTrigger: {
        trigger: "#designer-list-bg",
        toggleActions: "restart complete none complete",
        start: "10%",
        end: "45%",
        scrub: 4,
    }
});

tlSupport.from(".support-section", {
    duration: 1, 
    y: 100,
    ease: "sine.out(1)",
    opacity: 0,
})

    .from(".sp-title-left", {
    duration: 1, 
    x: -50,
    ease: "sine.out(1)",
    opacity: 0,
})

    .from(".sp-title-right", {
    duration: 1, 
    x: 50,
    ease: "sine.out(1)",
    opacity: 0,
})

    .from(".sp-question", {
    duration: 2, 
    scale: 0,
    ease: "sine.out(1)",
    opacity: 0,
});





















// -----------------------------MATCH MEDIA------------------------

ScrollTrigger.matchMedia({

    // Desktop
    "(min-width: 992px)": function() {

        // -----------------ABOUT SECTION-----------------

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
            y: 250,
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

        // -----------------Product Featured Desktop-----------------
        gsap.from(".product-ft-title",{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "expo.out(1.7)",
            scrollTrigger: {
                trigger: ".home-lookbook",
                start: "top",
                scrub: 4,
                toggleActions: "restart none none none",
            }
        });
        
        
        var tlftProductLine1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".home-lookbook",
                toggleActions: "restart complete none complete",
                start: "35%",
                end: "45%",
                scrub: 4,
            }
        });

        tlftProductLine1.from(".cardproduct4", {
            duration: 0.5, 
            x: -50,
            ease: "power1.out",
            opacity: 0,
        })
        
            .from(".cardproduct3", {
            duration: 0.5, 
            x: -50,
            ease: "power1.out",
            opacity: 0,
        })
        
        .from(".cardproduct2", {
            duration: 0.5, 
            x: -50,
            ease: "power1.out",
            opacity: 0,
        })

        .from(".cardproduct1", {
            duration: 0.5, 
            x: -50,
            ease: "power1.out",
            opacity: 0,
        })

        var tlftProductLine2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".home-lookbook",
                toggleActions: "restart complete none complete",
                start: "55%",
                end: "85%",
                scrub: 4,
            }
        });

        tlftProductLine2.from(".cardproduct5", {
            duration: 0.5, 
            x: 50,
            ease: "power1.out",
            opacity: 0,
        })
        
            .from(".cardproduct6", {
            duration: 0.5, 
            x: 50,
            ease: "power1.out",
            opacity: 0,
        })
        
        .from(".cardproduct7", {
            duration: 0.5, 
            x: 50,
            ease: "power1.out",
            opacity: 0,
        })

        .from(".cardproduct8", {
            duration: 0.5, 
            x: 50,
            ease: "power1.out",
            opacity: 0,
        })
      
        
        .from(".btn-fluid-secondary",{
            duration: 3,
            y: -50,
            ease: "sine.out(2)",
            opacity: 0,
        });
        

        // -----------------Desginer List Desktop-----------------

        var tlDesignerPC = gsap.timeline({
            scrollTrigger: {
                trigger: "#designer-banner",
                toggleActions: "restart complete none complete",
                start: "-10%",
                end: "60%",
                scrub: 4,
            }
        });
        
        tlDesignerPC.from(".designer-row.row1", {
            delay: 1,
            duration: 1, 
            x: -100,
            ease: "sine.out(1)",
            opacity: 0,
        })
        
            .from(".designer-row.row2", {
            duration: 1, 
            x: 100,
            ease: "sine.out(1)",
            opacity: 0,
        })
        
        .from(".designer-row.row3", {
            duration: 1, 
            x: -100,
            ease: "sine.out(1)",
            opacity: 0,
        })
        
        .from(".designer-row.row4", {
            duration: 1, 
            x: 100,
            ease: "sine.out(1)",
            opacity: 0,
        })

        .from(".designer-btn", {
            scale: 0,
            duration: 1, 
            ease: "sine.out(1)",
            opacity: 0,
        });

        gsap.from(".sp-table",{
            y: 100,
            opacity: 0,
            duration: 3,
            ease: "power1.in(2)",
            stagger: 1,
            scrollTrigger: {
                trigger: "#designer-list-bg",
                start: "45%",
                end: "80%",
                scrub: 1,
                toggleActions: "restart none none none",
                
            }
        });

        // -----------------Blog Featured Desktop-----------------
        var tlFtBlog = gsap.timeline({
            scrollTrigger: {
                trigger: ".support-section-table",
                toggleActions: "restart complete none complete",
                start: "-20%",
                end: "55%",
                scrub: 4,
            }
        });
        
        tlFtBlog.from(".blog-ft-header", {
            duration: 0.5, 
            y: 100,
            ease: "sine.out(1)",
            opacity: 0,
        })

        tlFtBlog.from(".blog-ft-pc", {
            delay: 0.5,
            duration: 1, 
            y: 100,
            ease: "sine.out(1)",
            opacity: 0,
        })

        tlFtBlog.from(".bottom-left", {
            duration: 0.5, 
            y:-50,
            ease: "sine.out(1)",
            opacity: 0,
        })

        tlFtBlog.from(".bottom-right", {
            scale: 0,
            duration: 0.5, 
            y:-50,
            ease: "sine.out(1)",
            opacity: 0,
        });
        


        gsap.from(".blog-card", {
            duration: 0.5, 
            x: 50,
            stagger: 0.2,
            ease: "sine.out(1)",
            opacity: 0,
            scrollTrigger: {
                trigger: ".blog-ft",
                toggleActions: "restart complete none complete",
                start: "-5%",
                end: "55%",
                scrub: 4,
            }
        });


        // -----------------BOTTOM BANNER-----------------

        gsap.from(".joinus-banner",{
            scale: 0,
            opacity: 0,
            duration: 3,
            ease: "power1.in(2)",
            scrollTrigger: {
                trigger: ".blog-list-bg",
                start: "-60%",
                end: "20%",
                scrub: 1,
                toggleActions: "restart none none none",
                
            }
        });


    },
  
  // Tablet--------------------------------------------
    "(min-width: 768px) and (max-width: 991px)": function() {

        gsap.from(".about-img-01",{
            y: 80,
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

        gsap.to(".about-img-04",{
            x: -50,
            opacity: 0.7,
            duration: 2,
            scrollTrigger: {
                trigger: ".about-etienne",
                scrub: 1,
                toggleActions: "restart none none complete",
            }
        });

        gsap.to(".about-img-05",{
            x: 50,
            opacity: 0.7,
            duration: 2,
            scrollTrigger: {
                trigger: ".about-etienne",
                scrub: 1,
                toggleActions: "restart none none complete",
            }
        });

        gsap.from(".about-img-06",{
            y: 250,
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

        // -----------------Product Featured Tablet-----------------
        gsap.from(".product-ft-title",{
            y: 200,
            opacity: 0,
            duration: 1,
            ease: "expo.out(1.7)",
            scrollTrigger: {
                trigger: ".main-section-mb",
                start: "5%",
                scrub: 1,
                toggleActions: "restart none none none",
            }
        });
        
        
        var tlftProduct = gsap.timeline({
            scrollTrigger: {
                trigger: ".img-section-mb",
                toggleActions: "restart complete none complete",
                start: "5%",
                end: "85%",
                scrub: 4,
            }
        });
        
        tlftProduct.from(".cardproduct3", {
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
      
        
        .from(".cardproduct4", {
            duration: 1, 
            x: 100,
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
        });


        gsap.from("#designer-list-mb",{
            y: 200,
            opacity: 0,
            duration: 1,
            ease: "expo.out(1.7)",
            scrollTrigger: {
                trigger: "#designer-banner",
                start: "5%",
                scrub: 1,
                toggleActions: "restart none none none",
            }
        });

        gsap.from(".designer-mb-bottom-text",{
            x: -200,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "expo.out(1.7)",
            scrollTrigger: {
                trigger: "#designer-banner",
                start: "20%",
                scrub: 1,
                toggleActions: "restart none none none",
            }
        });

        gsap.from(".designer-mb-bottom-button",{
            x: 200,
            opacity: 0,
            duration: 1,
            ease: "expo.out(1.7)",
            scrollTrigger: {
                trigger: "#designer-banner",
                start: "20%",
                scrub: 1,
                toggleActions: "restart none none none",
            }
        });

        gsap.from(".sp-table",{
            y: 100,
            opacity: 0,
            duration: 3,
            ease: "power1.in(2)",
            stagger: 2,
            scrollTrigger: {
                trigger: "#designer-list-mb",
                start: "20%",
                end: "50%",
                scrub: 1,
                toggleActions: "restart none none none",
                
            }
        });
        // -----------------Blog Featured Mobile-----------------
        var tlFtBlogMB = gsap.timeline({
            scrollTrigger: {
                trigger: ".support-section-table",
                toggleActions: "restart complete none complete",
                start: "-20%",
                end: "65%",
                scrub: 4,
            }
        });
        
        tlFtBlogMB.from(".blog-ft-header-mb", {
            duration: 0.5, 
            y: 50,
            ease: "sine.out(1)",
            opacity: 0,
        })

        tlFtBlogMB.from(".top-part", {
            delay: 0.5,
            duration: 1, 
            y: 50,
            ease: "sine.out(1)",
            opacity: 0,
        })

        tlFtBlogMB.from(".img-ft-mb", {
            duration: 2, 
            scale: 0,
            ease: "sine.out(5)",
            opacity: 0,
        })

        tlFtBlogMB.from(".blog-ft-content-mb", {
            duration: 0.5, 
            y:50,
            stagger: 2,
            ease: "sine.out(1)",
            opacity: 0,
        })

        tlFtBlogMB.from(".blog-ft-content-mb a", {
            duration: 0.5, 
            scale: 0.5,
            ease: "sine.out(1)",
            opacity: 0,
        })
        
        gsap.from(".blog-card", {
            duration: 0.5, 
            x: 50,
            stagger: 0.2,
            ease: "sine.out(1)",
            opacity: 0,
            scrollTrigger: {
                trigger: ".blog-ft-mb",
                toggleActions: "restart complete none complete",
                start: "-5%",
                end: "55%",
                scrub: 4,
            }
        });

        // -----------------BOTTOM BANNER-----------------

        gsap.from(".joinus-banner",{
            scale: 0,
            opacity: 0,
            duration: 3,
            ease: "power1.in(2)",
            scrollTrigger: {
                trigger: ".blog-list-bg",
                start: "-60%",
                end: "20%",
                scrub: 1,
                toggleActions: "restart none none none",
                
            }
        });


        
    },
      
    // Mobile--------------------------------------------------------
    "(max-width: 767px)": function() {

        gsap.from(".about-img-01",{
            y: 80,
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

        gsap.to(".about-img-04",{
            x: -50,
            opacity: 0.7,
            duration: 2,
            scrollTrigger: {
                trigger: ".about-etienne",
                scrub: 1,
                toggleActions: "restart none none complete",
            }
        });

        gsap.to(".about-img-05",{
            x: 50,
            opacity: 0.7,
            duration: 2,
            scrollTrigger: {
                trigger: ".about-etienne",
                scrub: 1,
                toggleActions: "restart none none complete",
            }
        });

        gsap.from(".about-img-06",{
            y: 250,
            opacity: 0.7,
            duration: 2,
            scrollTrigger: {
                trigger: ".about-etienne",
                scrub: 1,
                toggleActions: "restart none none complete",
            }
        });

        

        // -----------------Product Featured Mobile-----------------
        gsap.from(".product-ft-title",{
            y: 200,
            opacity: 0,
            duration: 1,
            ease: "expo.out(1.7)",
            scrollTrigger: {
                trigger: ".main-section-mb",
                start: "5%",
                scrub: 1,
                toggleActions: "restart none none none",
            }
        });
        
        
        var tlftProduct = gsap.timeline({
            scrollTrigger: {
                trigger: ".img-section-mb",
                toggleActions: "restart complete none complete",
                start: "5%",
                end: "85%",
                scrub: 4,
            }
        });
        
        tlftProduct.from(".cardproduct2", {
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
        
        
        .from(".cardproduct3", {
            duration: 1, 
            x: 100,
            ease: "power1.out",
            opacity: 0,
        })
        
        .from(".cardproduct4", {
            duration: 1, 
            x: 100,
            ease: "power1.out",
            opacity: 0,
        });

        gsap.from("#designer-list-mb",{
            y: 200,
            opacity: 0,
            duration: 1,
            ease: "expo.out(1.7)",
            scrollTrigger: {
                trigger: "#designer-banner",
                start: "5%",
                scrub: 1,
                toggleActions: "restart none none none",
            }
        });

        gsap.from(".designer-mb-bottom-text",{
            x: -200,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "expo.out(1.7)",
            scrollTrigger: {
                trigger: "#designer-banner",
                start: "20%",
                scrub: 1,
                toggleActions: "restart none none none",
            }
        });

        gsap.from(".designer-mb-bottom-button",{
            x: 200,
            opacity: 0,
            duration: 1,
            ease: "expo.out(1.7)",
            scrollTrigger: {
                trigger: "#designer-banner",
                start: "20%",
                scrub: 1,
                toggleActions: "restart none none none",
            }
        });

        gsap.from(".sp-table",{
            y: 100,
            opacity: 0,
            duration: 3,
            ease: "power1.in(2)",
            stagger: 2,
            scrollTrigger: {
                trigger: "#designer-list-mb",
                start: "20%",
                end: "50%",
                scrub: 1,
                toggleActions: "restart none none none",
                
            }
        });

        // -----------------Blog Featured Mobile-----------------
        var tlFtBlogMB = gsap.timeline({
            scrollTrigger: {
                trigger: ".support-section-table",
                toggleActions: "restart complete none complete",
                start: "-20%",
                end: "65%",
                scrub: 4,
            }
        });
        
        tlFtBlogMB.from(".blog-ft-header-mb", {
            duration: 0.5, 
            y: 50,
            ease: "sine.out(1)",
            opacity: 0,
        })

        tlFtBlogMB.from(".top-part", {
            delay: 0.5,
            duration: 1, 
            y: 50,
            ease: "sine.out(1)",
            opacity: 0,
        })

        tlFtBlogMB.from(".img-ft-mb", {
            duration: 1, 
            scale: 0,
            ease: "sine.out(5)",
            opacity: 0,
        })

        tlFtBlogMB.from(".blog-ft-content-mb", {
            duration: 0.5, 
            y:50,
            stagger: 2,
            ease: "sine.out(1)",
            opacity: 0,
        });

        gsap.from(".blog-card", {
            duration: 0.5, 
            x: 50,
            stagger: 0.2,
            ease: "sine.out(1)",
            opacity: 0,
            scrollTrigger: {
                trigger: ".blog-ft-mb",
                toggleActions: "restart complete none complete",
                start: "-5%",
                end: "55%",
                scrub: 4,
            }
        });

        gsap.from(".joinus-banner",{
            scale: 0,
            opacity: 0,
            duration: 3,
            ease: "power1.in(2)",
            scrollTrigger: {
                trigger: ".blog-list-bg",
                start: "50%",
                end: "80%",
                scrub: 1,
                toggleActions: "restart none none none",
                
            }
        });
        
    }

        
      
  }); 
