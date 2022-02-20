const Url = `${window.location.host}/NikolozHomeworks/jsfolder/ajax.json`;
let arr;
class First {
  constructor(info, cardHeaderStyle, cardImgStyle, cardSmallStyle) {
    this.info = info;
    this.cardHeaderStyle = cardHeaderStyle;
    this.cardImgStyle = cardImgStyle;
    this.cardSmallStyle = cardSmallStyle;
  }
  adding(){
    this.info.forEach((el) => {
        document.querySelector(".row").innerHTML += `<div class="col-lg-4">
              <div class="card" style="width: 100%;">
              <img src="${el.photo}" class="card-img-top mycard-img" alt="...">
              <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
                <p class="card-text">${el.surname}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
              </div>`;
      });
  };
  forStyleOne(obj, selector){
    for (const prop in obj) {
        const val = obj[prop];
        const myProp = prop;
        document.querySelectorAll(selector).forEach(el => {
          el.style[myProp] = val;
        });
      };
  }
  forStyle() {
    this.forStyleOne(this.cardHeaderStyle, ".card-title");
    this.forStyleOne(this.cardImgStyle, ".mycard-img");
    this.forStyleOne(this.cardSmallStyle, ".card-text");
  }
}
console.log(window.location.host);
fetch(Url, {}).then((res) =>
  res.json().then((data) => {
    arr = [];
    data.forEach((el) => {
      arr.push(el);
    });
    let test = new First(arr, {
      // style for card header text
      fontSize: "20px",
      color: "red",
    },
    {
        // style for card img
        width: "100%",
        height: "300px"
    },
    {
        // style for card small test
        fontWeight: "bolder",
        fontSize: "12px"
    });
    test.adding();
    test.forStyle();
  })
);
