

let users : string [] = ["admin","ali","faisal","yasir"]

for (let user of users) 
   { if (user === "admin") {
        console.log("hello admin, would you like to see a statsus report")
    }
 else { console.log(` hello ${user}, thank you logging in again`)} }