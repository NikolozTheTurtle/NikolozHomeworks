let btn = document.querySelectorAll(".click-butn");
let hello = document.querySelector(".hello-col");

btn.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    let bigWidth = hello.previousElementSibling.getBoundingClientRect().width;
    let smallWidth = hello.getBoundingClientRect().width;
    let activeBtn = document.querySelector(".active-butn");
    let activeH3 = document.querySelector(".active-h3");
    let activeFormBtn = document.querySelector(".active-form-btn");
    let forgot = document.querySelector(".big-p")
    let name = document.querySelector("#name");
    let formHeader = document.querySelector(".form-header-active")
    if (activeBtn.nextElementSibling != null) {
      hello.previousElementSibling.style.transform = `translateX(${smallWidth}px)`;
      hello.style.transform = `translateX(-${bigWidth}px)`;
      activeBtn.classList.remove("active-butn");
      activeBtn.nextElementSibling.classList.add("active-butn");
      activeH3.classList.remove("active-h3");
      activeH3.nextElementSibling.classList.add("active-h3");
      activeFormBtn.classList.remove("active-form-btn");
      activeFormBtn.nextElementSibling.classList.add("active-form-btn");
      forgot.classList.remove("forgot-shown");
      name.classList.remove("name-input");
      formHeader.classList.remove("form-header-active");
      formHeader.nextElementSibling.classList.add("form-header-active");
    } else {
      hello.previousElementSibling.style.transform = `translateX(0)`;
      hello.style.transform = `translateX(0)`;
      hello.style.transform = `translateX(${bigWidth}px))`;
      activeBtn.classList.remove("active-butn");
      activeBtn.parentElement.children[0].classList.add("active-butn");
      activeH3.classList.remove("active-h3");
      activeH3.parentElement.children[0].classList.add("active-h3");
      activeFormBtn.classList.remove("active-form-btn");
      activeFormBtn.parentElement.children[0].classList.add("active-form-btn");
      forgot.classList.add("forgot-shown");
      name.classList.add("name-input");
      formHeader.classList.remove("form-header-active");
      formHeader.parentElement.children[0].classList.add("form-header-active")
    }
  });
});
