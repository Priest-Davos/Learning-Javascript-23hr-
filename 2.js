// type of operator
// primitive data types
// String
// Number 
// booleans
// undefined
// null
// BigInt
// Symbol



console.log("-------------------------typeof--------------------------------")
// let fname="dead";
// let age=9 ;
// console.log(typeof (fname), typeof (age))

console.log("---------------------conver  string to number -------------------------");
// console.log(`  string to number -> type of "9"-> ${typeof +"9"}`);
// console.log(typeof( Number("9")));


console.log("---------------------// conver number to string -------------------------");
// console.log(` number to string -> type of age -> ${typeof (age+"")}`);
// console.log(typeof(String(9)));


console.log("---------------------// String concatenatiopn-------------------------");
// you know

console.log("-----------------------//string  Template-----------------------");
// console.log(`This is string template . Age = ${age}`)

console.log("------------------// undefined ----------------------------");
// variable declared but not defined
// let x;
// console.log(typeof x)

console.log("-----------------------null-----------------------");
// let a=null
// console.log(typeof a)
// console.log(typeof null)//this is known bug , didnt corrected as many dev has wrote code  with consideration of this bug

console.log("--------------------------Big Int--------------------------------------")//newly introduced 2020
// let b=BigInt(222)//or
// let b=222n
// console.log(typeof b, b)
// console.log(b+9)// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversion




console.log("--------booleans vs comparison operator--------------------------------")
// u9

console.log("-------- == vs === --------------------------------")
// == check only value while === checks type of var too 
//same with != vs !==
let c = "7"
let d = 7
console.log(c == d, c === d)//true false 




console.log("--------------------truthy And falsy values--------------------")
// falsy values-> "" , null ,undefined,0

console.log("-------------------------------Ternary Operator---------------------------")
// let age=17;
// let drink = age > 18 ? "yes" : "no";
// console.log(drink)


console.log("----------------and  , or operator-----------------------")
// u9




console.log("--------------- nested if  else -----------------")

// let win_num=9;
// // guess=prompt("Guess win number")//return string 
// guess=parseFloat(prompt("Guess win number"))  // convert to num
// // guess = + prompt("Guess win number")//short trick
// if(guess==win_num) {
//     console.log(typeof guess ,"You win",guess)}
//     else{
//         if(guess<win_num){console.log("Too Low , Your guess is ->",guess)}
//         else{
//             console.log("TOO High",guess)
//         }
//     }

console.log("--------------- if  else  if else-----------------")
// u9

console.log("--------------- switch statement -----------------")

// i = 9;
// j = 8;
// operator = "+";

// switch (operator) {
//     case "+": console.log(i + j);
//         break;
//     case "-": console.log(i - j);
//         break;
//     case "*": console.log(i * j);
//         break;
//     default: console.log("ok");

// }

console.log("------------------------while Loop--------------------")
// u9


console.log("first n natural num sum");
// let sum = 0;
// let i = 1;
// let n = 5;
// while (i <= n) {
//     sum += i;
//     i++;
// }
// console.log(`Sum = ${sum}`)

console.log("---------------    For Loop   -----------------")
// u9
console.log("--------------- break keyword-----------------")
// u9

console.log("--------------- continue keyword --------------")
// u9

console.log("--------------- do while Loop -----------------")
// u9



