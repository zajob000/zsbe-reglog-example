const fs = require ('fs');
class Users {
    getUser(name){
        const users = JSON.parse(fs.readFileSync('users.json').toString());
        for (let i = 0; i < users.length; i++) {
            if (users[i], username == name)
            return users[i];
        }

    }
    saveUser(user) {
        const users = JSON.parse(fs.readFileSync("users.json").toString());

        for (let i = 0; i < users.length ; i++) {
            if (users[i].username == user.username) {
                users[i] = user;

                
                fs.writeFileSync('users.json', JSON.stringify(users));
                return;
            }
        }
        users.push(user);
        
        fs.writeFileSync('users.json', JSON.stringify(users));
    }
}

module.exports = Users;