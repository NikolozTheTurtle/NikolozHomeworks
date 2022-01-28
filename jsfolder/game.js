let btns = document.querySelectorAll(".lvl-btn");
let ball = document.querySelector(".ball");
let reset = document.querySelector(".change");
let again = document.querySelector(".again");
let point = 0;
let winnerPoint = 5;

btns.forEach((el) => {
  el.addEventListener("click", function () {
    let level = el.getAttribute("data-lvl");
    document.querySelector(".start-screen").classList.add("hidden");
    document.querySelector(".change").classList.add("change-shown");
    document.querySelector(".points").classList.add("points-shown");
    document.querySelector(".points").innerHTML = `Points: 0`;
    document.querySelector(".safe-zone").classList.add("s-zone-act");
    if (level == 0) {
      ball.classList.add("ball-easy");
    } else if (level == 1) {
      ball.classList.add("ball-normal");
    } else if (level == 2) {
      ball.classList.add("ball-hard");
    } else {
      ball.classList.add("ball-insane");
    }
  });
});
reset.addEventListener("click", function () {
  document.querySelector(".start-screen").classList.remove("hidden");
  document.querySelector(".change").classList.remove("change-shown");
  document.querySelector(".points").classList.remove("points-shown");
  document.querySelector(".safe-zone").classList.remove("s-zone-act");
  ball.classList.remove("ball-easy");
  ball.classList.remove("ball-normal");
  ball.classList.remove("ball-hard");
  ball.classList.remove("ball-insane");
  point = 0;
});

document.addEventListener("click", function (ele) {
  let obj = ele.target;
  let safeWidth = document
    .querySelector(".safe-zone")
    .getBoundingClientRect().width;
  let safeHeight = document
    .querySelector(".safe-zone")
    .getBoundingClientRect().height;
  if (obj.classList[0] == "ball") {
    if (
      obj.getBoundingClientRect().bottom >
        safeWidth + obj.getBoundingClientRect().width ||
      obj.getBoundingClientRect().right >
        safeHeight + obj.getBoundingClientRect().height
    ) {
      obj.classList.add("green");
      setTimeout(delGreen, 1000);
      function delGreen() {
        obj.classList.remove("green");
      }
      point++;
      setTimeout(winner, 300);
      function winner() {
        if (point == winnerPoint) {
          document.querySelectorAll("div").forEach((el) => {
            el.classList.add("d-none");
          });
          document.querySelector(".change").classList.add("d-none");
          document.querySelector(".points").classList.add("d-none");
          document.querySelector(".win-text").classList.add("win-text-win");
        }
      }
      console.log();
      document.querySelector(".points").innerHTML = `Points: ${point}`;
    }
  }
});

// play again click event START!!!
again.addEventListener("click", function () {
  document.querySelector(".start-screen").classList.remove("d-none");
  document.querySelector(".start-screen").classList.remove("hidden");
  document.querySelector(".win-text").classList.remove("d-none");
  document.querySelector(".win-text").classList.remove("win-text-win");
  document.querySelector(".safe-zone").classList.remove("d-none");
  document.querySelector(".safe-zone").classList.remove("s-zone-act");
  document.querySelector(".points").classList.remove("d-none");
  document.querySelector(".points").classList.remove("points-shown");
  document.querySelector(".change").classList.remove("d-none");
  document.querySelector(".change").classList.remove("change-shown");
  ball.classList.remove("ball-normal");
  ball.classList.remove("d-none");
  ball.classList.remove("ball-easy");
  ball.classList.remove("ball-hard");
  ball.classList.remove("ball-insane");
  point = 0;
});
// play again click event END!!!

function winner(p) {
  if (p == winnerPoint) {
    document.querySelectorAll("div").forEach((el) => {
      el.classList.add("d-none");
    });
    document.querySelector(".change").classList.add("d-none");
    document.querySelector(".points").classList.add("d-none");
    document.querySelector(".win-text").classList.add("win-text-win");
  }
}
