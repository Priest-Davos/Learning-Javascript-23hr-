console.log("--------------Sort method ---------------")
// The sort() method in JS is used to sort the elements of an array in place and returns the sorted array.
//  By default, the sort() method sorts the elements of an array in ascending order based on their string Unicode code points. However, you can also provide a custom comparison function to define the sorting order.


const numbers = [9, 8, 0, 4, 600];

// xample 1
numbers.sort()// default sorting //o/p-> [0, 4, 600, 8, 9] // Js convert them in string then sort according to their ASCII code

// Custom Sorting:You can pass a comparison function as an argument to the sort() method to define a custom sorting order. The comparison function should return a negative value if the first argument should come before the second, a positive value if the first argument should come after the second, or zero if the two arguments are equal.
// Comparison Logic:
// Inside the comparison function, a - b is used to determine the sorting order.
// If the result of a - b is -ve, -> a should come before b 
// If the result is +ve, -> a should come after b.
// If the result is zero, it means a and b are equal in terms of sorting order.

numbers.sort((a, b) => { return a - b }) //ascending order //o/p-> [0, 4, 8, 9, 600]
numbers.sort((a,b)=>b-a) //in descending order //o/p-> [0, 4, 600, 8, 9]

console.log(numbers)  //changes the og aarray

// xample 2
// in case of String(upeercase and lowercase )
const names=["rajan","ela","albarej","ANISH","Shin"]
// names.sort()
console.log(names)//(5) ['ANISH', 'Shin', 'albarej', 'ela', 'rajan'] //not expected

names.sort((a,b)=>{return( a.toLowerCase().localeCompare(b.toLocaleLowerCase()))} )
console.log(names)

// xample 3
const products=[
  {productId:1, productName:"p1", price:200},
  {productId:2, productName:"p2", price:100},
  {productId:3, productName:"p3", price:340},
  {productId:4, productName:"p4", price:1000},
  {productId:5, productName:"p5", price:99},
]

//--> sort price low to high

// cloning then soring as it changes the original array 
const productSortedOnPrice=[...products].sort((p1,p2)=>{return p1.price-p2.price})
console.log(productSortedOnPrice)
// Comparison Logic:
//  The function p1.price - p2.price calculates the difference between the price of two products. 
// If p1 is cheaper than p2 (result is negative), p1 comes before p2.
// If p1 is more expensive than p2 (result is positive), p1 comes after p2.
// If they are equal in price (result is zero), their relative positions to each other remain unchanged (though, in modern JavaScript engines, this can still lead to them being swapped, depending on the algorithm used by sort).







