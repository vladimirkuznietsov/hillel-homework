let users = [prompt("First user name:"), prompt('Second user name:'), prompt('Third user name:')];

const result = [];

for(let i = 0; i < 3; i++) {
    let rand = Math.floor(Math.random() * users.length);
    result.includes(users[rand]) ? i-- : result.push(users[rand]);
};

console.log(result.toString());
