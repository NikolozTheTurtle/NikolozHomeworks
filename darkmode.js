$(function () {
  // code for dark and light mode START!!!
  $(document).on("click", ".switch", function () {
    $("body").toggleClass("dark-mode");
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
});





// if ($("body").hasClass("light-mode")){
//     // $(".light-mode").replaceClass("light-mode", "dark-mode");

// }else{
//     $(".dark-mode").replaceClass("dark-mode", "light-mode");
// }
