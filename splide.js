function slider1() {
  let splides = $(".pillars");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 3,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "2rem", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 1200, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 1200,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 2
        },
        767: {
          // Mobile Landscape
          perPage: 2,
          gap: "1rem",
          autoWidth: true // for cards with differing widths
        },
        479: {
          // Mobile Portrait
          perPage: 1
        }
      }
    }).mount();
  }
}
slider1();

function slider2() {
  let splides = $(".investors");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 5,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "2rem", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 1200, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 1200,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 4
        },
        767: {
          // Mobile Landscape
          perPage: 2,
          gap: "1rem",
          autoWidth: true
        },
        479: {
          // Mobile Portrait
          perPage: 2,
          autoWidth: true
        }
      }
    }).mount();
  }
}
slider2();
