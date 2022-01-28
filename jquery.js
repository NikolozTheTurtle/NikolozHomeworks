$(function () {
  $(document).on("click", ".bi-pencil-fill", function () {
    $(".bi-pencil-fill").removeClass("bi-pencil-fill");
    $(".bi").addClass("bi-x-lg");
    $("body").addClass("gray");
    $(".button").animate(
      {
        width: "55%",
        borderRadius: "0px",
      },
      300,
      function () {
        $(".button").animate(
          {
            height: "95%",
          },
          600
        );
        $(".inside").addClass("d-block");
        $(".inside").animate({
          paddingTop: "20px",
        });
        $(".bi-x-lg").animate({
          top: "15px",
        });
      }
    );
  });
  $(document).on("click", ".bi-x-lg", function () {
    $("body").removeClass("gray");
    $(".button").animate({
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    });
    $(".inside").removeClass("d-block");
    $(".bi-x-lg").removeClass("bi-x-lg");
    $(".bi").addClass("bi-pencil-fill");
    $(".bi-pencil-fill").animate({
        top: "50%",
      });
  });
});
