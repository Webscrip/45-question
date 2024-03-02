
let guestarray:string[] = ["farrukh","yasir","nabeel"];


let canNotAttend:string = "nabeel";
console.log(`${canNotAttend} can not make it ,for dinner`);

let newGuest :string = "hassan";
guestarray[guestarray.indexOf(canNotAttend)]=newGuest;
console.log(guestarray);

