console.log("--------------Sort method ---------------")
// The sort() method in JS is used to sort the elements of an array in place and returns the sorted array.
//  By default, the sort() method sorts the elements of an array in ascending order based on their string Unicode code points. However, you can also provide a custom comparison function to define the sorting order.


const numbers = [9, 8, 0, 4, 600];
// numbers.sort()// default sorting //o/p-> [0, 4, 600, 8, 9] // Js convert them in string then sort according to their ASCII code

// Custom Sorting:You can pass a comparison function as an argument to the sort() method to define a custom sorting order. The comparison function should return a negative value if the first argument should come before the second, a positive value if the first argument should come after the second, or zero if the two arguments are equal.

// numbers.sort((a, b) => { return a - b }) //ascending order //o/p-> [0, 4, 8, 9, 600]
// numbers.sort((a,b)=>b-a) //in descending order //o/p-> [0, 4, 600, 8, 9]

console.log(numbers)  //changes the og aarray

const names=["rajan","ela","albarej","ANISH","Shin"]
// names.sort()
console.log(names)//(5) ['ANISH', 'Shin', 'albarej', 'ela', 'rajan'] //not expected

names.sort((a,b)=>{console.log( a.toLowerCase().localeCompare(b.toLocaleLowerCase()))} )
console.log(names)





