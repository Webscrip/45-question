// name array
var guestarray = ["farrukh", "yasir", "nabeel"];
//  can not make dinner
var canNotAttend = "nabeel";
// invite new guest
var newGuest = "hassan";
guestarray[guestarray.indexOf(canNotAttend)] = newGuest;
// send message
guestarray.unshift("faizan");
var middleguest = "salman";
var middleindex = guestarray.length / 2;
guestarray.splice(middleindex, 0, middleguest);
guestarray.push("raheel");
console.log(guestarray);
console.log("we can invite only two people for dinner!");
while (guestarray.length > 2) {
    var removeguest = guestarray.pop();
    console.log("sorry ".concat(removeguest, " we cant invite you to dinner"));
}
guestarray.map(function (item) { return console.log("".concat(item, " you are still invited to dinner")); });
guestarray.pop();
guestarray.pop();
console.log(guestarray);
