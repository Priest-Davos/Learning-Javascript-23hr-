// Objects (from 3:56:-)

/*
->arrays are good but not sufficient for real world data
-> objects are reference types
->objects store key value pairs
-> objects dont have indexes

*/
console.log("----------------------how to create an object------------------------")
const person={
name: 'John',
age: 21 ,
"fav countries":["norway","Poland","japan","korea"] 
}

console.log("----------------------Access the data from object-------------------------")

// console.log(person)
// console.log(person.name)
// console.log(person.age)

// //here cant access fav countries using dot notation so use brackets
// // console.log(person.fav countries)//wrong
// console.log(person["fav countries"])
// console.log(person["fav countries"][1])

 
console.log("----------------------add key value pair to objects----------------------------")

// person.nickname = "Dead"
// person["planet"]="Earth"
// console.log(person);

console.log("----------------------diff b/w dot vs bracket notation----------------------------")
// const key="email"
// person.key="dead@gmail.com"
// console.log(person)//{name: 'John', age: 21, fav countries: Array(4), key: 'dead@gmail.com'}
// //but want key name "email" ,not "key"
// person[key]="dead@gmail.com"
// console.log(person)


console.log("----------------------how to iterate objects---------------------")
// way1
// for(let key in person){
// console.log(`key name->${key}`)
// // console.log(person.key);//wrong
// console.log(`key value-> ${person[key]}`)
// }


// way 2
// // console.log(Object.keys(person))//(3) ['name', 'age', 'fav countries']//returns array of object's keys
// for (let key of Object.keys(person)){
//     console.log(person[key]);
// }




console.log("----------------------Computed Properties--------------------")

// const key1="objKey1";
// const key2="objKey2"

// const value1="myValue1"
// const value2="myValue2"

// const obj={
//   key1:value1,
//   [key2]:value2,
// }

// console.log(obj)//{key1: 'myValue1', objKey2: 'myValue2'}
// obj[key1]=value1;
// console.log(obj)//{key1: 'myValue1', objKey2: 'myValue2', objKey1: 'myValue1'}

  

