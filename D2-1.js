/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

let typeUndefined = undefined;
console.log("\nIt is an empty value that was not preset by developer. "+typeUndefined);

let typeNull = null;
console.log("\nA type that has no value. However unlike undefined, null was set by the developer. "+typeNull);

let typeNumber = 24;
console.log("\nIt's a number. Only goes up to 2^56 and down to -2^56. "+typeNumber);

let typeBigInt = Infinity;
console.log("\nAnything bigger than typeNumber is a BigInt. "+typeBigInt);


let typeString = "Word";
console.log("\nIt is a value that consists of characters. For example most popular 'First code', Hello World only consists of one string. "+typeString);

let typeBooleanT = true;
let typeBooleanF = false;

console.log("\nUses variables to answer questions that only require Yes/True or No/False. "+typeBooleanT+" or "+typeBooleanF);


/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

console.log("\nIt is a value that can be of any data type. e.g 15, random word, TRUE, undefined, null ");

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log(2+20);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log(12-x);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";

if(name1 === name2)
{
    console.log(true)
}else{
    console.log(false)
}

if(name1.toLowerCase() === name2.toLowerCase())
{
    console.log(true)
}else{
    console.log(false)
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/
console.log("\n");
x = 4; // x cannot be declared again as it was declared previously
if(x === 0){
    console.log("Zero");
}else if(x===1){
    console.log("One");
}else if(x===2){
    console.log("Two");
}else if(x===3){
    console.log("Three");
}else if(x===4){
    console.log("Four");
}else if(x===5){
    console.log("Five");
}else if(x===6){
    console.log("Six");
}else if(x===7){
    console.log("Seven");
}else if(x===8){
    console.log("Eight");
}else if(x===9){
    console.log("Nine");
}else if(x===10){
    console.log("Ten");
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/
let ternaryOperator;
if(x === 4){
    ternaryOperator = "It works!";
}else{
    ternaryOperator = "It "
}
console.log("\n"+ternaryOperator)