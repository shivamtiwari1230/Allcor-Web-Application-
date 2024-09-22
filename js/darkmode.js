let light = document.querySelectorAll(".text-light");

let el = light[3];
el.setAttribute("class", "text-light copyright");

let topScroll = document.querySelector(".scroll-to-top");
// console.log(topScroll);

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 400) {
    topScroll.style.display = "block";
  } else {
    topScroll.style.display = "none";
  }
});

topScroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// footer

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    scroller: "body",
  },
});

tl5.from(
  ".f_logo-box, .f_logo_text p ,.fs_heading, .f_menu",
  {
    y: -300,
    duration: 2,
    delay: 0,
    opacity: 0,
    stagger: 0.15,
  },
  "-=0.5"
);
// footer end


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger",
    scroller: "body",
    start: "top center", // Adjust start position
    end: "bottom center",
    once: true, // Triggers animation only once
  },
});

tl.from("#trigger .para_first p, #trigger .btn_first", {
  y: 300,
  duration: 2,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.out", // Add easing for a smoother effect
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#laminate",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    once: true, 
  },
});

tl2.from(
  "#laminate .heading_title_second, #laminate .span_first, #laminate .first_h4, #laminate .first_h4 p, #laminate .btn_first",
  {
    y: 300,
    duration: 2,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out", // Add easing for a smoother effect
  }
);

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#laminate1",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    once: true, 
  },
});

tl3.from(
  "#laminate1 .heading_title_second, #laminate1 .span_first, #laminate1 .first_h4, #laminate1 .first_h4 p, #laminate1 .btn_first",
  {
    y: 300,
    duration: 2,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out",
  }
);

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#laminate2",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    once: true,
  },
});

tl4.from(
  "#laminate2 .heading_title_second, #laminate2 .span_first, #laminate2 .first_h4, #laminate2 .first_h4 p, #laminate2 .btn_first",
  {
    y: 300,
    duration: 2,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out",
  }
);


// about
let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#trigger-about",
      scroller: "body",
      start: "top center",
      end: "bottom center",
      once: true,
    },
  });
  
  tl6.from(
    "#trigger-about .first_h4 P, #trigger-about h2, #trigger-about h3",
    {
      y: 300,
      duration: 2,
      opacity: 0,
      delay: 0,
      stagger: 0.15,
      ease: "power2.out",
    }
  );
