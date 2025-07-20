interface User {
  name: string;
  age: number;  
  isAdmin?: boolean;
}

// const user1 : User = {
//     age : 1,
//     name : "Praveen",
//     isAdmin : true,
// };

function greet (user : User):void{
    console.log(`Hello ${user.name}, age ${user.age}`);
    console.log(`Hello you ${user.name}, age ${user.age}, ${user.isAdmin}`);

}

const tester: User = {name:'Praveen', age:35, isAdmin:true, };
greet(tester);
// console.log(tester);
// console.log(user1);

