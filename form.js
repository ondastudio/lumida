document.addEventListener("DOMContentLoaded", () => {
  //gett input wrappers
  let inputWrappers = document.querySelectorAll(".input-wrapper");

  inputWrappers.forEach((inputWrapper) => {
    //get theplaceholder and the label to move the placeholder into
    let placeHolder = inputWrapper.querySelector(".placeholder div");
    let label = inputWrapper.querySelector(".label");
    let input = inputWrapper.querySelector("input");
    label.innerHTML = "";

    //setting the placeholder text on mobile view
    if (window.innerWidth < 768) {
      input.setAttribute("placeholder", placeHolder.innerText);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        input.setAttribute("placeholder", placeHolder.innerText);
      }

      if (window.innerWidth >= 768) {
        input.setAttribute("placeholder", "");
      }
    });

    const flipLabel = () => {
      let state = Flip.getState(placeHolder);
      label.appendChild(placeHolder);
      Flip.from(state, {
        duration: 0.5,
        ease: "power5.out"
      });
    };

    //move placeholder
    ["focus", "click"].forEach((e) => {
      input.addEventListener(e, flipLabel);
    });
  });
});
