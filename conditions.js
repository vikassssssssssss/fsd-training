// if(true){
//     console.log("if block excecuting");

// }
// if(false){
//     console.log("if block excecuting");
// }

// let age = 17;
// if(age >=18){
//     console.log("eligible for voting");
// }
// else(age<=18);{
//     console.log("not eligible")
// }

// age >= 18 ? console.log("major"):console.log("minor");

// let day = prompt("Enter a day here");

// if(day == 1){
//     console.log("Sun");
// }
// else if(day==2){
//     console.log("Mon");
// }
// else if(day==3){
//     console.log("Tue");
// }
// else if(day==4){
//     console.log("Wed");
// }
// else if(day==5){
//     console.log("Thu");
// }
// else if(day==6){
//     console.log("Fri");
// }
// else if(day==7){
//     console.log("Sat");
// }
// else{
//     console.log("ivalid day");
// }

// let day = Number(prompt("Enter a day here"));
// console.log
// switch(day){    //switch is faster  than if else loop
//     case 1: 
//     console.log("Mon");
//     break;
//     case 1: 
//     console.log("Tue");
//     break;
//     case 1: 
//     console.log("Wed");
//     break;
//     case 1: 
//     console.log("Thu");
//     break;
//     case 1: 
//     console.log("Fri");
//     break;
//     case 1: 
//     console.log("Sat");
//     break;
//     case 1: 
//     console.log("Sun");
//     break;
// }

//take 3 vlaues and print which vlaue is greater among the three values.
// let a =20;
//let b =140;
//let c =100;
// do this with both ifelse and switch condition
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }