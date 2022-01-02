let blogs = [
    {
        nam: "Rock",
        desc: "ახალი წელია და გილოცავთ ყველას. მრავალს დაესწარით და ბლა ბლაბ ალბ ბლაბ ალბ ორპწბ ფბს ვისავ იევიჰ.",
        foto: `ft/jason-momoa-aquaman.jpg`,
        addate: new Date(),
        cat: "Class1",
        act: true,
        view: 230
    },
    {
        nam: "Jonson",
        desc: "ახალი წელია და გილოცავთ ყველას. მრავალს დაესწარით და ბლა ბლაბ ალბ ბლაბ ალბ ორპწბ ფბს ვისავ იევიჰ.",
        foto: `ft/jason-momoa-aquaman.jpg`,
        addate: new Date(),
        cat: "Class2",
        act: false,
        view: 653
    },
    {
        nam: "Fortune",
        desc: "დუეინ ჯონსონი მაგარი კაცია. ბლა ბლა ბლა ბლა ბლა ბლაბლ ბალ ბალბ აბლ ბწჯიბი წჰბიწ ბვწჰპ.",
        foto: `ft/jason-momoa-aquaman.jpg`,
        addate: new Date(2022, 1, 12),
        cat: "Class3",
        act: true,
        view: 2300
    },
    {
        nam: "Nick",
        desc: "დუეინ ჯონსონი მაგარი კაცია. ბლა ბლა ბლა ბლა ბლა ბლაბლ ბალ ბალბ აბლ ბწჯიბი წჰბიწ ბვწჰპ.",
        foto: `ft/jason-momoa-aquaman.jpg`,
        addate: new Date(),
        cat: "Class4",
        act: false,
        view: 372
    },
    {
        nam: "Safran",
        desc: "ახალი წელია და გილოცავთ ყველას. მრავალს დაესწარით და ბლა ბლაბ ალბ ბლაბ ალბ ორპწბ ფბს ვისავ იევიჰ.",
        foto: `ft/jason-momoa-aquaman.jpg`,
        addate: new Date(2020, 10, 2),
        cat: "Class5",
        act: true,
        view: 5266
    }
];
function adder() {
    let a = blogs.length;
    let x;
    let z = ``;
    for (let i = 0; i < a; i++) {
        let y = blogs[i].addate.getFullYear();
        let m = blogs[i].addate.getMonth() + 1;
        let d = blogs[i].addate.getDate();
        let now = new Date();
        let ynow = now.getFullYear();
        let mnow = now.getMonth() + 1;
        let dnow = now.getDate();
        if (y == ynow && m == mnow && d == dnow) {
            x = `<span class="badge bg-success">დამატებულია დღეს</span>`
        } else {
            x = `<span class="badge bg-success">დამატების თარიღი: ${d}/${m}/${y}</span>`
        }
        if (calc(blogs[i].desc) > 50 && blogs[i].act && blogs[i].view <= 1000){
            z = `<span class="badge bg-info">აუცილებლად წასაკითხი</span>`;
        }else{
            z = `<span></span>`
        }
        document.getElementById("rwr").innerHTML += `<div class="col-4 mb-4">
        <div class="card" style="width: 18rem;">
        <img src="${blogs[i].foto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${blogs[i].nam}</h5>
          <p class="card-text">${blogs[i].desc}</p>
        ${z}
          ${x}
          </div>
        </div>
      </div>`
    }
}
function calc(par){
    let f = par.match(/ /g);
    let resu;
    if (f == null){
        resu = par.length;
    }else{
        let r = f.length;
        resu = par.length - r;
    }
    return resu;
}

console.log(calc(blogs[0].desc));
adder();

