// Here's a brief explanation of each section:

// Functions Basic: This section demonstrates how to create a basic function called isEven that takes a number as an argument and returns true if the number is even and false otherwise.
// Functions Expression: This section shows how to define a function using an expression, which is similar to the previous example but assigns the function to a variable called isEven.
// Arrow Functions: This section demonstrates how to define a function using arrow function syntax, which is a more concise way to define functions in JavaScript.
// Hoisting: This section explains hoisting, which is a JavaScript mechanism that moves variable and function declarations to the top of their respective scopes during compilation.
// Function inside function: This section demonstrates how to define functions inside other functions, which can be useful for creating closures and encapsulating functionality.
// Lexical scope: This section explains lexical scoping, which is the way that JavaScript determines the scope of variables based on their location in the source code.
// Block scope vs Function Scope: This section explains the difference between block scope and function scope in JavaScript, which is an important concept for understanding how variables are scoped in different contexts.
// Default Parameters: This section demonstrates how to define default parameters for functions, which allows you to specify default values for function arguments.
// Rest parameters: This section demonstrates how to use rest parameters to capture a variable number of arguments passed to a function.
// Param destructuring: This section demonstrates how to use destructuring to extract values from objects and arrays passed as function arguments.
// Callback Function: This section demonstrates how to use callback functions, which are functions that are passed as arguments to other functions and are invoked at a later time.
// Function returning function: This section demonstrates how to define a function that returns another function, which can be useful for creating higher-order functions and closures.


// Functions
console.log("------------Functions Basic----------------")

// // example  :- create a func isEven which takes a param as input and return true if else else false
// function isEven(num) { return ((num % 2 === 0) ? true : false) }
// console.log(isEven(4))

// // basic u9

console.log("------------Functions Expression------------")
// const isEven =function (num) { return ((num % 2 === 0) ? true : false) }
// console.log(isEven(4))

console.log("------------Arrow Functions ----------------")
// const isEven=(num)=>{ return ((num % 2 === 0) ? true : false)}
// or
// const isEven=(num)=> (num % 2 === 0) ? true : false
// console.log(isEven(7))

console.log("------------Hoisting------------------------")
// hello();//calling before initialization
// function hello(){console.log("Hello")}//only possible in traditional(this) case
// // this behaviour called hoisting
// //const hello=()=>{console.log("Hello")}//6.js:21 Uncaught ReferenceError: Cannot access 'hello' before initialization
// // const hello=function(){console.log("Hello")}//6.js:21 Uncaught ReferenceError: Cannot access 'hello' before initialization

console.log("------------Function inside function--------")
// function app() {//It can be arrow func or function expression too
//   const hello = () => console.log("hello")
//   const sum = (a, b) => a + b;

//   hello();
//   console.log(sum(7, 9))
// }
// app();

console.log("------------Lexical scope ------------------")

// Lexical scope in JavaScript refers to the way variable access is determined by the position of variables in the source code during the lexical analysis phase, or compile time. This means that the scope of a variable is defined by its location within the code structure and cannot be changed dynamically at runtime. Here's a breakdown of lexical scope in JavaScript:
//Uncomment myVar 1 one by one
// const myVar1=1;//outside func
// function app() {
//   // const myVar1=2;//in outer func
//   const print = () =>{ 
//     // const myVar1=3; // inner func
//     console.log(myVar1)
//   }
//   print();
// }
// app();

console.log("------------Block scope vs Function Scope---")
// function scope-> var
// block scope -> let and const
//u9


console.log("------------Default Parameters -------------")
// const add=(a=0,b=0,c=0)=>{
//   console.log(a+b+c)
// }
// add(3);//3
// add(1,2)//3
// add(4,1,2);//7


console.log("------------rest parameters ----------------")

function myFunc(a,b,...c){
  console.log(`a->${a}`);//a->5
  console.log(`b->${b}`);//b->6
  console.log(`c->`,c);//c-> (3) [7, 8, 9]
}
// myFunc(5,6,7,8,9)

// create a func which take n param and return sum 
// const addAll=(...nums)=>{
//   sum=0
// for (num of nums){sum=sum+num};
// return sum;
// }
// console.log(addAll(4,5,4,2,10))//55

console.log("-------------Param destructuring -----------")
// const  Person={
//   id:1,
//   firstName:"dead",
// }
// const func=(obj)=>{ //normal
// console.log(`id-> ${obj.id}`)
// console.log(`name->${obj.firstName}`)

// }
// const func2=({id,firstName})=>{ //param destructuring
//   console.log(`id-> ${id}`)
//   console.log(`name->${firstName}`)
// }
// func(Person)
// func2(Person)
console.log("-------------Callback Function -------------")
// //passing function in function
// const func=(Callback)=>{
// console.log(Callback);
// console.log("inside func")
// Callback("Dead");// Invoke the Callback function with the argument "Dead"
// } 
// func((name)=>console.log(`parameter->${name}`))// Call func with a callback function


console.log("-------------Function returning function ---")
const func= function(){
  return  ()=>{return "Dead"}
}
const calling=func()
console.log(calling);
console.log(calling())















