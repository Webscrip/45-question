
// name array
let guestarray:string[] = ["farrukh","yasir","nabeel"];

//  can not make dinner
let canNotAttend:string = "nabeel";

// invite new guest
let newGuest :string = "hassan";
guestarray[guestarray.indexOf(canNotAttend)]=newGuest;


// send message


guestarray.unshift("faizan");

let middleguest:string = "salman";
let middleindex = guestarray.length/2;
guestarray.splice(middleindex,0,middleguest);

guestarray.push("raheel");
console.log(guestarray);

console.log("we can invite only two people for dinner!");

while(guestarray.length>2){let removeguest =guestarray.pop();console.log(`sorry ${removeguest} we cant invite you to dinner`);}

guestarray.map((item)=> console.log(`${item} you are still invited to dinner`));

guestarray.pop();
guestarray.pop();
console.log(guestarray);