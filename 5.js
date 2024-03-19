// computed properties
const key1 = "letter1"
const key2 = "letter2"
const key3 = "letter3"

const value1="a"
let value2="b"
const value3="c"

const obj={
    key1: value1,
    [key2]: value2,
}

obj[key3] = value3
console.log(obj)


// Spread operator
let a=[..."death"]
console.log(a)

// ..........................................

let obj2={..."abcdefghijklmnopqrstuvwxyz"};
console.log(obj2)

//object destructuring
const person={
    name: 'John',
   "age": 21 ,
    "fav countries":["norway","Poland","japan","korea"] 
    }
let{name: n, age,"fav countries":country} = person
let favcountries = person["fav countries"]
console.log(n)
console.log(age)
console.log(country)

//object inside array
console.log("-------------------object inside array-------------------------")

const users=[
    {userId:1,name:"Priest",age:22},
    {userId:2,name:"Evaan",age:27},
    {userId:3,name:"Eric",age:33},
]

for (let user of users){
    console.log(user)
    // for(let key in user){
    //     console.log(user[key])
    // }

}

//nested destructuring
console.log("---------------------nested destructuring----------------------")











