// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = false;
let gender;
if(isMale){
    gender = "Male";
}else{
    gender = "Female"
}
console.log("\n"+gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let int1 = 3;
let int2 = 5;

if(int1 === 8 || int2 === 8 || int1 + int2 === 8 || int1 - int2 === 8 || int2 - int1 === 8){
    console.log(true);
}else{
    console.log(false);
}
/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let string1 = "Hello ";
let string2 = "World!";

let firstProgram = string1 + string2;
console.log(firstProgram);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let num1 = 6;
let num2 = 2;
let num3 = 13;

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(num1+" "+num2+" "+num3)
    }else{
        console.log(num1+" "+num3+" "+num2)
    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(num2+" "+num1+" "+num3)
    }else{
        console.log(num2+" "+num3+" "+num1)
    }
}
else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(num3+" "+num1+" "+num2)
    }else{
        console.log(num3+" "+num2+" "+num1)
    }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let avgNum1 = 4;
let avgNum2 = 6;
let average = (avgNum1+avgNum2)/2;

console.log(average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let isItLong1 = "Which one is bigger";
let isItLong2 = "Thousand or Million";

if(isItLong1.length > isItLong2.length){
    console.log(isItLong1);
}else{
    console.log(isItLong2);
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

if(typeof isItLong1 === typeof 15){
    console.log("Type of "+isItLong1+" is integer.");
}

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let givenNumber = 200;
let percentage = 0.3;

console.log("30% of 200 is "+(givenNumber*percentage))

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let isOdd = 14;

if(isOdd%2===0){
    console.log("Given number is even.")
}else{
    console.log("Given number is odd.")
}
