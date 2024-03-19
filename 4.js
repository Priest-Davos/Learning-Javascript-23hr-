// Objects

const person={
name: 'John',
age: 21 ,
"fav countries":["norway","Poland","japan","korea"] 
}

// console.log(person)
// console.log(person.name)
// console.log(person.age)

// here cant access fav countries using dot notation so use brackets
// console.log(person.fav countries)
// console.log(person["fav countries"])
// console.log(person["fav countries"][1])

// // add key value pair to objects
// person.nickname = "Dead   "
// person["planet"]="Earth"
// console.log(person);


// how to iterate objects
// way1
// for(let key in person){
// console.log(key)
// console.log(person.key);//wrong
// console.log(person[key])
// console.log(typeof(key))
// }

// way 2
console.log(Object.keys(person))
for (let key of Object.keys(person)){
    console.log(person[key]);
}
