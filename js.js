let text = "            es funcqia nebismier kent sityvian winadadebaze moqmedebs              "; 
let funchelp = text.trim();
let sechelp = text.trim();
let texthelp = funchelp.match(/ /g);
let num = (texthelp.length);
let ind = funchelp.search(" ");
function replacement() {
     for (let i = 0; i < (num/2) + 1; i++){
        funchelp = funchelp.trim();
        if (i == (num/2) - 1){
            funchelp = funchelp.replace(" ", "{");
        }else if(i == (num/2) ){
            funchelp = funchelp.replace(" ", "]");
        }else {
            funchelp = funchelp.replace(" ", "+");
        }
    }
}
replacement();
let x = funchelp.search("{");
let y = funchelp.search("]");
let task1 = sechelp.slice(x + 1, y);
let task2 = sechelp.replace(task1, "ku");
let task3 = sechelp.split(" ");
let task4 = text.includes("cow");
let task5 = funchelp.startsWith("es");
let task6 = sechelp.toUpperCase();
let img = `logos/backkata.png`;
let h5text = `yo yo kata`;
let buttont = `chaaklike`;
let ptext = `Some quick example text to build on the card title and make up the bulk of the card's content.`;
let card = `<div class="card" style="width: 18rem;">
<img src="${img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${h5text}</h5>
  <p class="card-text">${ptext}</p>
  <a href="#" class="btn btn-primary">${buttont}</a>
</div>
</div>`;
document.getElementById("mycol").innerHTML = card;
console.log(task1);
console.log(task2);
console.log(task3);
console.log(task4);
console.log(task5);
console.log(task6);
