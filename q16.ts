

// name array
let guestarray:string[] = ["farrukh","yasir","nabeel"];

//  can not make dinner
let canNotAttend:string = "nabeel";

// invite new guest
let newGuest :string = "hassan";
guestarray[guestarray.indexOf(canNotAttend)]=newGuest;
console.log(guestarray);

// send message

console.log("Welcome all we found a bigger dinner table");

guestarray.unshift("faizan");
console.log(guestarray);