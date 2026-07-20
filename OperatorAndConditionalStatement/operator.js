console.log("Operators and Conditional Statements in JavaScript");


//1.Arethomatic Operator.

// let a = 15;
// let b = 5;
// console.log("a=",a ,"b=",b);
// console.log("a - b=",a - b); 
// console.log("a * b=",a * b); 
// console.log("a / b=",a / b); 
// console.log("a % b=",a % b); 
// console.log("a ** b=",a ** b);

//Unary Operator.

// let a = 5;
// let b = 2;
// console.log("a=",a,"b=",b);
// // a++;//a+1:
// // a--;
// // console.log("a=",a);//6
// console.log("--a",--a);


//2.ASSIGNMENT OPERATOR:
//  let a = 5;
//  let b = 2;
// console.log("a=",a,"b=",b);
// // a+=4;
// // a-=4;
// // a**=4;
// // a%=4;
// // a/=4;
// console.log("a=",a);

////3.COMPARISON OPERATOR:
// let a = 5;
//  let b = 3;
//  let c= 10;
//  console.log("a=",a,"b=",b);
// //  console.log("5==5",a==b);
// //  console.log("5==10",a==c);
// console.log("5<=3",a<=b);
// console.log("5>=3",a>=b);

//LOGICAL OPERATOR:

// let a = 5;
// let b = 2;
// console.log("a=",a,"b=",b);

// // let cond1 = a > b;//true
// let cond1 = a < b;//false
// let cond2 = a === 5;//true
// console.log("cond1 && cond2 =", cond1 && cond2);
// console.log("cond1 || cond2 =", cond1 || cond2);
// // console.log("cond1 ! cond2 =", cond1 ! cond2);


//CONDITIONAL STATEMENT:



//if statement.



// let age = 16 ;

// if(age >= 18){
//     console.log("you can vote");
// }
//  if(age < 18 ){
//     console.log("you cannot vote");
//  }


// let mode = "light";
// // let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// }
// console .log(color);


// IF-ELSE STATEMENT:



// let mode = "blue" ;
//  let color ;

//  if(mode == "dark"){
//     color = "black";
//  } else {
//     color = "white";
//  }
// console.log(color);

// let age = 21;
// let age = 11;
// if(age >= 18){
//     console.log("vote");
// }else {
//     console.log("not vote");
// }

//Q.check odd or even ?

// let num = 10;
// if(num % 2 === 0){
//     console.log(num,"is even");
// }else {
//     console.loge(num,"is odd");
// }



//else-if statement:


// let mode = "dark";
// let color;
// if(mode === "dark") {
//     color = "black";
// }else if(mode ==="light"){
//     color = "white";
// }else if(mode === "blue"){
//     color = "blue";
// }else{
//     color = "RED";
// }
// console.log(color);

// //single line code

// if(mode === "dark")console.log(mode);


//TERNARY OPERATOR:

// let age =25;
// let age =12;

// let result = age >= 18 ? "adult" : "not adult" ;
// console.log(result);




//Q2.Get user to input using prompt("Enter a number:") check if the number is a multiple of 5 or not .? 
//ANS:

//alert("hello");
// let name = prompt("hellow");
// console.log(name);


//num%5===0;

// let num = prompt("Entera Number");

// if(num % 5 === 0){
//     console.log(num,"is multiple of 5:");
// } else {
//      console.log(num,"is not multiple of 5:");
// }


//Q2.Write a code which can give grade to student according to their scores :
// .80-100=A
// .70-89=B
// .60-79=C 
// .50-59=D
// .0-49=E


let mark = "91";
 let grade;
 if(mark >= 80 && mark <= 100) {
     grade = "A";
 }else if(mark >= 70 && mark <= 79){
     grade = "B";
 }else if(mark >= 60 && mark <= 69){
     grade = "C";
 }else if(mark >= 50 && mark <= 59){
     grade = "D";
 }else if(mark >= 0 && mark <= 49){
     grade = "E";
         
 }else{
     grade  = "Invalidi mark";
 }
 console.log(grade);





