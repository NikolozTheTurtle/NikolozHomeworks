let buttons = document.querySelectorAll(".bi-chevrons");
let pageCount = document.querySelectorAll(".carousel-page").length;
let ballDiv = document.querySelector(".balls");
let pages = document.querySelector(".car-pages");

// adds the same number of balls as the carousel pages are START!!!
for (let i = 1; i <= pageCount; i++) {
  if (i == 1) {
    ballDiv.innerHTML += `<div class="ball active-ball" data-id="${i}"></div>`;
  } else {
    ballDiv.innerHTML += `<div class="ball" data-id="${i}"></div>`;
  }
}
// adds the same number of balls as the carousel pages are END!!!

// changes pages via the balls START!!!
let ballsSec = document.querySelectorAll(".ball");
ballsSec.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.matches(".active-ball")) {
      ballsSec.forEach((smallEl) => {
        smallEl.classList.remove("active-ball");
      });
      el.classList.add("active-ball");
      document.querySelectorAll(".carousel-page").forEach((medEl) => {
        medEl.classList.remove("active");
      });
      let x = el.getAttribute("data-id");
      pages.children[x - 1].classList.add("active");
    }
  });
});
// changes pages via the balls END!!!

// changes pages via the arrows START!!!
buttons.forEach((el) => {
  el.addEventListener("click", function () {
    let nowBall = document.querySelector(".active-ball");
    let nowPage = document.querySelector(".active");
    let balls = document.querySelector(".balls");
    if (el.getAttribute("data-type") == 1) {
      nowBall.classList.remove("active-ball");
      if (nowBall.nextElementSibling != null) {
        nowBall.nextElementSibling.classList.add("active-ball");
      } else {
        balls.children[0].classList.add("active-ball");
      }
      nowPage.classList.remove("active");
      if (nowPage.nextElementSibling != null) {
        nowPage.nextElementSibling.classList.add("active");
      } else {
        pages.children[0].classList.add("active");
      }
    } else {
      nowBall.classList.remove("active-ball");
      if (nowBall.previousElementSibling != null) {
        nowBall.previousElementSibling.classList.add("active-ball");
      } else {
        balls.children[balls.children.length - 1].classList.add("active-ball");
      }
      nowPage.classList.remove("active");
      if (nowPage.previousElementSibling != null) {
        nowPage.previousElementSibling.classList.add("active");
      } else {
        pages.children[balls.children.length - 1].classList.add("active");
      }
    }
  });
});
// changes pages via the arrows END!!!
