let ball = document.querySelector(".ball");

ball.addEventListener("animationiteration", function(){
    let x = ball.getBoundingClientRect();
    console.log(x);
});
