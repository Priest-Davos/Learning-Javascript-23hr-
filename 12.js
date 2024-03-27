console.log("------------ call --------------------")
// // The call() method in JavaScript is a powerful feature of function objects,
//  used to invoke a function with an explicitly specified this context, and optionally, arguments for the function. It allows you to control the execution context of a function—essentially, what the keyword this refers to inside that function.
// // functionName.call(thisArg, arg1, arg2, ...);

const obj1={
  id: 1,
  name:"obj1",
  about:function(){console.log(`id -> ${this.id}  , name -> ${this.name}`)}
}
const obj2={
  id: 2,
  name:"obj2",
 
}

obj1.about()//id -> 1  , name -> obj1 //ok

obj1.about.call() //id -> undefined  , name ->  //not ok

obj1.about.call(obj1) // id -> 1  , name -> obj1  //ok

// call about for obj2 but obj 2 has no about key .... can use call
obj1.about.call(obj2) //id -> 2  , name -> obj2   


console.log("-------------------------------------------------------------------------------------------------")

// now we can  also separete the function from the obj1 and can still call it for that obj
//can also accept parameter
const about=function(age ,hobbies){
  console.log(`\nid -> ${this.id}  , name -> ${this.name} & age-> ${age} , hobbies -> ${hobbies}`)

}

const user1={
  id: 1,
  name:"Hydrogen",
 
}
const user2={
  id: 2,
  name:"Helium",
 
}
about.call(user1)//id -> 1  , name -> Hydrogen & age-> undefined , hobbies -> undefined
about.call(user1,67,["good", "bad"])//id -> 1  , name -> Hydrogen & age-> 67 , hobbies -> good,bad


console.log("---------------- apply ---------------")

// The apply() method in JavaScript is very similar to the call() method,
//  with the primary difference being how additional arguments to the function are passed.
//  While call() requires args to be listed individually, apply() takes them as an array
about.apply(user1 , [999,["hobby1","hobby2"]])//id -> 1  , name -> Hydrogen & age-> 999 , hobbies -> hobby1,hobby2

console.log("------------------bind--------------")
//it is used to create a new function that, when called, has its this keyword set to the
//  provided value, with a given sequence of arguments preceding any provided when the new function is called.
const func=about.bind(user1 , 999,["hobby1","hobby2"])
func() //id -> 1  , name -> Hydrogen & age-> 999 , hobbies -> hobby1,hobby2


console.log("-------dont do this mistake ---------")
const func2=obj1.about;
func2()//id -> undefined  , name ->  .. cause in this case this is window object
// therefore bind it with obj1 context
const func3=obj1.about.bind(obj1);
func3()//id -> 1  , name -> obj1