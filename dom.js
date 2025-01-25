// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header<h1>"
// ele.innerHTML= "<h1>Header</h1>"
// console.log(ele);


//! 
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));   //to check its an pure array or not
// ele[0].innerText="Hello"
// // ele[0].style.backgroundColor="tomato"
// //! spread operator :- it will take out each and every value from the orignal array and store it inside one more new array(pure array).
// //! syntax :- [...variable];
// let x = [...ele];
// // console.log(x,Array.isArray(x));
// x.map(element=>{
//     // console.log(element);
//     element.style.backgroundColor="orange"
// })

//!

// let ele = document.getElementsByTagName("div");
// console.log(ele);

//! 
// let ele = document.getElementsByName("formData");
// console.log(ele, Array.isArray(ele));
// [...ele].map(inp=>{
//     console.log(inp.value);
// })

//!

// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);

// let btn = document.querySelector("#btn");
//! addEventListener("event",()=>{})
    // btn.addEventListener("click",()=>{
    //     // console.log("button clicked");
    //     // alert("hi")
    //     document.style.bacckground.color="tomato"
    // })

// let btn = document.querySelector("#btn");
// btn.addEventListener("dblclick",()=>{
//     console.log("double clicked");
// })

// let divBlock = document.getElementById("divBlock");
// divBlock.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="yellow"
//     divBlock.style.backgroundColor="blue"
// })

// let divBlock = document.getElementById("divBlock");
// divBlock.addEventListener("mouseleave",()=>{
//     document.body.style.backgroundColor="yellow"
//     divBlock.style.backgroundColor="aqua"
// })

// let inp =document.getElementById("inp");
// inp.addEventListener("keydown",()=>{
//     console.log("keydown");
// })

// inp.addEventListener("keyup",()=>{
//     console.log("keyup");
// })

// let red = document.getElementById("red");
// divBlock.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="red"
//     divBlock.style.backgroundColor="blue"
// })

// let bgColor = document.querySelectorAll(".bgColor");
// console.log(bgColor);
// [...bgColor].map((element)=>{
//     element.addEventListener("mouseover",()=>{
//         element.style.backgroundColor="transparent";
//     })
// })

// let ele = document.createElement("hi");
// ele.innerText = "Dynamic creation of html element"
// // ele.setAttribute("id","demo");
// ele.id = "demo";

// ele.removeAttribute("id");
// console.log(ele);

// let image = document.createElement("img");
// image.src="https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg";
// console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image);

let from = document.querySelector("form");
let username = document.getElementById("uName");
let email = document.getElementById("uEmail");
let password = document.getElementById("uPass");

from.addEventListener("submit",(Event)=>{
    event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    let uName = username.value;
    let uEmail = email.value;
    let uPass = password.value;
    let userDetails={
        uName,uEmail,uPass
    }
    console.log(userDetails);
    localStorage.setItem("userData",JSON.stringify(userDetails))
})
