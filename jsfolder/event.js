let btn = document.querySelector(".mybtn");
let menu = document.querySelector(".menu");
let ulist = document.querySelector(".drop");
let list = document.querySelectorAll("li");

btn.addEventListener("click", function(){
    btn.classList.toggle("myActiveBtn");
    menu.classList.toggle("menuActive");
    ulist.classList.toggle("dropActive");
});
list.forEach(el => {
    let hor = el.querySelector(".horline");
    el.addEventListener("mouseover", function(){
        hor.classList.add("horActive");
    });
    let horIns = el.querySelector(".horline");
    el.addEventListener("mouseleave", function(){
        horIns.classList.remove("horActive");
    });
});