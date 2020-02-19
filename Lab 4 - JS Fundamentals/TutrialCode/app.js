// //let var const
//
// let x=10.0;
// const y=10;
//
// if(true){
//     let x=20
//     console.log(x) //20
// }
//
// /*
//     how to check time
//  */
// console.time("my-counter");
// //create time : my-counter = current time
// for(let i =0 ; i<10 ; i++)
//     console.log(i);  //20
//
// //console out the current_time - my-counter variable value
// console.timeEnd("my-counter")
// console.log("You say X = " , 12);
// let name = "Abdulahi";
// let age = 100;
//
// let avvs = `
//         I can write what ever
//         I want Inside this
//         String
//         Is this amazing
// `
// //console.log(avvs)
// // for (let i = 0; i < 10 ; i++) {
// //     console.log(`${i} . Hello Mr. ${name} Your Age is ${age}`);
// // }
//
//

//functions

let x =10;
let y=11;

// function add(x, y) {
//     return x+y;
// }
// function display(x) {
//     console.log(x);
// }
// function displayX(x) {
//     console.log("Value =" +x);
// }
// let sum = add(x,y);
// console.log(`Sum is ${sum}`);
//
// display(sum);
// coolFunction(sum , display);
//
// displayX(sum);
// coolFunction(sum, displayX);
//
// function coolFunction(value , whoToCall) {
//     whoToCall(value);
// }


// let a = 20;
// let b = 30;
//
// function display(value) {
//     console.log('Hello world');
// }
//
// let display2 = function (value) {
//     console.log('Hello world');
// }
//
// let display3 = value => console.log('Hello world');
//
// function multiply(a , b) {
//     return a*b;
// }
//
// let multiply2 = function (a , b) {
//     return a*b;
// }
//
// let multiply3 =  (a , b) =>{
//     return a*b;
// }
//
// let multiply4 =  (a , b) =>  a * b;
//
//
//
// function displayM(value) {
//     console.log(`The multiplicaton is ${value}`);
// }
//
// multiply(a, b);
// multiply2(a, b);

function isPositive(number){
    if(number > 0)
        return true;
    else
        return false;
}

let isPositive1 = function (number){
        if(number > 0)
            return true;
        else
            return false;
}

let isPositive2 =  (number) =>{
    return number >0 ? true : false;
}

let isPositive3 =  number =>{
    return number >0 ? true : false;
}

//step 1 - change the function to arrow
let  isPositive4= number => number > 0 ?  true :  false;
let  isPositive5= number => number > 0 ;

console.log(isPositive5(-1));

//change into an arrow function
//single line arrow function