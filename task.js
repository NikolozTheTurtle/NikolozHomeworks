let form = document.querySelector("#myForm");
let count = document.querySelector("h6");
let id = 0;
let a;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // creation of element START!!!!
  let input = document.querySelector("#myInput");
  let val = input.value;
  let forAdd = `<div class="row my-row" id="my-row-${id + 1}">
  <div class="col-lg-8" id="content-text-${id + 1}">${val}</div>
  <div class="col-lg-4 icons">
      <i class="bi bi-pencil-fill" data-id="${id + 1}"></i>
      <i class="bi bi-x-circle-fill" data-id="${id + 1}"></i>
  </div>
</div>`;
  // creation of element END!!!!!

  // adding element and counting tasks START!!! (also checks if it is editting or adding)!
  if (form.getAttribute("data-task") == 0) {
    if (val.length > 0) {
      form.innerHTML += forAdd;
      id++;
      if (id == 1) {
        count.innerText = `${id} task`;
      } else {
        count.innerText = `${id} tasks`;
      }
    }
  } else {
    if (input.value.length > 0) {
      document.querySelector(`#content-text-${a}`).innerText = input.value;
      // variable a is given value in the edit click function
      input.value = "";
      form.setAttribute("data-task", "0");
    }
  }
  // adding element and counting tasks END!!!

  // logic for deleting items with click event START!!!
  let deleteBtn = document.querySelectorAll(".bi-x-circle-fill");
  deleteBtn.forEach((el) => {
    el.addEventListener("click", function () {
      let x = el.getAttribute("data-id");
      let remove = document.querySelector(`#my-row-${x}`);
      remove.remove();
      id--;
      if (id == 1) {
        count.innerText = `${id} task`;
      } else {
        count.innerText = `${id} tasks`;
      }
    });
  });
  // logic for deleting items with click event END!!!

  // edit button click for placing text in input START!!!
  let editBtn = document.querySelectorAll(".bi-pencil-fill");
  editBtn.forEach((el) => {
    el.addEventListener("click", function () {
      form.setAttribute("data-task", "1");
      a = el.getAttribute("data-id");
      let input = document.querySelector("#myInput");
      let editText = document.querySelector(`#content-text-${a}`).innerText;
      input.value = editText;
    });
  });
  // edit button click for placing text in input END!!!
});
