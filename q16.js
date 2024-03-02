// name array
var guestarray = ["farrukh", "yasir", "nabeel"];
//  can not make dinner
var canNotAttend = "nabeel";
// invite new guest
var newGuest = "hassan";
guestarray[guestarray.indexOf(canNotAttend)] = newGuest;
console.log(guestarray);
// send message
console.log("Welcome all we found a bigger dinner table");
guestarray.unshift("faizan");
console.log(guestarray);
