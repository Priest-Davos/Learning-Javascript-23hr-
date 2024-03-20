



console.log("----------------- clone an array -------------")
// let arr1=["a","b","c"]

// let arr2=[].concat(arr1);
// let arr2=arr1.slice(0);
// let arr2=[...arr1]//using spread operator

// console.log("arr2= ",arr2)
// console.log(typeof arr2)
// console.log(arr1===arr2)

console.log("-----clone an array + add extra items too---------")
let arr1=["a","b","c"]

// let arr2=[].concat(arr1,["d","e","f"]);
// let arr2=arr1.slice(0).concat(["d","e","f"]);
let arr2=[...arr1,"d","e","f"]//using spread operator
console.log(arr1);
console.log("arr2= ",arr2)
// console.log(typeof arr2)
console.log(arr1===arr2)






