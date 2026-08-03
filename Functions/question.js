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