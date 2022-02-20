function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === "Admin"){
            admins.push(key)
        }
    }
    return console.log(admins);
}

const users = new Map();

users.set("Pierre", "Admin");
users.set("Veronica", "Admin");
users.set("Guy", "User");
users.set("Heinz", "User");

getAdmins(users);
