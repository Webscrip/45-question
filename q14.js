var guestarray = ["farrukh", "yasir", "nabeel"];
var canNotAttend = "nabeel";
console.log("".concat(canNotAttend, " can not make it ,for dinner"));
var newGuest = "hassan";
guestarray[guestarray.indexOf(canNotAttend)] = newGuest;
console.log(guestarray);
