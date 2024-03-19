let fname="dead"
let age="7"
console.log(typeof fname, typeof (age))
console.log(typeof +age)
console.log(typeof "Dead")

console.log("----------------------------------------------")
let a=null
console.log(typeof a)
console.log(typeof null)//this is known bug 

console.log("----------------------------------------------------------------")
let b=BigInt(222)
console.log(typeof b, b)


console.log("-------- == vs === --------------------------------")
let c="7"
let d=7
console.log(c==d, c===d)

if(fname[0]==="d"){
    console.log("ok")
}


console.log("--------------------------------")

let win_num=9;
guess=parseFloat(prompt("Guess win number"))
// guess=+prompt("Guess win number")
if(guess===win_num) {
    console.log(typeof guess ,"You win",guess)}
    else{
        console.log(typeof guess ,"You loose",guess)
    }
    


console.log("----------------------------------------")
