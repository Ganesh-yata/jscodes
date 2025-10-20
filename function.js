// prototype in functions

var person = function (name,age){
 this.name = name;
 this.age = age;
}
person.prototype.greet = function (){
   console.log(`hello my name is ${this.name} my age is ${this.age}`)
}
let person1 = new person("ganesh",24);
let person2 = new person("ramesh",28);

person1.greet();
person2.greet();

var man = function (name,age,city){
  this.name = name ;
  this.age = age ;
  this.city = city ;
}
man.prototype.entry = function(){
  console.log(`mans details are ${this.name} ${this.age} ${this.city}`);
}
let entry1 = new man("ram",12,"hyd");
let entry2 = new man("abhiram",12,"hyd");
let entry3 = new man("kodandaram",12,"hyd");
entry1.entry();
entry2.entry();
entry3.entry();

// immediate invoke function 
(  function (){
  console.log("hello from iife which is not accesible outside the same block called immediately")
}) ();

// iife with arrow function 
( ()=> console.log("iife from arrow"))();


// arrays manipulation push() pop() shift() unshift() splice()
let fruits = ["apple" , "mango"];
fruits.push("grapes");
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("banana")
console.log(fruits);
fruits.splice(0,1 , "figs")
console.log(fruits);
let vegetables = ["okra", "tomato", "potato"];
// spread operator

var food = [...fruits,...vegetables]
console.log(food)

// restparameters 
var noDryfruit = [...fruits]
console.log(fruits);

//destructuring skips an element if space is empty
var [a,,b] = vegetables ;
console.log(a);
console.log(b);