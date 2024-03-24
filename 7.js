console.log("-----------------important Array methods-------------------")

console.log("-----------------forEach method--------------------")
// const numbers = [10, 20, 30, 40]
// function printElement(number, index) {
//   console.log(`at index->${index}  , number->${number}`)
// }
// // numbers.forEach(printElement)//1st arg it passes is--> element and second is its -->index
// //----------------------------------------------

// //"function definition";
// function multiplyBy2(number) { console.log(` ${number} * 2 = ${number * 2}`); }
// numbers.forEach(multiplyBy2)
// //or can pass anonymous func
// numbers.forEach((number) => console.log(` ${number} * 2 = ${number * 2}`))

// //it dont return anything unlike map method
// const ans= numbers.forEach((number) => {return number*number})
// console.log(ans)

console.log("-----------------Map method--------------------")
// const numbers=[1,2,3,4]

// const squaredNumbers=numbers.map((num)=> {return(num*num)})//map returns new array

// //it returns an array
// console.log(squaredNumbers)//(4) [100, 400, 900, 1600]


console.log("-----------------filter method---------------------")

// const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// const even = arr.filter((element) => {  return(element % 2 === 0);})
// console.log(even)//o/p-> (5) [8, 6, 4, 2, 0]


console.log("-----------------reduce method-----------------------")

// const arr = [10, 20, 3, 4, 5]

// const sum = arr.reduce(
//   ((accumulator, currentValue) => {
//     console.log(`accumaulator-> ${accumulator} || current Value-> ${currentValue}`)
//     return (accumulator + currentValue)
//   })
//   ,100)//here can pass initial accumulator value
// // by default
// // initial accumulator val= 1st element of array
// // initial currentValue val=  2nd element of array
// // 2nd itr accumulator val= returned val else undefined
// //2nd itr currentValue= 3rd element of arr and continue

// //  accumulator  currentvalue return
// //  10           20           30
// //  30         3              33
// // 33          4             37
// // //after setting initial  accumulator value 100
// // accumaulator-> 100 || current Value-> 10
// // accumaulator-> 110 || current Value-> 20   and so on

// console.log(sum)

