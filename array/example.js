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

// let marks = [80,89,56,82,85,67];//given array
// //when use of for loop :
// let sum = 0;
// for(let valu of marks){
//     // console.log(valu);
//      sum += valu ;//sum of all marks.
// //  console.log(`Current Sum = ${sum}`);
// }
//  let avg = sum /marks.length ;//formula of avg .
//     console.log(`Average=${avg}`);



//Q2.form the given array with the price of 5 iteams,
//[ 250 , 645 , 300 , 900 , 50 ] all iteams have offers 10% off them ,
//change the array to the final price aftr applying offers ?

//for of loop aproch :

// let iteam = [250 , 645 , 300 , 900 , 50];
// let i = 0;
// console.log(iteam);

// //using for of loop:

// for(let val of iteam){
//     console.log(`Valu at index ${i} = ${val}`);
//     let off = val / 10 ; // persentage.
//     iteam[i] = iteam[i]-off;
//     console.log(`valu of offers = ${iteam[i]}`);
//     i++
// }


// // for loop approch:
// let iteam = [250, 645, 300, 900, 50];

// for (let i = 0; i < iteam.length; i++) {
//     let offer = iteam[i] / 10;
//     iteam[i] -= offer;
// }

// console.log(iteam);


// let mark = [10,20,30,40,50,60,70,80];
//push opration:

//  mark.push(90);
// mark.push(100);

//pop operation:

// mark.pop();

//toString:

// mark.toString();
// console.log(mark);

//conacte operation :

// let hero1 = ["mama" , "bapa" ];
// let hero2 = ["sis" , "brother"];
// console.log(hero1.concat(hero2));

// unshift operation :

// let result = [1,2,3,4,5];
// console.log(result);
// console.log(result.unshift(6));

//shift operation :

// let arr = [5,6,7,8,9];
// console.log(arr);
// console.log(arr.shift());
// console.log(arr.length);


//slice operation :

// let arr2 = [2,3,4,5,6,7,8,9,2,3,1,0];
// console.log(arr2.slice(1,6));

//splice operation :

// let cricketer = ["virat","rohit","klrahul","subhman"];
// console.log(cricketer);
// console.log(cricketer.splice(1,0,rohit.jyoti));



/*create an array to store a company name ["bloomerg","microsoft","uber","google","ibm","netflix"]
a.remove the first in the array?
b.remove the uber and add the ola?
c.add amazon at the end ?*/

// ans :

let companyName = ["bloomerg","microsoft","uber","google","ibm","netflix"];//create an array.
console.log(companyName);
console.log(companyName.shift());//remove the first company.
console.log(companyName);
console.log(companyName.splice(2,1,uber,ola));
console.log(companyName);
console.log(companyName.push(amazion));