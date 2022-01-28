let nav = document.querySelector(".my-nav");

document.addEventListener("scroll", function(){
    if (document.querySelector("header").getBoundingClientRect().bottom - nav.offsetHeight <= 0){
        nav.classList.add("my-active-nav");
    }else{
        nav.classList.remove("my-active-nav");
    };
});