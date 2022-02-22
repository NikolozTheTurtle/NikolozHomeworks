const Point:number = 120;
let numArr:number[] = [102, 123, 3, 423];
interface inter<T>{
    isAdmin:boolean;
    accName:string;
    profPoint:number;
    hobbies:string[];
    agePass(p:number):T;
}
interface allow {
    result:string;
}
let firstProfile:inter<boolean> = {
    isAdmin: true,
    accName: `Nick`,
    profPoint: 17,
    hobbies: [
        `Football`,
        ` Games`,
        ` Reading`
    ],
    agePass:function(age){
        if (age >= 18) {
            return true;
        }else{
            return false;
        }
    }
}
function allowed(p:number):allow {
    if (firstProfile.agePass(p)) {
        return {
            result: `<span class="badge bg-success">You Have 120 Points Or More</span>`
        }
    }else{
        return {
            result: `<span class="badge bg-danger">You need ${Point - p} more points.</span>`
        }
    }
}
let badge:any = allowed(firstProfile.profPoint);
let card:string = `<div class="col-lg-3">
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${firstProfile.accName}</h5>
  <h6 class="card-subtitle mb-2 text-muted">Points: ${firstProfile.profPoint}</h6>
  <p class="card-text">${firstProfile.hobbies}</p>
  ${badge.result}
</div>
</div>
</div>`
let row = document.querySelector(".row") as HTMLElement;
row.innerHTML = card;