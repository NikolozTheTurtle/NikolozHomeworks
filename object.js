let product = {
    mass: 100,
    perp: 1,
    num: 0,
    sale: 0,
    // price: this.mass * this.perp, რატომ არ შვება ეს?
    img: "logos/backkata.png",
    checker:function(){
        if (this.num == 0){
            return `<span class="badge bg-danger">ამოიწურა</span>`;
        }else{
            return `<span class="badge bg-info">მარაგშია ${product.num} პროდუქტი</span>`;
        }
    },
    changer:function(){
        if (this.mass >= 30) {
            this.perp = 3;
        }else if(this.mass >= 20 && this.mass < 30){
            this.perp = 1.8;
        }
        return this.perp;
    },
    salegiver:function(){
        let pr = this.mass * this.perp;
        if (pr > 150){
            this.sale = 1;
        }else{
            this.sale = 0;
        }
        return this.sale;
    },
    saletest:function(){
        if (product.salegiver() == 0){
            return false;
        }
        return true;
    },
    disccount:function(){
        if (this.saletest()){
            return `<a href="" class="position-absolute" style="top: 0; right: 0; background-color: aqua; padding: 10px; text-decoration: none; color: black;">25%</a>`;
        }
        return `<span></span>`
    }
}
let card = `<div class="card position-relative" style="width: 18rem;">
${product.disccount()}
<img src="${product.img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">მასა: ${product.mass}  კგ</h5>
  <p class="card-text">ფასი: ${product.changer() * product.mass} ლარი</p>
    ${product.checker()} 
</div>
</div>`
let keys = Object.keys(product);
let values = Object.values(product);
let all = Object.entries(product);
console.log(keys);
console.log(values);
console.log(all);
console.log(product.disccount());
document.getElementById("cardcol").innerHTML = card;

