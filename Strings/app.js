// * Lecture 4
// * String
// ! String method and trim method

// let msg ="   hello   ";

// console.log(msg.trim());

// let password = prompt(" Enter your password: ");
// let newPass=password.trim();
// console.log(newPass)
// ! toUpperCase & toLowerCase method

// let nme = "AlBEnus PetEr";
// console.log(nme.toUpperCase());
// * Methods with arguments indexof()

// let Str = "ilovepeter";
// console.log(Str.indexOf("love"))

// * Slice methods(Returns a part of the original string  as a new string.)
// let str="hellopeter";
//console.log(str.slice(4,7));  // 4 to n-1 = ope
// console.log(str.slice(5)); 
// console.log(str.slice(1,length-2))
// console.log(str.slice(-5));
// *Replace Methods(Searches a value in the string & returns a new string with value replaced.) 
// let msg ="hello peter";
// console.log(msg.replace("hello","albenus"));
// // let str = "dodododo"
// console.log(str.replace("dodo","hello"));
// * Repeat Methods(to repeate a value in multiple times)
// let msg="hellopeter ";
// console.log(msg.repeat(2));

// !Practice Questions

// * 1Qs:-for the Give String :
// *let msg = "help"; Trim it & convert it  to UPPERCASE.
//! use chainning methods//msg.trim().toUpperCase 
// let msg = "help";
// console.log(msg.trim().toUpperCase()); //method chainning rule
// * 2Qs:-for the String ->let str="ApnaCollege",predict the output for following:
// * str.slice(4,9)//output="colle" //0 to n-1
//* str.indexof("na")//output=2;
//* str.replace("Apna","Our")//output="OurCollege";

//*separate the 'College'  part in above string & replace 'I' with 't' in it.
// let str="Apnacollege";

// console.log(str.slice(4).replace("l","t"));

// * For the given start of an array, change it to final from using splice.
//! start : ['january','july','march','august']
// !final: ['july','june','march',''august]//output
// let month = ['jauary','july','march','august'];
// console.log(month.splice(0,2,'july','june'));

// *Qs2:- Return the index of the "javascript" from the gigen array, if it was reversed.
// !['c','c++','javascript','python','java','c#','sql']

// let lang = ['c','c++','javascript','python','java','c#','sql']
// method chainning 
// console.log(lang.reverse().indexOf('javascript')); 
// * Create a neasted array to show the following tic- tac-toe game state.
// ! diagram is in folder
// let game = [['X','Null',0],['Null','X','Null'],[0,'X','X']]
// console.log(game);

// * Lecture (Array)

// let student1= "ramesh";
// let student2= "jonson";
// let student3= " micheal";

// * Array is collection of linear things
//  let student = ["ramesh","micheal","jonson"];
//  console.log(student);
// console.log(student[0]) 
// console.log(student[0].length);
// * Array methods are (push:add to end; pop:remove from end; Unshift:add to start; shift:remove from start)
// let followers = ["peter","mom","nana"]
// console.log(followers.shift());
// console.log(followers);

// * Qs:- For the given start state of an array, change it to final form using methods.
// ! start:['january','july','march','august']
// ! final:['july','june','march','august']

// let month=["january","july","march","august"]
// console.log(month.shift(),month.shift())

// console.log(month)
// console.log(month.unshift("june"),month.unshift("july")) 
// console.log(month)