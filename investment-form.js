// validate first slide
$(document).ready(function () {
  //Global functions to enable and disable buttons
  const enableButton = (el) => {
    el.classList.remove("disabled");
  };

  const disableButton = (el) => {
    el.classList.add("disabled");
  };

  const scrollTop = () => {
    gsap.to("html, body", {
      scrollTop: 0,
      duration: 0.5
    });
  };

  //using custom buttons to click the slider netx buttons
  const slideNextButtons = document.querySelectorAll("[validate='next']");
  slideNextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".investment_slider-arrow.next").click();
      scrollTop();
    });
  });

  const slidePrevButtons = document.querySelectorAll("[validate='prev']");
  slidePrevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".investment_slider-arrow.prev").click();
      scrollTop();
    });
  });

  //get slide
  const slide = document.querySelector("[validate='step-1']");

  //getting next button
  const nextButton = slide.querySelector("[validate='next']");
  disableButton(nextButton);

  //tooltip
  let toolTip = slide.querySelector("[validate='tooltip']");

  //get all the inputs that need to be validated
  const inputsObj = slide.querySelectorAll("[validate='input']");
  let inputs = [];

  //removing inputs from object to array to make them easier to work with
  inputsObj.forEach((input) => {
    inputs.push(input);
  });

  //validation array to keep track of number of valid inputs
  const validationArray = [];

  inputs.forEach((input) => {
    //setting the validation array to false when the code is loaded
    validationArray.push(false);
    input.addEventListener("input", () => {
      // const type = input.getAttribute("type");
      // if (type === "email") {
      //   validateEmail(input);
      // }
      validateInput(input);
    });
  });

  const validateInput = (el) => {
    //match index of input to validation array
    const index = inputs.indexOf(el);

    //turn validation array to true if input is filled
    if (el.value.length > 0) {
      validationArray[index] = true;
    } else {
      validationArray[index] = false;
    }

    //validate email
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    inputs.forEach((input) => {
      if (input.getAttribute("type") === "email") {
        //check if value is value
        if (input.value.match(emailValidation)) {
          validationArray[inputs.indexOf(input)] = true;
          input.classList.remove("invalid");
        } else {
          validationArray[inputs.indexOf(input)] = false;
          if (input.value.length > 0) {
            input.classList.add("invalid");
          } else {
            input.classList.remove("invalid");
          }
        }
      }
    });

    //filtering out the true until it matches the length of the inputs array
    //once the values are the same then all the inputs are valid
    const validFilter = [...validationArray].filter((n) => n === true);

    if (validFilter.length < inputs.length) {
      disableButton(nextButton);
    } else {
      enableButton(nextButton);
    }
  };
});

//resize the slider
$(document).ready(function () {
  //get sllider mask to adjust height
  const sliderMask = document.querySelector(".investment-form_slider-mask");

  //get all the slide heights
  const slidesObj = document.querySelectorAll(".investment-form_slide");
  var slides = [];
  var slideHeights = [];

  slidesObj.forEach((item) => {
    slides.push(item);
    slideHeights.push(item.offsetHeight);
  });

  //gsap.set(sliderMask, { height: slideHeights[0] });

  //using custom buttons to click the slider netx buttons
  const slideNextButtons = document.querySelectorAll("[validate='next']");

  // slideNextButtons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     //get next slide index
  //     let currSlide = button.closest(".investment-form_slide");
  //     let nextSlide = currSlide.nextSibling;
  //     let slideIdx = slides.indexOf(nextSlide);
  //     gsap.to(sliderMask, { height: slideHeights[slideIdx] });
  //   });
  // });

  const slidePrevButtons = document.querySelectorAll("[validate='prev']");
  // slidePrevButtons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     //get next prev index
  //     let currSlide = button.closest(".investment-form_slide");
  //     let prevSlide = currSlide.previousSibling;
  //     let slideIdx = slides.indexOf(prevSlide);
  //     gsap.to(sliderMask, { height: slideHeights[slideIdx] });
  //   });
  // });
});
