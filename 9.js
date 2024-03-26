// the only differtence is find return the element tat satisfies the condition and every returns boolean   according to the condiotion 
// These methods cater to different needs: finding an item versus validating all items against a condition.
console.log("----------- find method -------------")
//takes a callback funtion
//   // .ie if element found then return that element else  return undefined
const arr = [9, 8, 0, 3, 6];

const ans = arr.find((element) => {
  // //  return element==999
  return element == 3
})

console.log(ans)//undefined // if searching 999
console.log(ans)//3 // if searching 3

console.log("----------- every method -------------")
//takes a call back function // which return true or false
//validate all items
//this method returns boolean(t/f)
const users = [
  { id: 1, name: "Monny", age: 25 },
  { id: 2, name: "Danny", age: 30 },
  //  { id:3,name:"Sunn/y",age:17},//uncomment it then condititon will be false for this user so the answer will be false
  { id: 4, name: "Ronny", age: 23 },
  { id: 5, name: "Ponny", age: 23 },
]
const isEveryUsersOldEnough = users.every((user) => user.age > 18)
console.log(isEveryUsersOldEnough)


console.log("----------- some method --------------")
//  How it works:
// The some method executes the callback function once for each element present in the array until it finds one where callback returns a truthy value. If such an element is found, some immediately returns true, otherwise, if callback returns a falsy value for all elements, some will return false. It doesn't modify the array on which it is called.

// example 1
// are there  any user whose  age less then 18
const ans2 = users.some((user) => user.age < 18);
console.log(ans2)

//xample 2
// is there  any user whose  name start with r
// const ans3=users.some((user)=> user.name[0].toLocaleLowerCase()=="r");
// console.log(ans3)

console.log("----------- fill method -------------")
// The fill() method  is used to fill all the elements of an array with a static value.
//  It mutates the original array and returns a reference to the modified array.
// .fill(value,start,end)

const arr2=Array(7);
console.log(arr2) //(7) [empty × 7]

arr2.fill(8);
console.log(arr2)//(7) [8, 8, 8, 8, 8, 8, 8]

arr2.fill(3,2,5)
console.log(arr2) //(7) [8, 8, 3, 3, 3, 8, 8]

console.log("----------- splice method -----------")
// This method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//  It modifies the original array and returns an array containing the removed elements, if any.
// .splice(start,delete kitne item karne,insert)

const arr3=[5,7,9,"Hello","World",3]
const deletedItem= arr3.splice(3,2) //retun the arr of deleted item if any
console.log(deletedItem)
console.log(arr3)//(4) [5, 7, 9, 3]
 
// insert and delete at same time
arr3.splice(1,1,"dead","vein")// start=1, delete kitne item karne=0 , insert kya karna="dead","vein"
console.log(arr3)//(4) [5, 'dead', 9, 3]







  