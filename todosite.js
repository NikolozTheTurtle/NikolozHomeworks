$(function () {
    let requestUrl = `https://nikoloztheturtle.github.io/NikolozHomeworks/profiles.json`;
    $(document).on("input", ".my-form", function () {
        if ($(".pass")[0].value.length >= 8  && $(".email")[0].value.includes("@")){
            $(".my-btn").addClass("eligable-btn");
            $(".my-btn").removeAttr("disabled");
        }else{
            $(".my-btn").attr("disabled", "");
            $(".my-btn").removeClass("eligable-btn");
        }
    });
    $(document).on("submit", ".my-form", function (e) {
        e.preventDefault();
        fetch(requestUrl, {
            method: "GET"
        }).then(response => response.json().then(data => {
            let liveUser = null;
            let keyBool;
            // chooses the user with existing email !!!!!!
            data.forEach(element => {
                if(element.email == $(".email")[0].value){
                    liveUser = element;
                };
            });
            // if there was user with existing email, now it checks for password !!!!!!
            if (liveUser != null) {
                if (liveUser.password == $(".pass")[0].value) {
                    keyBool = true;
                }else{
                    keyBool = false;
                };
            }else{
                keyBool = false;
            };
            // analyzing the results from password check !!!!!!
            if (keyBool) {
                sessionStorage.setItem("token", liveUser.token);
                window.location.href = "todoHTML/success.html";
            } else {  
                alert("error")
            };
        }));
    });
    if (sessionStorage.getItem("token") != null) {
        let timeout = setTimeout(() => {
            alert("Move Mouse");
        }, 10000);
        $(document).on("mousemove", function () {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                alert("Move Mouse");
            }, 10000);
        });
        fetch(requestUrl, {
            method: "GET"
        }).then(response => response.json().then(data => {
            let userInfo = null;
            data.forEach(element => {
                if (element.token == sessionStorage.getItem("token")){
                    userInfo = element;
                };
            });
            $(".name").html(`${userInfo.name}`);
            $(".l-name").html(`${userInfo.lastName}`);
            $(".city").html(`${userInfo.city}`);
            $(".country").html(`${userInfo.country}`);
            $(".number").html(`${userInfo.number}`);
            $(".email").html(`${userInfo.email}`);
        }));
        fetch(`https://fakestoreapi.com/products/`, {
            method: "GET"
        }).then(response => response.json().then(data => {
            data.forEach(el => {
                let productCard = `<div class="product-col col-lg-4"><div class="card product-card" style="width: 100%;">
  <img src="${el.image}" class="card-img-top product-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title: ${el.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Price: ${el.price}</h6>
    <p class="card-text">${el.description}</p>
    <p class="mb-0 category-p">Category: ${el.category}</p>
  </div></div></div>`;
                $(".product-row").append(productCard);
            });
        }));
    };
    $(document).on("click", ".li-btn", function (e) {
        e.preventDefault();
        let liType = $(this).attr("data-li-type");
        if (liType != "logout") {
            $(".menu-active").removeClass("menu-active");
            $(`.${liType}-menu`).addClass("menu-active");
            $(".active-li").removeClass("active-li");
            $($($(this).parent())).addClass("active-li");
        }else{
            sessionStorage.clear("token");
            window.location.href = "../index.html";
        }
    });
    $(document).on("click", ".card-btns", function (e) {
        e.preventDefault();
        let buttonType = $(this).attr("data-card-type");
        if (buttonType == "delete") {
            $($(this).parent().parent().parent()).remove();
        }else if(buttonType == "view"){
            
        }
    });
});