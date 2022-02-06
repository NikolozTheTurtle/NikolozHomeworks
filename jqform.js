$(function () {
  let lineWidth = $(".act-ball")[0].getBoundingClientRect().x;
  $(".line").width(`${lineWidth}px`);
  $(document).on("click", function () {
    let checkBack = $(".col-lg-4").find(".act-ball").parent().prev().children();
    let checkNext = $(".col-lg-4").find(".act-ball").parent().next().children();
    if (checkBack.length == 0) {
      $(".back").addClass("d-none");
    } else {
      $(".back").removeClass("d-none");
    }
    if (checkNext.length == 0) {
      $(".next").html("Finish");
    } else {
      $(".next").html("Next");
    }
    lineWidth = $(".act-ball")[0].getBoundingClientRect().x;
    $(".line").animate(
      {
        width: `${lineWidth}px`,
      },
      200
    );
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
      let next = $(".col-lg-4")
        .find(".act-ball")
        .parent()
        .next()
        .children()
        .eq(0);
      if (next.length != 0) {
        $(".col-lg-4").find(".act-ball").removeClass("act-ball");
        next.addClass("act-ball");
        $(".col-lg-4").find(".act-p").removeClass("act-p");
        $(".col-lg-4").find(".act-ball").next().addClass("act-p");
        $(".row").find(".act-cont").removeClass("act-cont");
        $(".cont").eq($(".act-ball").attr("data-n")).addClass("act-cont");
      } else {
        $(".next").attr("type", "submit");
      }
    } else {
      let back = $(".col-lg-4")
        .find(".act-ball")
        .parent()
        .prev()
        .children()
        .eq(0);
      if (back.length != 0) {
        $(".col-lg-4").find(".act-ball").removeClass("act-ball");
        back.addClass("act-ball");
        $(".col-lg-4").find(".act-p").removeClass("act-p");
        $(".col-lg-4").find(".act-ball").next().addClass("act-p");
        $(".row").find(".act-cont").removeClass("act-cont");
        $(".cont").eq($(".act-ball").attr("data-n")).addClass("act-cont");
      }
    }
  });

  // range cursor code bellow !!!
  // range cursor code bellow !!!
  // range cursor code bellow !!!

  const LastLeft = $(".range-line").width() - $(".range-cursor").width();
  $("body").mousemove(function () {
    if($(".range-cursor")[0].getBoundingClientRect().right <= $(".range-line")[0].getBoundingClientRect().right && $(".range-cursor")[0].getBoundingClientRect().left >= ($(".range-line")[0].getBoundingClientRect().left)) {
      $(".range-cursor").draggable({
        axis: "x",
        addClasses: false,
      });
    }else if(!($(".range-cursor")[0].getBoundingClientRect().right <= $(".range-line")[0].getBoundingClientRect().right)) {
      $(".range-cursor").animate({
          left: `${LastLeft}px`,
        },0);
    }else{
      $(".range-cursor").animate({
        left: `0px`,
      },0);
    }
    let cursorX = $(".range-cursor")[0].getBoundingClientRect().left;
    let lineLeft = $(".range-line")[0].getBoundingClientRect().left;
    if ($(".range-cursor")[0].getBoundingClientRect().left == lineLeft) {
      $(".count").text(`0`);
    }else if($(".range-cursor")[0].getBoundingClientRect().right - $(".calc-ball").width()/2 + $(".range-cursor").width()/2 + 8 - $(".range-line")[0].getBoundingClientRect().left >= LastLeft){
      console.log()
      $(".count").text(`200`);
    }else{
      let count = (cursorX - lineLeft + $(".range-cursor").width()/2)/($(".range-line").width()) * 200;
        $(".count").text(`${Math.floor(count)}`);
    }
  });
});
