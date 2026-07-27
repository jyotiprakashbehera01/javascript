// console.log("LOOPs");

// //print 1 to 5 loop:
// for(let i=1;i<=7;i++){
//     console.log("jyoti");
// }

//calculate the sum of number0-5?

// let sum = 0;
// for (let i=1 ; i<=5 ; i++){
//     sum = sum + i ;
// }
// console.log("sum=",sum);//15.

// for(let i = 1 ;i <= 6 ; i++){
//     console.log("i",i);
// }
// print=
// i=1
// i=2
// .
// .
// i=6

//While loop:

// let i=1;
// while(i<=10){
//     console.log("i",i);
//     i++;
// }

// DO WHILE LOOp:

// let i =20;
// do{
//     console.log("jyoti");
//     i++;

// }while(i<=10)



// FOR-OF-LOOPs:

// let str = "jyotiprakash";
// let size = 0;
// for(let i of str){
//     console.log("i=",i);
//     size ++;
// }
// console.log("StringSize = ",size);


//FOR IN LOOP:

// let student = {
//     name : "JYORI PRAKASH",
//     age :21,
//     cgpa : 5.7 ,
//     isPass : true
// };

// for(let i in student){
//     console.log(i);
// }

// for(let key in student){
//     console.log("key =",key);
// }


// for(let key in student){
//     console.log("key =",key , "value =",student[key]);
// }



//Q.print the all no 0 to 100 ?
//and find even orr odd number ?

// for(let i=0;i<=100;i++){
//     if(i%2 == 0){
//         console.log("Even number=",i);
//     }else{
//         console.log("Odd number=",i);
//     }
    
// }





//Q2.create a game where you start with any game number .
//  ask the user to keep guessing the number until the user enters correct value ?

let gameNumber = 8 ;
let userNumber = prompt("Guess The Number : ");

while(gameNumber != userNumber){
    //play game .
   userNumber = prompt("it has enter the rong number,Guess The right Number : ");
}
console.log("Congratulation , You have chouse Right Number");