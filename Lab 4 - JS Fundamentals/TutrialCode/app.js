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

// function isPositive(number){
//     if(number > 0)
//         return true;
//     else
//         return false;
// }
//
// let isPositive1 = function (number){
//         if(number > 0)
//             return true;
//         else
//             return false;
// }
//
// let isPositive2 =  (number) =>{
//     return number >0 ? true : false;
// }
//
// let isPositive3 =  number =>{
//     return number >0 ? true : false;
// }
//
// //step 1 - change the function to arrow
// let  isPositive4= number => number > 0 ?  true :  false;
// let  isPositive5= number => number > 0 ;
//
// console.log(isPositive5(-1));
//
// //change into an arrow function
// //single line arrow function

// let isEven = number => number %2 == 0 ? console.log('Even') : console.log('Odd');
//
// isEven(124);
// isEven(-123);

//Arrays
//
// console.log('Hello');
// console.error("Error message");
// console.warn("Warning");


// let numbers = [2,4,18,28,9,5,6,7,8,9];

// numbers.push(55555);
// console.log(numbers);
//
// numbers.pop();
// console.log(numbers);
//
// numbers.shift();
// console.log(numbers);
//
// numbers.unshift(266)
// console.log(numbers);

let numbers = [2,4,18,28,19,15,16,7,8,9];
// let names = ["Abdulahi" , "Ali" , "Sara", "Mohamed"];
// // names.sort();
// console.log(names);
//
// console.log('Reverse Strings');
// console.log(names.reverse());
//
// let compareFun = (x, y) =>x-y;
//
// console.log('Increasing');
// numbers.sort(compareFun);
// console.log(numbers);
//
// //
// //
// console.log('Decreasing');
// numbers.reverse();
// console.log(numbers);
//



// function decreasingOrder(x, y) {
//     return y-x;
// }

//Spread operator
// let numbers2 = [2,4,18,28,19,15,16,7,8,9, ];
// let numbers3 = [-1,-2,-3, [1,2,3 , [4,4,4] ]];
//
// console.log(numbers3[3][0]);
//
// let combinedArray = [...numbers2 , ...numbers3];
// console.log(combinedArray);
//
// combinedArray = [...numbers2 , ...numbers3.flat(2)];
// console.log(combinedArray);


// //finding something inside an array
// let numbers5 = [1,2,3,4];
//
// console.log("The maximum value " + Math.max(...numbers5));
//
// console.log(numbers5);
// console.log(...numbers5);
//
// let oneOfTheNumbe = numbers5.find(x=> x==-15)
// let negativeNumbersInsideTheArray = numbers5.filter(x=> x<0);
//
// let combines =  (x, y) => x+y;
//
// let sum = numbers5.reduce((prev , curr) => curr + prev);
// let mul = numbers5.reduce((prev , curr) => curr * prev);
// let biggest = numbers5.reduce((prev , curr) => curr > prev ? curr : prev);
// let minimum = numbers5.reduce((prev , curr) => curr > prev ? prev : curr);
//
// console.log(`Sum = ${sum}`);
// console.log(`Mult = ${mul}`);
// console.log(`Biggest = ${biggest}`);
// console.log(`Min = ${minimum}`);

numbers = [1,2,3,4,5,6]
for (let i = 0; i < numbers.length; i++) {
    i = i*i;
}
//
// function display (v){
//     console.log(v**2);
// }


console.log(numbers.forEach( x=> x**2))

// numbers.forEach( display)