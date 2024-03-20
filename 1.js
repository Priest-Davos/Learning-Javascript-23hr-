// "use strict"; //stops from committing mistakes as we get levarage in writing js as can use var without defining it

name_="yen"
// console.log(name_)



//rules for namimg variabele

// ->basic like in all lang 
// -> camel case  recommended



//let keyword (introduced in 2015) (recommended)
// block scope vs function scope
// can redeclare a variable when using var but not when use let
var a=9;
var a=7;
let l=6;
// let l=7;// cant redeclare in case of let




//Declare constant
// -> use const  keyword
const pi=3.14;
// pi=9; cant do
console.log(pi)

//string indexing

// string methods(1:00:00)
// .trim(),.toUpperCase(),.toLoweCase,.slice()
// strings are immutable
let firstName="  evaan  ";
// console.log(firstName.trim());  //it returns the new string instead of changing the original ssring
// console.log(firstName.length);
firstName=firstName.trim();
console.log(firstName.length);




