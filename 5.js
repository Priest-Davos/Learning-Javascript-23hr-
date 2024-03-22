
console.log("--------------------Spread operator----------------------")
// const obj1={
//     id1:4,
//     model1:"a10",
   
// }
// const obj2={
//     id2:5,
//     model2:"iphone 8",  
// }
// const obj={...obj1,...obj2,id3:"i10"}
// console.log(obj)//{id1: 4, model1: 'a10', id2: 5, model2: 'iphone 8', id3: 'i10'}

// ..........................................

// const obj2={..."abcdefghijklmnopqrstuvwxyz"};
// console.log(obj2)//{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z'}



console.log("--------------------object destructuring---------------------")

// const person={
//     name: 'John',
//    "age": 21 ,
//     "fav countries":["norway","Poland","japan","korea"] 
//     }
//     // if want to give new name to var then->  name: newName
// let{name: newName, age,"fav countries":country} = person
// let favcountries = person["fav countries"]
// console.log(newName)
// console.log(age)
// console.log(country)
// console.log(favcountries)

console.log("--------------------object inside array-------------------------")

// const users=[
//     {userId:1,name:"Priest",age:22},
//     {userId:2,name:"Evaan",age:27},
//     {userId:3,name:"Eric",age:33},
// ]

// for (let user of users){
//     console.log(user)//{userId: 1, name: 'Priest', age: 22 }{userId: 2, name: 'Evaan', age: 27}  {userId: 3, name: 'Eric', age: 33}
//     console.log(user.userId)

 
// }

console.log("--------------------nested destructuring----------------------")

// const users=[
//     {userId:1,name:"Priest",age:22},
//     {userId:2,name:"Evaan",age:27},
//     {userId:3,name:"Eric",age:33},
// ]
// const [{name},,{age}]=users
// console.log(name);
// console.log(age)










