$(function () {
  // code for dark and light mode START!!!
  if (localStorage.getItem("mode") != null) {
      if (localStorage.getItem("mode") == "dark") {
          $("body").addClass("dark-mode");
      }else{
          $("body").removeClass("dark-mode");
      };
  };
  $(document).on("click", ".switch", function () {
    $("body").toggleClass("dark-mode");
    if ($("body")[0].classList.contains("dark-mode")) {
      localStorage.setItem("mode", "dark");
    }else{
      localStorage.setItem("mode", "light");
    }
  });
  // code for dark and light mode END!!!

  // code for input adder and remover START!!!
  $(document).on("click", ".btn-add", function () {
    $(`<div class="input-row">
    <input type="text"><button type="button" class="btn-remove">Remove</button>
</div>`).appendTo(".input-grid");
  });
  $(document).on("click", ".btn-remove", function () {
    $(this.previousElementSibling.parentElement).remove();
  });
  // code for input adder and remover END!!!

  // code for letter printing START!!!
  $(document).on("submit", ".print-form", function (e) {
    e.preventDefault();
    let val = $(this.children[0]).val();
    $(".printed").remove();
    $(this).after(`<div class="printed"><div class="print-rec"></div></div>`);
    let arr = val.trim().split("");
    // just adding input in html content, opacity is 0
    for (let i = 0; i < arr.length; i++) {
      $(".printed").append(`<span class="char-span">${arr[i]}</span>`);
    }
    // setting moving rectangle
    let height = $($(".printed")[0].children[1]).height();
    let recLeft = $(".printed")[0].children[1].getBoundingClientRect().left- $(".printed")[0].getBoundingClientRect().left
    $(".print-rec").css("left", `${recLeft}px`);
    $(".print-rec").css("height", `${height}px`);
    $(".print-rec").css("width", `${11}px`);
    // moving rectangle and showing letters
    let delta = 0;
    for (let i = 0; i < arr.length; i++) {
      delta = delta + $($(".printed")[0].children[i + 1]).width();
      $(".print-rec").animate({
        left: `${recLeft + delta}px`
      }, 150, function(){
        $($(".printed")[0].children[i + 1]).addClass("char-act");
      });
    };
  });
  // code for letter printing END!!!
});
