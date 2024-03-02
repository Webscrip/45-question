var users = ["admin", "ali", "faisal", "yasir"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("hello admin, would you like to see a statsus report");
    }
    else {
        console.log(" hello ".concat(user, ", thank you logging in again"));
    }
}
