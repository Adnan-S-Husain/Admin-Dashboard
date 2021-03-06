"use strict";
let check = 1;
document.querySelector(".tog").addEventListener("click", function () {
  if (check === 1) {
    document.querySelector(".main1").style.width = "100%";
    check = 0;
    if (window.innerWidth < 500 || window.screen.width < 500) {
      document.querySelector(".main1").style.visibility = "visible";
      document.querySelector("#sb").classList.remove("side-bar");
      document.querySelector(".navbar-toggler").classList.remove("tog-small");
      document.querySelector("body").classList.remove("shrink");
    }
  } else if (
    window.innerWidth < 500 ||
    (window.screen.width < 500 && check === 0)
  ) {
    document.querySelector(".main1").style.visibility = "hidden";
    document.querySelector(".navbar-toggler").style.visibility = "visible";
    document.querySelector("#sb").classList.add("side-bar");
    document.querySelector(".navbar-toggler").classList.add("tog-small");
    document.querySelector("body").classList.add("shrink");
    check = 1;
  } else {
    check = 1;
  }
});

if (window.innerWidth < 650 || window.screen.width < 650) {
  document.querySelector(".navbar-toggler").click();
  document.querySelector("#search-small").style.display = "initial";
  document.querySelector("#search-big").style.display = "none";
}

window.addEventListener("resize", function () {
  if (window.innerWidth < 680) {
    document.querySelector("#search-small").style.display = "initial";
    document.querySelector("#search-big").style.display = "none";
  } else {
    document.querySelector("#search-small").style.display = "none";
    document.querySelector("#search-big").style.display = "flex";
  }
  if (check === 1 && window.innerWidth < 650) {
    document.querySelector(".navbar-toggler").click();
    check = 0;
  } else if (check === 0 && window.innerWidth == 650) {
    document.querySelector(".navbar-toggler").click();
    check = 1;
  }
});

try {
  document.querySelector("#left-arrow").addEventListener("click", function () {
    document.querySelector("#left-arrow").classList.replace("arrow2", "arrow1");
    document
      .querySelector("#right-arrow")
      .classList.replace("arrow1", "arrow2");
  });
  document.querySelector("#right-arrow").addEventListener("click", function () {
    document
      .querySelector("#right-arrow")
      .classList.replace("arrow2", "arrow1");
    document.querySelector("#left-arrow").classList.replace("arrow1", "arrow2");
  });
} catch (err) {}
