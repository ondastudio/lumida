gsap.registerPlugin(ScrollTrigger);

/*
  Showing and hiding the floating label on scroll
*/

let floatingLabel = document.querySelector(".floating-mail-button");
const footer = document.querySelector(".section-footer");

//setting the floating label to hidden when the page loads
gsap.set(floatingLabel, {
  display: "none",
  opacity: 0
});

//floating menu animation
let showFloatingLabel = new gsap.timeline({
  scrollTrigger: {
    trigger: ".section-home_hero",
    start: "bottom top",
    onEnterBack: () => {
      showFloatingLabel.reverse();
    }
  }
});

//hide floating label when you scroll into the footer
let hideFloatingLabel = new gsap.timeline({
  scrollTrigger: {
    trigger: footer,
    onEnter: () => {
      showFloatingLabel.reverse();
    },
    onLeaveBack: () => {
      showFloatingLabel.restart();
    }
  }
});

//show floating label
showFloatingLabel
  .to(floatingLabel, {
    display: "flex"
  })
  .to(floatingLabel, {
    opacity: 1,
    duration: 0.5
  });

// Grid Image Move 2
// $(".grid_item:nth-child(3n+2)").each(function (index) {
//   let triggerElement = $(this);
//   let targetElement = $(this);

//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: triggerElement,
//       // trigger element - viewport
//       start: "top bottom",
//       end: "bottom top",
//       scrub: 2
//     }
//   });
//   tl.to(targetElement, {
//     y: "-50%",
//     duration: 1
//   });
// });

// Grid Image Move 3
// $(".grid_item:nth-child(3n+3)").each(function (index) {
//   let triggerElement = $(this);
//   let targetElement = $(this);

//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: triggerElement,
//       // trigger element - viewport
//       start: "top bottom",
//       end: "bottom top",
//       scrub: 1.5
//     }
//   });
//   tl.to(targetElement, {
//     y: "-70%",
//     duration: 1
//   });
// });
