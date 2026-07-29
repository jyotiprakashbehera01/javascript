// console.log("Array");

// //simple array structure ?

// let heros = ["ironman","papa","mama","brother","ram"];
// console.log(heros);
// console.log(heros[2]);//it has index define structure.
// console.log(heros[0]="me");
// console.log(heros);


//for loop :

// let heros = ["ironman","papa","mama","brother","ram"];
// for(let i=0 ; i<heros.length ;i++){
//     console.log(heros[i]);
// }

// //for of loop:
//  let heros = ["ironman","papa","mama","brother","ram"];
//  for(let hero of heros){
//     console.log(hero);
//     console.log(hero.toUpperCase());//make it upper case .
//  }

// let cities = ["cuttack", "banki" ,"odisha", "india"];
// for(let citi of cities){
//     // console.log(citi);
//     console.log(citi.toUpperCase());
// }


// Given an array with mark of student is
// [10,20,30,40,50,60]find the average mark of student 
// entair class ?

//ans=

let marks = [80,89,56,82,85,67];//given array
//when use of for loop :
let sum = 0;
for(let valu of marks){
    // console.log(valu);
     sum += valu ;
 console.log(`Current Sum = ${sum}`);
}
 let avg = sum /marks.length ;
    console.log(`Average=${avg}`);
