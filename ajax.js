$(function () {
    let startPage = $(".active").attr("href");
    $(".load-cont").load(startPage)
    $(".nav-link").click(function (e) { 
        e.preventDefault();
        let page = $(this).attr("href");
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
        $(".load-cont").load(page);
    });
    $(document).on("click", ".prod-link", function () {
        $.ajax({
            type: "Get",
            url: "http://127.0.0.1:5502/ajax.json",
            data: "data",
            dataType: "text",
            success: function (response) {
                let data = JSON.parse(response);
                data.forEach(el => {
                    let card = `<div class="col-lg-4 mb-2 mt-2">
                    <div class="card" style="width: 18rem;">
                    <img src=${el.photo} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${el.name}</h5>
                      <p class="card-text">${el.number}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div>`
                  $(".load-row").append(card);
                });  
            }
        });
    });
    $(document).on("click", ".drop-btn", function () {
        $(".ul-drop").toggleClass("dropped");
        $(".bi-caret-down-fill").toggleClass("bi-caret-up-fill");
    });
    $(".li-item").click(function (e) { 
        e.preventDefault();
        let html = $(this).html();
        $(".chosen-li").removeClass('chosen-li');
        $(this).addClass("chosen-li");
        $(".drop-btn").html(html);
        $(".drop-btn").addClass("chosen-btn");
        $(".drop-btn").append(`<i class="bi bi-caret-down-fill caret-down-act"></i>`);
        $('.ul-drop').removeClass("dropped");
        $('.bi-caret-down-fill').removeClass("bi-caret-up-fill");
    });
});