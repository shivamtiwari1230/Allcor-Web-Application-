let light = document.querySelectorAll(".text-light");

let el = light[3];
el.setAttribute("class", "text-light copyright");

let desk = document.querySelectorAll(".desk h3");
//console.log(desk);

if (desk.length > 0) {
  desk[0].classList.add("line-style-2");
}

if (desk.length > 1) {
  desk[1].classList.add("line-style");
}

if (desk.length > 2) {
  desk[2].classList.add("line-style-1");
}

let deskOne = document.querySelectorAll(".first h3");
// console.log(desk);

deskOne.forEach((el) => {
  el.classList.add("line-style-1");
});

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

tl6.from("#trigger-about h3", {
  y: 300,
  duration: 2,
  opacity: 0,
  delay: 0,
  stagger: 0.15,
  ease: "power2.out",
});

// form validation

let buttonForm = document.querySelector(".button-area button");

buttonForm.addEventListener("click", (e) => {
  e.preventDefault();

  // Retrieve form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;

  // Regular expression patterns
  const namePattern = /^[A-Za-z0-9\s]{3,20}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^[6-9][\d]{9}$/;
  const subjectPattern = /^[a-zA-Z0-9\s.,!?'-]{3,100}$/;

  // Clear previous error messages
  let error = document.querySelectorAll(".error");
  error.forEach((element) => {
    element.innerText = "";    
  });

  // document.getElementById("nameError").innerText = "";
  // document.getElementById("emailError").innerText = "";
  // document.getElementById("telError").innerText = "";
  // document.getElementById("subjectError").innerText = "";

  let isValid = true;

  // Name validation
  if (!namePattern.test(name)) {
    document.getElementById("nameError").innerText =
      "Please enter a valid name (3 to 20 characters *";
    isValid = false;
  }

  // Email validation
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email *";
    isValid = false;
  }

  // Phone validation
  if (!phonePattern.test(phone)) {
    document.getElementById("telError").innerText =
      "Phone number must start with 6-9 and be 10 digits long *";
    isValid = false;
  }

  // Subject validation
  if (!subjectPattern.test(subject)) {
    document.getElementById("subjectError").innerText =
      "Subject must be 3 to 100 characters long *";
    isValid = false;
  }

  // Final form validation status

  if (isValid) {
    let formClass = document.getElementsByClassName("form-controll");
    Array.from(formClass).forEach((el) => {
      el.value = "";
    });

    alert("Form submitted successfully!");
  }
});
