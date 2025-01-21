// console.log(10);
// console.log(20);
// // setTimeout(()=>{
// //     console.lOg(30);
// // },5000)
// setInterval(()=>{
//     document.writeln("MRU");
//     // console.log(30);
// },1500)
// console.log(40);
// console.log(50);

//! promise

// let p1 = new Promise((resolve, reject)=>{})
//     console.log(10);


let p2 = new Promise((resolve, reject)=>{
    resolve("success");
})
console.log(p2);
p2
.then((response)=>console.log(response))
p2.catch((error)=>console.log(error))
.finally(() => console.log("finally for both"));

// let p3 = new Promise((resolve,reject)=>{
//     reject("Failure");

// });
// // console.log(p3);

// p3.then(data) => console.log
    


