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

let x=_=>{
    console.log("hi");
    console.log("hello");
    console.log("bye");
}
x();