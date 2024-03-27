console.log("-------------- methods --------------")//(8:39:-)
// methods are functions that are associated with objects and operate on the data within those objects.
// They are properties of objects where the value is a function.
//  When you call a method on an object, you're essentially invoking that function within the context of that object.

//this keywod
// ->Method Invocation: When a method is invoked on an object, the value of this inside that method refers to the object itself.
// ->Dynamic Binding: The value of this is determined dynamically at runtime based on how the function is called, not where it's defined.
// ->Global Context: If a function is called without an explicit context (e.g., not as a method of an object), this refers to the global object (window in browsers, global in Node.js). However, in strict mode ("use strict"), this will be undefined in this case.


const user = {
  id: 1,
  name: "Danny",
  age: 17,
  consoleThis: function() { console.log(this);},////{name: 'Danny', age: 17, consoleThis: ƒ, canDrink: ƒ, about: ƒ}
  
  //  "canDrink":function(){ console.log (age>18?"yes":"no")},//11.js:17 Uncaught ReferenceError: age is not defined
  "canDrink": function () { return this.age > 18 ? "yes can drink" : "no cant drink" },
  "about": function () { console.log(`my name is ${this.name} and i am  user ${this.id}`) }

}

const user2 = {
  id: 2,
  name: "Nanny",
  age: 99,
  "canDrink": function () { return this.age > 18 ? "yes can drink" : "no cant drink" },
  "about": function () { console.log(`my name is ${this.name} and i am  user ${this.id}`) }
}

user.consoleThis();//.*. this is object itself in object context

console.log(user.canDrink); //ƒ () { return this.age > 18 ? "yes can drink" : "no cant drink" }
// console.log(user?.["canDrink"]());

user.about();//my name is Danny and i am  user 1

user2.about();//my name is Nanny and i am  user 2
console.log("\n-------------------this ------------------------")
console.log(this)    //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(window)  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(this == window)    //true

function myFunc(){
  // "use strict"
  console.log(this)//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  // // undefined if uncomment use strict
}
myFunc()
window.myFunc()//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//***   if write use strict in top of file then vale will be undefined instead of window object    


