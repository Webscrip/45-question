

let current_users : string [] = ["admin","Ali","Eric","Faizan","yasir"]
let new_users : string [] = ["admin","yasir","Adeel","Sajid","Hasan"]

let current_user_lower : string [] =current_users.map(user => user.toLowerCase())

for (let new_user of new_users ) {
    if (current_user_lower.includes (new_user.toLowerCase())) {
    console.log(`sorry $(new_user), that name is taken`)
    } else {console.log(`yes $(new_user), is still in available list`)}
}