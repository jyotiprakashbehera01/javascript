//console.log("hello");
//string :
//str="abc".toUpperCase();
//console.log(str);
//array :
//arr=[1,2,3].Push(4);

// Simple example of a function
// function myfunction() {
//     console.log("Welcome to my game:");
//     console.log("You have lost your life:");
// }

// // Call the function
// myfunction();

//Q.create a function of 2 num ?

// function sum(a ,b){
//     console.log(a+b);
//     console.log(a*b);
//     console.log(a-b);
//     console.log(a/b);
//     console.log(a%b);
// }
// sum(5,7);

//return the function :

// function sumofTwoNo(a,b){
//     sum = a+b;
//     return sum;
// }
// let val = sumofTwoNo(5,8);
// console.log(val);//13

//ARROW FUNCTION :

//add

// const arrowSum = ( a , b ) =>{
//     console.log(a+b);
// };
// arrowSum(2,3);

// //multiplication:

// const arrowMultiplication = (a ,b) =>{
//     console.log(a*b);
// }
// arrowMultiplication(5,5);

//print in arrowfunction :

// const arrowHello = () =>{
//     console.log("hello function");
// }
// arrowHello();


//FOR EACH LOOP;
//array ex-
// let arr = [1, 2, , 3, 45, , 6];
// let arr = ["jyoti","jyoshna","shree","jiten"];
// arr.forEach(function printVal(val) {
//     // console.log(val);
//     console.log(val.toUpperCase());
// });

//map :

let nums = [50,30,20];

// nums.map((val)=>{
//     console.log(val);
// })

// let newArray = nums.map((val) => {
//     return val;
//  });
 
//  console.log(newArray);

//FILTER :

// let arr = [1,2,3,4,5,6,7,8,9];
// let evenNums = arr.filter((val) =>{
//     return val % 2 === 0 ;//find even value
//     return val % 2!=== 0;//odd value
// });
// console.log(evenNums);

//REDUCED :

//Q. find the sum of all the numbers in an array using reduce method ?

// let arr = [1,2,3,4,5,6,7,8,9,10];//55
// const output = arr.reduce((res ,cur) => {
//     return res + cur ;
// });
// console.log(output);

//Find the maximum number in an array using reduce method ?

// let arr = [23,95,102,200,1000];
//     let maximum = arr.reduce((prev,curr) => {
//           return prev > curr ? prev : curr;
//          });

//          console.log(maximum