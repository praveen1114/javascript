let number = [1,2,3];
let double = number.map(num => num * 2);
console.log(double);


let usernames = ['user1', 'user2'];
let testUsers = usernames.map(u => ({username:u,password: 'Test123'}));
console.log(testUsers);
