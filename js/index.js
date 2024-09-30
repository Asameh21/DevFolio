let navLinks = document.querySelectorAll(".nav-link");
let navBar = document.querySelector("nav");
let location2 = document.querySelector(".counter");
let counter = document.querySelectorAll(".counter .counter-num");
let arrow = document.querySelector(".go-top");
let location1 = document.querySelector("#about");
let progress = document.querySelectorAll(".progress-bar");

navLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    navLinks.forEach((el) => {
      el.classList.remove("active");
    });
    ele.classList.add("active");
  });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navBar.classList.add("trans-black");
  } else {
    navBar.classList.remove("trans-black");
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    arrow.style.visibility = "visible";
    arrow.style.opacity = 1;
  } else {
    arrow.style.visibility = "hidden";
    arrow.style.opacity = 0;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= location2.offsetTop - 400) {
    counter.forEach((ele) => {
      let counterint = setInterval(() => {
        if (parseInt(ele.textContent) < ele.dataset.num) {
          ele.textContent = parseInt(ele.textContent) + 1;
        } else {
          clearInterval(counterint);
        }
      }, 20);
    });
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= location1.offsetTop - 250) {
    progress.forEach((ele) => {
      ele.style.width = ele.dataset.goal;
    });
  }
});
