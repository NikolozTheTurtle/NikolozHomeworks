let students = [
    {
        name: "შაკო",
        photo: `imgs/rock.jpg`,
        age: 32,
        regdate: "2019/02/21",
        course: "full stack",
        app: "100%",
        ezmoney: true
    },
    {
        name: "ნიკოლოზი",
        photo: `imgs/rock2.jpg`,
        age: 23,
        regdate: "2020/02/21",
        course: "GYM",
        app: "91%",
        ezmoney: false
    },
    {
        name: "ფარნავაზი",
        photo: `imgs/rock3.jpg`,
        age: 32,
        regdate: "2020/01/21",
        course: "farming",
        app: "2%",
        ezmoney: true
    },
    {
        name: "დავითი",
        photo: `imgs/images.jpg`,
        age: 9,
        regdate: "2020/02/12",
        course: "football",
        app: "68%",
        ezmoney: false
    },
    {
        name: "სალომე",
        photo: `imgs/rock4.jpg`,
        age: 41,
        regdate: "2020/09/22",
        course: "design",
        app: "100%",
        ezmoney: true
    },
    {
        name: "მუხრანი",
        photo: `imgs/rock5.jpg`,
        age: 10,
        regdate: "2020/12/21",
        course: "writing",
        app: "67%",
        ezmoney: true
    },
    {
        name: "თამარი",
        photo: `imgs/rock6.jpg`,
        age: 45,
        regdate: "2021/02/21",
        course: "reading",
        app: "62%",
        ezmoney: false
    },
    {
        name: "ერეკლე მეფე",
        photo: `imgs/rock7.jpg`,
        age: 3,
        regdate: "2020/02/21",
        course: "programming",
        app: "10%",
        ezmoney: false
    },
    {
        name: "მარიამი",
        photo: `imgs/rock8.jpg`,
        age: 1,
        regdate: "2022/02/21",
        course: "programming",
        app: "27%",
        ezmoney: true
    },
    {
        name: "გიორგი",
        photo: `imgs/rock9.jpg`,
        age: 12,
        regdate: "2024/02/21",
        course: "eating",
        app: "73%",
        ezmoney: false
    }
]
let secret = students;

// filter conditions
let filter1 = students.filter(el => {
    return el.age > 22;
});
let filter2 = students.filter(el => {
    return el.regdate === "2020/09/22";
});
let filter3 = students.filter(el => {
    return el.course == "programming" || el.course == "full stack";
});
let filter4 = students.filter(el => {
    return el.app == "100%";
});
let filter5 = students.filter(el => {
    return el.ezmoney == true;
});

// general function for inserting cards
function cardadder(arr){
    let a;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].ezmoney){
            a = `<span class="badge bg-success">სტიპენდიანტი</span>`;
        }else{
            a = `<span class="badge bg-danger">არ აქვს სტიპენდია</span>`;
        }
        document.getElementById("sm").innerHTML += `
        <div class="col-lg-4">
        <div class="card mb-3" style="width: 18rem;">
        <img src="${arr[i].photo}" class="card-img-top" style="width: 286px; height: 286px; object-fit: cover; object-position: top;" alt="...">
        <div class="card-body">
          <h5 class="card-title">${arr[i].name}</h5>
          <p class="card-text">Age: ${arr[i].age}</p>
          <p class="card-text">Course: ${arr[i].course.replace(/^\w/, (c) => c.toUpperCase())}</p>
          <p class="card-text">Attendance: ${arr[i].app}</p>
          <p class="card-text">Registration Day: ${arr[i].regdate}</p>
          ${a}
          </div>
        </div>
        </div>`    
    }
}

// default version for html
cardadder(students);

// function for filtring students array
function changeval(k){
    if (k == 1){
        document.getElementById("sm").innerHTML = ``;
        cardadder(filter1);
        secret = filter1;
    }else if(k == 2){
        document.getElementById("sm").innerHTML = ``;
        cardadder(filter2);
        secret = filter2;
    }else if(k == 3){
        document.getElementById("sm").innerHTML = ``;
        cardadder(filter3);
        secret = filter3;
    }else if(k == 4){
        document.getElementById("sm").innerHTML = ``;
        cardadder(filter4);
        secret = filter4;
    }else if(k == 5){
        document.getElementById("sm").innerHTML = ``;
        cardadder(filter5);
        secret = filter5;
    }else{
        document.getElementById("sm").innerHTML = ``;
        cardadder(students);
        secret = students;
    }
}

// function for name searching
function sername(z){
    let res = secret.filter(el => {
        return !el.name.search(z);
    });
    document.getElementById("sm").innerHTML = ``;
    cardadder(res);
}
