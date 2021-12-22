// saklaso start
function temp(far) {
    let cels = (far - 32) * (5 / 9);
    return cels;
}
let answer = temp(23);
function farenheitout(idname) {
    answer = answer.toFixed(1);
    let a = answer.toString();
    let b = a.replace(".", "]");
    let c = b.search("]");
    let d = b.slice(c + 1, c + 2);
    let e = Number(d);
    if (e == 0) {
        answer = Number(a.slice(0, c));
    } else {
        answer == Number(a);
    }
    document.getElementById(idname).innerHTML = answer + " Celsius";
}
//saklaso end
// davaleba n1 start
let global = 123;
console.log(global);
function changer(val) {
    global = val;
    return global;
}
// davaaleba n2 end
// davaleba n2 start
let sent = "Sentence HTML for HTML changer, any HTML number works."
document.getElementById("example").innerHTML = sent;
function htmlch(x){
    let helper = x;
    let index;
    let y;
    let leng;
    let z;
    let m = 0;
    let n = helper.search("HTML");
    while (n > 0) {
        n = helper.search("HTML");
        index = helper.search("HTML");
        y = helper.slice(0, index);
        leng = helper.length;
        z = helper.slice(index + 4, leng);
        helper = y + z;
        m++;
    }
    for (let i = 1; i < m; i++) {
        index = x.search("HTML");
        y = x.slice(0, index);
        leng = x.length;
        z = x.slice(index + 4, leng);
        x = y + z;
    }
    return x;
}
// davaleba n2 end
// davaleba n2 start
function card(id) {
    let img = `logos/backkata.png`;
    let header = "Turtles >>> cats"
    let ptag = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    let btn = "Click click"
    let cardcode = `<div class="card" style="width: 100%;">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${header}</h5>
      <p class="card-text">${ptag}</p>
      <a href="#" class="btn btn-primary">${btn}</a>
    </div>
  </div>`;
    document.getElementById(id).innerHTML = cardcode;
}
// davaleba n3 end
// davaleba n4 start
function multi(x, y, point = 0){
    let m = x * y;
    m = m.toFixed(point);
    return m;
}
// davaleba n4 end
let task1 = changer("kai kaci");
let task2 = htmlch(sent);
let task4 = multi(23.32, 274.24, 2);
farenheitout("numid");
document.getElementById("htmlid").innerHTML = task2;
card("cardcol");
console.log(task1);
console.log(task4);
