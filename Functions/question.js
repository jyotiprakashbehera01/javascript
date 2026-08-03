// //Q1.create a function ,the function key work that a string as an argument 
// //& return the number of vowel of string. ?

// //ans-->

// //vowel = a,e,i,o,u(5 later).
// //str = "jyptiprakash" // 3 = i,a,a

// // //creat a function 
// // function countVowel(str) {
// //     let count = 0;

// //     // Check every character
// //     for (let char of str) {
// //         console.log(char);

// //         // Check whether the character is a vowel
// //         if (
// //             char === "a" ||
// //             char === "e" ||
// //             char === "i" ||
// //             char === "o" ||
// //             char === "u"
// //         ) {
// //             count++;
// //         }
// //     }

// //     // Return total vowel count
// //     return count;
// // }

// // // Call the function
// // let result = countVowel("jyotiprakash");

// // console.log("Total vowels:", result);


// // Arrow function to count vowels

// const countVowels = (str) => {
//     let count = 0;

//     // Check every character
//     for (let char of str) {
//         console.log(char);

//         // Check whether the character is a vowel
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     // Return total vowel count
//     return count;
// };

// // Call the function
// let result = countVowels("jyotiprakash");

// console.log("Total vowels:", result);



//Q2.For a given array of numbers , print the sqear of each value using the for each loop ?
//[1,2,3,4,5]     output-->1,4,9,16,25 

// //ans-->

// let num = [1,2,3,4,5];

// num.forEach((num) =>{
//     console.log(num*num);//num **2
// });


//CallBack Approch :

// let num = [1,2,3,4,5];

// let callSquar = (num) => {
//     console.log(num*num);
// }
// num.forEach(callSquar);




//Q4.We are given array of amrk of student,[70,90,20,85,93,89]  
// .filter out of the mark of the student that score 90 ?


// let mark = [70,90,20,85,93,89];

// let toper = mark.filter((valu) =>{
//      return valu >= 90 ;   
// });
// console.log(toper);



//Q4.Take a number form n as input form user . create an array of number form 1 to n ?
//i.Used reduced method to call callculate sum of all number in the array ?
//ii.Used to reduced method to calculate product of all numbers in the array ?//check the factorial.


let n = prompt("Enter anumber :");//input to user .
let arr = [];//store an array.
for(i=1 ;i<=n;i++){//using for loop.
arr[i-1] = i;//index.
}
console.log(arr);
//i.
let sum = arr.reduce((rev,curr) => {
     return rev+curr; 
});
console.log(sum);
//ii.
let factorial = arr.reduce((rev,curr) =>{
    return rev *curr;
});

console.log(factorial);

