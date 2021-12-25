let auto = [
    "Ford",
    "Mustang",
    5.4, 
    ["V6", "V8"], 
    {
        variant:"boss 302", 
        variant2:"Shelby", 
        variant3:"Saalen", 
        year:["2018", "2022"]
    }
];
let sentence = `${auto[0]} ${auto[1]} გამოდის ${auto[2]} ${auto[3][1]} ტიპის ძრავით, ასევე მისი მოდიფიკაციებია ${auto[4].variant}, ${auto[4].variant2}, საუკეთესო მოდელები გამოდიოდა ${auto[4].year[0]} დან ${auto[4].year[1]} წლამდე.`;
document.getElementById('ford').innerHTML = sentence;
console.log(sentence);

let myArr = [7, 32, 22, 92, [100, 32, 5209, 2598, 9868]];
myArr.push("kujo");
myArr.unshift("mainc wasashleli");
myArr.pop();
myArr.shift();

// პირობების შემოწმება
let x = myArr.every(el => {
    return el > 933;
});
let y = myArr.some(el => {
    return el == 32;
});

// გამოაქვს რიცხვების მასივი HTMTL-ში
for (let i = 0; i < myArr.length; i++){
    if (typeof(myArr[i]) == "number"){
        document.getElementById(`arrmem${i + 1}`).innerHTML = myArr[i];
    }else{
        for (let k = 0; k < myArr[i].length; k++){
            document.getElementById(`arrmem${i + 1 + k}`).innerHTML = myArr[i][k];
        }
    }
}

let helpArr = myArr;
// ცვლის რიგ-რიგობით რიცხვებს front-end და back-end სტრინგებით
for (let i = 0; i < helpArr.length; i++){
    if (typeof(helpArr[i]) == "number"){
        if (i % 2 == 0){
            helpArr.splice(i, 1, "front-end");
        }else{
            helpArr.splice(i, 1, "back-end");
        }
    }else{
        for (let k = 0; k < helpArr[i].length; k++){
            if (k % 2 == 0){
                helpArr[i].splice(k, 1, "front-end");
            }else{
                helpArr[i].splice(k, 1, "back-end");
            }  
        }
    }
    
}
// გამოაქვს ახალი სტრინგიანი მასივი  HTML-ში იგივე პრინციპით
for (let i = 0; i < helpArr.length; i++){
    if (typeof(helpArr[i]) == "string"){
        document.getElementById(`arrsec${i + 1}`).innerHTML = helpArr[i];
    }else{
        for (let k = 0; k < helpArr[i].length; k++){
            document.getElementById(`arrsec${i + 1 + k}`).innerHTML = helpArr[i][k];
        }
    }
}

console.log(x);
console.log(y);