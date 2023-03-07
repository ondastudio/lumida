document.addEventListener("DOMContentLoaded", () => {
  //store all the number counters into an object
  const numbersObj = document.querySelectorAll("[data-counter='number']");
  let numbers = [];

  //convert the object to an array so we can use indexOf to get the number
  numbersObj.forEach((number) => {
    numbers.push(number);
  });

  //assign the index to each number
  numbers.forEach((number) => {
    let index = numbers.indexOf(number);
    index++;

    //formating the number below 10
    let numIdx;

    if (index < 10) {
      numIdx = ("0" + index).toString();
    } else {
      numIdx = index;
    }

    number.innerHTML = numIdx;
  });
});
