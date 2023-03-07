gsap.registerPlugin(ScrollTrigger);

// Animation only works on desktop monitors
if (window.innerWidth >= 992) {
  //add scroll animation on each image with the parallax attribute
  document.querySelectorAll("[parallax=image]").forEach((item) => {
    //use index of element to determine the scrub speed for better parallax effect
    var index = Array.from(item.parentNode.children).indexOf(item);
    if (index > 2) {
      index = index * 0.5;
    }

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: index
      }
    });

    tl.to(item, {
      y: "-50%",
      duration: 1
    });
  });
}
