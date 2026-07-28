//Q1.prompet the user enter their fullname . 
// generate a usename for them based on input start username with @ ,
// followed  by rheir full name and ending with the fullname length ?


let fullName =prompt("Enter your fullName With out space");//when i input jyotiprakash
console.log(fullName);//it print jyotipraksh
let userName = "@" + fullName + fullName.length ;// when it print @ + jyotiprakash + lenth(12)
console.log(userName);//out put = @jyotiprakash12.
