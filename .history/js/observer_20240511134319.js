/////////----------------------HEADER CHANGE COLOR----------------------------
const header = document.querySelector(".header-desktop");
const headermb = document.querySelector(".header-mobile");
const sectionBanner = document.querySelector(".sectionBanner");


const sectionBannerOptions = {
    rootMargin: "-800px 0px 0px 0px"
};


const sectionBannerObserver =  new IntersectionObserver
(function(
  entries, 
  sectionBannerObserver
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.remove("nav-transparent");
        headermb.classList.remove("navmb-transparent");
      } else {
        header.classList.add("nav-transparent");
        headermb.classList.add("navmb-transparent");
      }
    })
  }, 
  sectionBannerOptions);

sectionBannerObserver.observe(sectionBanner);



