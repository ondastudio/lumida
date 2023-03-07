//reducing opacity on slider elements that are outside of the viewport
$(document).ready(function () {
  const sliders = document.querySelectorAll("[data-slide='opacity']");
  const leftArrow = document.querySelector("[data-slide='left']");
  const rightArrow = document.querySelector("[data-slide='right']");

  //always checking if slides are in view with tick function
  const tick = () => {
    sliders.forEach((slide) => {
      const rect = slide.getBoundingClientRect();

      //checks if slide is out of the viewport on both left and right side
      if (rect.right > window.innerWidth || rect.left < 0) {
        slide.classList.add("opacity-30");
      } else {
        slide.classList.remove("opacity-30");
      }
    });
    window.requestAnimationFrame(tick);
  };
  tick();
});
