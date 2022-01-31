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






  // filterizer code below //
  let traX;
  let traY;
  let all = $(".col");
  for (let i = 0; i < all.length; i++) {
    let k = all[i].children[0].children[1].children[1].innerHTML;
    if (k == "COO" || k == "CEO") {
      $(all[i]).addClass("manag");
    } else if (k == "Sales manager" || k == "Salesman") {
      $(all[i]).addClass("sales");
    } else if (k == "Allround guy") {
      $(all[i]).addClass("sales support");
    } else if (k == "Supporter") {
      $(all[i]).addClass("manag support");
    } else if (k == "Consultant") {
      $(all[i]).addClass("sales support");
    }
  }
  $(document).on("click", ".btn", function () {
    console.log($(this).attr("data-type"));
    let x = all[0].getBoundingClientRect().left;
    let y = all[0].getBoundingClientRect().top;
    if ($(this).attr("data-type") == "1") {
      for (let i = 0; i < all.length; i++) {
        $(all[i]).removeClass("pass");
        if (!$(all[i]).hasClass("manag")) {
          $(all[i]).addClass("pass");
        } else {
          $(all[i]).addClass("act");
        }
      }
      $.each($(".pass"), function (ind, val) {
        let passX = val.getBoundingClientRect().left;
        let passY = val.getBoundingClientRect().top;
        if (passX == x && passY != y) {
          traY = passY - y;
          $(val).css(`transform`, `translate(0, -${traY}px)`);
          $(val).fadeOut(400);
        }else if(passX != x && passY == y){
          traX = passX - x;
          $(val).css(`transform`, `translate(-${traX}px, 0)`);
          $(val).fadeOut(400);
        }else if(passX != x && passY != y){
          traX = passX - x;
          traY = passY - y;
          $(val).css(`transform`, `translate(-${traX/2}px, -${traY}px)`);
          $(val).fadeOut(400);
        }
      });
      $.each($(".act"), function (ind, val) { 
        $(val).fadeIn();
        $(val).css(`transform`, `translate(0, 0)`);
     });
    }else if($(this).attr("data-type") == "0"){
      $(".pass").removeClass("pass");
      $(".act").removeClass("act");
      $.each($(".col"), function (ind, val) { 
        console.log(ind);
         $(val).css(`transform`, `translate(0, 0)`);
         $(val).fadeIn();
      });
    }else if($(this).attr("data-type") == "2"){
      for (let i = 0; i < all.length; i++) {
        $(all[i]).removeClass("pass");
        $(all[i]).removeClass("act");
        if (!$(all[i]).hasClass("sales")) {
          $(all[i]).addClass("pass");
        } else {
          $(all[i]).addClass("act");
        };
      };
      console.log($(".pass"))
      $.each($(".pass"), function (ind, val) {
        let passX = val.getBoundingClientRect().left;
        let passY = val.getBoundingClientRect().top;
        if (passX == x && passY != y) {
          traY = passY - y;
          $(val).css(`transform`, `translate(0, -${traY}px)`);
          $(val).fadeOut(400);
        }else if(passX != x && passY == y){
          traX = passX - x;
          $(val).css(`transform`, `translate(-${traX}px, 0)`);
          $(val).fadeOut(400);
        }else if(passX != x && passY != y){
          traX = passX - x;
          traY = passY - y;
          $(val).css(`transform`, `translate(-${traX/2}px, -${traY}px)`);
          $(val).fadeOut(400);
        }else {
          $(val).fadeOut(400);
        }
      });
      $.each($(".act"), function (ind, val) { 
         $(val).fadeIn();
         $(val).css(`transform`, `translate(0, 0)`);
      });
    };
  });
  

  console.log(all);
});
