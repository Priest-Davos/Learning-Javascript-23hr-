
//Intro to arrays
// ->reference type 
// ->ordered colllection of items


console.log("------------------creation of arrays ----------------")
// let arr=[1,2,3,"a"]
// console.log(arr);
// console.log(typeof arr)//obj
// console.log(Array.isArray(arr))//true



console.log("-----------Array methods----------------")
////push(), pop(), shift() ,unshift()
// let letters=["a","b","c"]
// letters.push("d")//insert at last index
// console.log(letters)//(4) ['a', 'b', 'c', 'd']
// console.log(letters.pop())//d //since it reurns the popped elements
// console.log(letters)//(3) ['a', 'b', 'c']
// letters.unshift("x")//insert at start
// console.log(letters)
// letters.shift()//removes from start and returns it
// console.log(letters)


console.log("----------primitive vs reference data types----------------")
// // reference type
// let a=[1,2]
// let b=a;
// a.push(3)

// // Here changed only array a  but see b got updated to -> cause pointing to same location
// // ie no separate memory allocated since stored in heap and in stack a pointer is created 
// console.log(b) //(3) [1, 2, 3]

console.log("----------------- clone an array -------------")
// let arr1=["a","b","c"]
// let arr2=arr1;//but same reference

// let arr2=arr1.slice(0); //way 1// arr2=  (3) ['a', 'b', 'c']
// let arr2=[].concat(arr1);//may2
// let arr2=[...arr1]// //way 3  //using spread operator

// console.log("arr2= ",arr2)
// console.log(typeof arr2)
// console.log( ` Are they equal ? -> ${arr1===arr2} `)


console.log("-----clone an array + add extra items too---------")
// let arr1=["a","b","c"]

// let arr2=[].concat(arr1,["d","e","f"]);
// let arr2=arr1.slice(0).concat(["d","e","f"]);
// let arr2=[...arr1,"d","e","f"]//using spread operator
// console.log(arr1);
// console.log("arr2= ",arr2)
// console.log(typeof arr2)
// console.log(arr1===arr2)

console.log("--------------for loop in array---------------------------")
//u9

console.log("--------------use const for creating array-----------------")
// const nums = [5,6,7];
// // nums=[9,8,0] // wrong
// //but can use normal operations on array ...since not changing the address
// nums.push(9)

// console.log(nums)

console.log("--------------while loop in array---------------------------")
// u9

console.log("--------------for of loop in array---------------------------")
// let names=["yen", "rico","rob"]
// for(let name of names ){
//   console.log(name) // yen 3.js:79 rico3.js:79 rob
// }

console.log("--------------for in loop in array---------------------------")
// let names=["yen", "rico","rob"]
// for(let index in names ){
//   console.log(names[index]) 
// }


console.log("--------------Array destructuring-------------------------")
let arr=[1,2,3,4,5,6,7,8,9]
let [value1, value2,,,value5,...rest]=arr;
console.log(value1);//1
console.log(value2);//2
console.log(value5);//5
console.log(rest)//(4) [6, 7, 8, 9]












