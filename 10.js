console.log("----------------------------- Iterables          ------------------")
// jispe for of loop laga sake

// strings are iterable
for (let char of "Dead") {
  // console.log(char)    //D e a d
}

//  arrays are iterable
for (let item of [9, 7, 8]) {
  // console.log(item)    //9 7 8 
}


//  objects are not iterable   satisfies, see below
//  const obj={id:9, name:"dead",age:99}
//  for (let key of obj){ // 10.js:12 Uncaught TypeError: obj is not iterable
//   console.log(key)
//  }

console.log("----------------------------- Array like objects -----------------")
//  which have length property
// whose elements can be accessed by their index 


console.log("----------------------------- Sets               ----------------")
// //it is iterable
// //store data
// //has its own method  like adding, removing, and checking elements.
// //no index-based access
// //order is not guaranteed
// // Sets in JavaScript are collections of unique values, meaning that each value can occur only once within the set. Unlike arrays, which are ordered collections, sets do not have a specific order, and the elements are iterated in insertion order.

// // Use Cases:
// // ->Removing duplicates from an array.
// // ->Checking for the presence of unique values in a collection.
// // ->Efficiently managing a collection of unique elements

// const set1= new Set()
// console.log(set1)   //o/p-> Set(0) {size: 0}

// const set2=new Set([9,8,7,9,8,7])
// console.log(set2) //Set(3) {9, 8, 7} // auto removed duplicate items
// console.log(set2[1])//undefined //no index-based access  

// const set3=new Set(['d','e','a','d'])
// console.log(set3)//Set(3) {'d', 'e', 'a'}
// for (let value of set3){  //.*.  sets are iterable *.* supoorting for of loop
//      console.log(value); // 'd' 'e' 'a'
// }

// //Methods
// console.log(set1) //Set(0) {size: 0}
// set1.add(9);                              //Add an item
// set1.add("a");
// console.log(set1);
// set1.delete("a");                          // delete an item
// console.log(set1); //Set(1) {9}
// console.log(set1.has(9)) //true            //check for a specific item
// console.log(set1.size)                     //length❌ size ✔️

console.log("----------------------------- Maps               ----------------")

// Maps in JavaScript are a part of the ES6 standard, 
// providing a more robust and flexible way to handle key-value pairs.
//  Unlike objects, which only allow strings and symbols as keys, Maps allow for keys of any data type, including objects, functions, and any primitive type. This makes Maps very versatile for certain tasks where the keys are not limited to just strings or symbols.
// -> Map is an iterable
// -> store data in ordered fashion
// -> store key value pair and duplicate keys not allowed same as obj 

const person = new Map()
console.log(` person-> ${person} , typeof->${typeof (person)}`);// person-> [object Map] , typeof->object

person.set("id", 1);
person.set("name", "dead");                         //string as key
person.set(18, true);                          //number as key
person.set(["18+", "eighteen+"], "yes")    //array as key
person.set(() => { console.log("i am key") }, "yes")    //function as key as key,etc

console.log(person.get("name"))//use get method to access key values
console.log(person.keys())//will print all keys of this object

for (let key of person.keys()) {
  console.log(`_key->${key}, typeof->${typeof (key)}`)
}

for (let [key, value] of person) {
  console.log(`____key->${key}, value->${value}`)
}


//creation way 2
const person2 = new Map([['fName', "argon"], ['id', 9], ['atomicNumber', 18]])
console.log(person2)


//realistic xample
const person3 = { fName: "argon", id: 9 };
// console.log(person3)// {fName: 'argon', id: 9}
//Now want to store additional info about this person obj so can use Map

const extraInfo = new Map();
extraInfo.set(person3, { location: "earth planet", age: 99 });//here key->person3 obj, value ->object
console.log(extraInfo)//Map(1) {{…} => {…}}

// access value of person3 key
console.log(extraInfo.get(person3))//{location: 'earth planet', age: 99}

//access location
console.log(extraInfo.get(person3).location)//earth planet




console.log("----------------------------- cloning using object.assign    ----------------")

// modern way  -> use spread operator
// traditional way -> use object.assign()

const person4 = { fName: "dead", id: 4 }
const person5 = person4;
console.log(person5)//{fName: 'dead', id: 4}
person4.age = 99;
console.log(person5)//{fName: 'dead', id: 4, age: 99}
//updated person4 but person5 too got updated .reason->u9 same as array . .*. cloning

const person6 = { ...person4 }
person4.status = "alive";
console.log(person6)//{fName: 'dead', id: 4, age: 99}
//or 
const person7 = Object.assign({}, person4);
console.log(person7)


console.log("----------------------------- optional chaining              -----------------")
// Optional chaining allows you to access nested object properties without having to check if each reference in the chain is null or undefined. 

const user = {
  firstName: "John",
  address: {
    city: "New York",
    // country: { name: 'USA' }
  }
};
// console.log(user.address.country.name)//// 10.js:145 Uncaught TypeError: Cannot read properties of undefined (reading 'name')  
// here when commented country then give error 

// So use optional chaining
console.log(user?.address?.city)//New York
console.log(user?.address?.country?.name)//undefined


