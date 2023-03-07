document.addEventListener("DOMContentLoaded", () => {
  //get nav component
  const navBar = document.querySelector(".nav");

  let dark;
  if (navBar.classList.contains("dark")) dark = true;

  //toggleNav
  $(".nav_menu-icon").on("click", function () {
    $(navBar).toggleClass("open");

    if (navBar.classList.contains("open")) {
      navBar.classList.remove("dark");
    }

    if (
      !navBar.classList.contains("open") &&
      !navBar.classList.contains("scrolled") &&
      dark === true
    ) {
      navBar.classList.add("dark");
    }

    checkDark();
  });

  //setting up nav
  //check if nav is dark on page
  const checkDark = () => {
    if (navBar.classList.contains("dark")) {
      gsap.set(".nav-brand", { color: "#102346" });
      gsap.set(".nav_menu-icon_line", { backgroundColor: "#102346" });
      gsap.set(".nav_button-outline", { color: "#102346" });
      gsap.set(".nav_button-outline", { borderColor: "#102346" });
      gsap.set(".is-white", { color: "#102346" });
    } else {
      gsap.set(".nav-brand", { color: "#fff" });
      gsap.set(".nav_menu-icon_line", { backgroundColor: "#fff" });
      gsap.set(".nav_button-outline", { color: "#fff" });
      gsap.set(".nav_button-outline", { borderColor: "#fff" });
      gsap.set(".is-white", { color: "#fff" });
    }
  };

  checkDark();

  //set scroll initial state
  gsap.set(".nav-wrapper-bg", { height: "0%" });

  const navScroll = new gsap.timeline({
    scrollTrigger: {
      trigger: $(".main").children(":first"),
      start: "bottom top",
      onEnterBack: () => {
        navScroll.reverse();
        navBar.classList.remove("scrolled");
      },
      onLeave: () => {
        navBar.classList.add("scrolled");
      }
    }
  });

  navScroll.paused(true);

  navScroll
    .to(".nav-wrapper-bg", {
      height: "100%",
      duration: 0.5,
      ease: Expo.easeOut
    })
    .to(".nav-brand", { color: "#fff", duration: 0.3 }, "<")
    .to(".is-white", { color: "#fff", duration: 0.3 }, "<")
    .to(".nav_button-outline", { color: "#fff", duration: 0.3 }, "<")
    .to(".nav_button-outline", { borderColor: "#fff", duration: 0.3 }, "<")
    .to(".nav_menu-icon_line", { backgroundColor: "#fff", duration: 0.3 }, "<");
});
