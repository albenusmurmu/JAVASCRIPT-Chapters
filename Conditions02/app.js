// ! Logicale AND Operators  (&&)
// let totalMarks = 100;
// if(totalMarks>=90 && totalMarks>=70 )
// {
//     console.log("OutStanding Performance");
//     console.log("A+")
// }
// ! OR Operators (||)
// let totalMarks = 70;
// if(totalMarks>=90 || totalMarks>=70 )
// {
//     console.log("OutStanding Performance");
//     console.log("A+")
// }
//! Logicale not Operators (!)

// * Practice Qs
// ! Q1:-A "good string" is a string that starts with the letter 'a' & has a length >3. 
// ! Write a program to find if a string is good or not
// let string = "apple";
// if((string[0] === 'a') && (string.length > 3)){
//     console.log("Good String");
// }
// else{
//     console.log("Not a Good String");
// }
// ! Predict the output of following code:
// let num =12;
// if(num%3===0 && num+1===15 || num-1 ===11){
//     console.log("True");
// }
// else{
//     console.log("False");
// }
// *Truthy & Falsy value(Notes)

// if(" ") {
//     console.log("True");
// }
// else{
//     console.log("false");
// }
// * Switch Statements //Its also use to define condition(like codition statement)

// let color="green";

// switch(color){
//     case"red" :
//         console.log("Stop!");
//         break;

//     case"yellow":
//     console.log("Go sollow");
//     break;

//    case "green":
//     console.log("go");
//     break;
//     default:
//         console.log("light is broken")
// }
// ! Practice Qs:- 
// ! Use switch statement to print the day of the week using a number variable 'day' with value 1 to 7.
// ! 1=Monday, 2=tuesday & so on
// let color = "3";
// switch(color)
// {
//     case"1":
//     console.log("Monday");
//     break;
//     case"2":
//     console.log("Tuesday");
//     break;
//     case"3":
//     console.log("Wednessday");
//     break;
//     case"4" :
//     console.log("Thursday");
//     break;
//     case"5":
//     console.log("Friday");
//     break;
//     case"6":
//     console.log("Saturday");
//     break;
//     case"7":
//     console.log("Sunday");
//     break;
//     default:
//         console.log("Not a valid day")
// }

// * Alert & Prompt
// ! Alert 
// alert("You are now alerting");
// alert("You are in my area");
// console.log("hey friedson");
// console.error("This is error message");
// console.warn("This is warning message");
// ! Prompt(User Input)
// prompt("Enter your name:");//try

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");

// let msg = "welcome!" +" "+ firstName + " " + lastName;

// alert(msg);