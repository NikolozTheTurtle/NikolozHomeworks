$(function () {
    let requestUrl = `http://127.0.0.1:5502/profiles.json`;
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
    };
    $(document).on("click", ".li-btn", function (e) {
        e.preventDefault();
        $(".menu-active").removeClass("menu-active");
        let liType = $(this).attr("data-li-type"); 
        console.log(liType)       
        $(`.${liType}-menu`).addClass("menu-active");
        $(".active-li").removeClass("active-li");
        $($($(this).parent())).addClass("active-li");
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