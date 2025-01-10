//! function without parameters
// function demo (){
//     console.log("function without parameters");
// }
// demo();

//!function with parameters

// function userDetails(name ,age ,city){   //parameters
//     console.log(name);
//     console.log(age);
//     console.log(city);   
// }
// userDetails("vikas",19,"Hyderabad")

//!anonymous function
// function(){
//     console.log("anonymous function");
// }


//! function expression

// let x = function(){
//     console.log("function expression is executing");
// };
// x();

//! IIFE
// (function(){
//     console.log("IIFE");   //should be invoked immediatly
// })();    //function can be called n number of times but not for IIFE

//! arrow function
// function demo(){
//     console.log("Hello");
// }
// demo(); //noraml function

// let x =()=>console.log("Arrow function");
// x();

// let x = =>console.log("Arrow function");
// x();

// let x =a=>console.log(a);
// x(5);

// let x =(a, b)=>console.log(a+b); //NaN
// x(5,5); //10

// let x=_=>{
//     console.log("hi");
//     console.log("hello");
//     console.log("bye");
// }
// x();
//! return keyword
// function demo(a,b){
//     return a+b;        //explicit return
// }
// let x = demoo(5,5);
// console.log(x);

// let y= (a,b)=> a+b;    //implicit return
// let a = y(10,20);
// console.log(a);

// let z =(a,b) =>{return a+b};   //explicit return
// let b = z(10,20);
// console.log(b);

//! higher order function is a function which accepts another function
// function test(a){
//     return a;
// };
// let x = test(function(){" hello"});
// console.log(x)

// let x = funciton(){
//     return " function expression"
// };
// console.log(y())

// function parent(callback){  // higher order function
//     return callback;
// };
// let x = parent(add(5,5));
// console.log(x);

// function add(a,b){ //callback
//     return a+b
// }

//! closure

// var a = 100;
// let b ="hi";
// function x(){
//     var user = "vinay";
//     let company = "google"
//     const sal = 124234546;
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a,b);
// }