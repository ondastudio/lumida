const nextButtons = document.querySelectorAll('[validation="next"]');
const slides = document.querySelectorAll('[validation="slide"]');

nextButtons.forEach((item) => {
  item.classList.add("is-disabled");
});

//enabling and disabling next buttons on each slide
const enableButtons = (buttons) => {
  buttons.forEach((item) => {
    item.classList.remove("is-disabled");
    item.classList.add("is-active");
  });
};

const disableButtons = (buttons) => {
  buttons.forEach((item) => {
    item.classList.add("is-disabled");
    item.classList.remove("is-active");
  });
};

/*
FORM VALIDATION FOR THE FIRST SLIDE
*/
//gather all the radio buttons in one input
let radioButtons = document.querySelectorAll('[validation="radio"]');

//radio button validation
const validateRadioButtons = (slide) => {
  //get the nex buttons on the current slide
  let slideRadioButtons = slide.querySelectorAll('[validation="radio"]');
  let slideNextButtons = slide.querySelectorAll('[validation="next"]');

  let checkedCounter = [...slideRadioButtons].filter((n) => n.checked === true);

  if (checkedCounter.length > 0) {
    enableButtons(slideNextButtons);
  } else {
    disableButtons(slideNextButtons);
  }
};

//adding event listeners to each radio button
radioButtons.forEach((item) => {
  item.addEventListener("click", () => {
    let currentSlide = item.closest('[validation="slide"]');
    validateRadioButtons(currentSlide);
  });
});

/*
  FORM VALIDATION FOR THE SECOND SLIDE
*/
//form validation for the second slide
let inputBoxes = document.querySelectorAll('[validation="input"]');

//validate input boxes
const validateInputBoxes = (slide) => {
  //get the nex buttons on the current slide
  let slideNextButtons = slide.querySelectorAll('[validation="next"]');
  let validCheck = true;

  inputBoxes.forEach((item) => {
    if (item.value.length < 1) {
      validCheck = false;
    }
  });

  if (validCheck === true) {
    enableButtons(slideNextButtons);
  } else {
    disableButtons(slideNextButtons);
  }
};

inputBoxes.forEach((item) => {
  item.addEventListener("focusout", () => {
    let currentSlide = item.closest('[validation="slide"]');
    validateInputBoxes(currentSlide);
  });

  item.addEventListener("keydown", () => {
    let currentSlide = item.closest('[validation="slide"]');
    validateInputBoxes(currentSlide);
  });
});

/*
  FORM VALIDATION FOR THE THIRD SLIDE
*/
//selecting elements on the third slide
let selectBoxes = document.querySelectorAll('[validation="select"]');
let radioButtons3 = document
  .querySelector('[validation="radio-3"]')
  .querySelectorAll('input[type="radio"]');

let checkBoxes = document
  .querySelector('[validation="check-3"]')
  .querySelectorAll('input[type="checkbox"]');

let input2 = document.querySelectorAll('[validation="input-2"]');

const validateSlide = (slide) => {
  //get the nex buttons on the current slide
  let slideNextButtons = slide.querySelectorAll('[validation="next"]');

  //track validation at different stages
  let validCheck = {
    selectBoxes: false,
    radioButtons: false,
    checkBoxes: false,
    textArea: false
  };

  //Validating dropdown boxes
  //if one of the select dropdowns aren't set then its invalid
  let selectBoxCounter = [...selectBoxes].filter((n) => n.selectedIndex > 0);

  if (selectBoxCounter.length < selectBoxes.length) {
    validCheck.selectBoxes = false;
  } else {
    validCheck.selectBoxes = true;
  }

  // console.log("Select Valid ", validCheck.selectBoxes);

  //validating radio buttons
  let radioButtons3Counter = [...radioButtons3].filter((n) => n.checked);
  if (radioButtons3Counter.length > 0) {
    validCheck.radioButtons = true;
  } else {
    validCheck.radioButtons = false;
  }

  // console.log("Check Valid ", validCheck.radioButtons);

  //validaton checkboxes
  let checkBoxesCounter = [...checkBoxes].filter((n) => n.checked);
  if (checkBoxesCounter.length > 0) {
    validCheck.checkBoxes = true;
  } else {
    validCheck.checkBoxes = false;
  }

  //validateText Areas
  let textAreaCounter = [...input2].filter((n) => n.value.length > 0);
  if (textAreaCounter.length < input2.length) {
    validCheck.textArea = false;
  } else {
    validCheck.textArea = true;
  }

  //check all validchecks
  let validCheckArray = Object.values(validCheck);
  if (
    [...validCheckArray].filter((n) => n === true).length !==
    validCheckArray.length
  ) {
    disableButtons(slideNextButtons);
  } else {
    enableButtons(slideNextButtons);
  }
};

//validate select boxes
selectBoxes.forEach((item) => {
  item.addEventListener("change", () => {
    let currentSlide = item.closest('[validation="slide"]');
    validateSlide(currentSlide);
  });
});

//validate radioButtons3
radioButtons3.forEach((item) => {
  item.addEventListener("change", () => {
    let currentSlide = item.closest('[validation="slide"]');
    validateSlide(currentSlide);
  });
});

//validation checkboxes
checkBoxes.forEach((item) => {
  item.addEventListener("change", () => {
    let currentSlide = item.closest('[validation="slide"]');
    validateSlide(currentSlide);
  });
});

//validate input field
input2.forEach((item) => {
  item.addEventListener("focusout", () => {
    let currentSlide = item.closest('[validation="slide"]');
    validateSlide(currentSlide);
  });
  item.addEventListener("keydown", () => {
    let currentSlide = item.closest('[validation="slide"]');
    validateSlide(currentSlide);
  });
});
