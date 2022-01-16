let card = document.querySelectorAll(".my-card");


card.forEach(el => {
    el.addEventListener("click", function(){
        el.classList.toggle("my-card-end");
        el.children[1].classList.toggle("answer-shown");
        el.children[0].children[0].classList.toggle("svg-class");
        el.children[0].children[1].classList.toggle("bi-x-circle-fill");

        
    });
});