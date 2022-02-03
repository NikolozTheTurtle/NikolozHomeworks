$(function () {
    let lineWidth = $(".act-ball")[0].getBoundingClientRect().x;
    $(".line").width(`${lineWidth}px`);
    $(document).on("click", function () {
        let checkBack = $(".col-lg-4").find(".act-ball").parent().prev().children();
        let checkNext = $(".col-lg-4").find(".act-ball").parent().next().children();
        if (checkBack.length == 0) {
          console.log(4)
          $(".back").addClass("d-none");
        } else {
          console.log(4)
          $(".back").removeClass("d-none");
        }
        if (checkNext.length == 0){
            $(".next").html("Finish");
        }else{
          $(".next").html("Next");
        }
        lineWidth = $(".act-ball")[0].getBoundingClientRect().x;
        $(".line").animate({
            width: `${lineWidth}px`
        }, 200);
      });


  $(document).on("click", ".ball", function () {
    $(".col-lg-4").find(".act-ball").removeClass("act-ball");
    $(this).addClass("act-ball");
    $(".col-lg-4").find(".act-p").removeClass("act-p");
    $(this).next().addClass("act-p");
    $(".row").find(".act-cont").removeClass("act-cont");
    $(".cont").eq($(this).attr("data-n")).addClass("act-cont");
  });


  $(document).on("click", ".move-btn", function () {
    if ($(this).attr("data-btn") == 1) {
      let next = $(".col-lg-4").find(".act-ball").parent().next().children().eq(0);
      if (next.length != 0) {
        $(".col-lg-4").find(".act-ball").removeClass("act-ball");
        next.addClass("act-ball");
        $(".col-lg-4").find(".act-p").removeClass("act-p");
        $(".col-lg-4").find(".act-ball").next().addClass("act-p")
        $(".row").find(".act-cont").removeClass("act-cont");
        $(".cont").eq($(".act-ball").attr("data-n")).addClass("act-cont");
      } else {
            $(".next").attr("type", "submit");
      }
    } else {
      let back = $(".col-lg-4").find(".act-ball").parent().prev().children().eq(0);
      if (back.length != 0) {
        $(".col-lg-4").find(".act-ball").removeClass("act-ball");
        back.addClass("act-ball");
        $(".col-lg-4").find(".act-p").removeClass("act-p");
        $(".col-lg-4").find(".act-ball").next().addClass("act-p")
        $(".row").find(".act-cont").removeClass("act-cont");
        $(".cont").eq($(".act-ball").attr("data-n")).addClass("act-cont");
      }
    }
    
  });
});

