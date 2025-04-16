"use strict";
console.log('Welcome to typescript');
let a = 10;
let b = 20;
// a="Rahul";
// string
let str = "rahul";
let flag = true;
flag: false;
let big_number = 7696989686969n;
let abc = null;
let bcd = undefined;
name: string = "rohit";
let ay = 56;
const honey = 786785;
// In computer science,
//  compile time (or compile-time) describes the time
//  window during which a language's statements are converted into binary instructions
//  for the processor to execute.
// An interpreted language is a programming language where code is executed
//  directly by an interpreter, line by line, without a separate compilation step.
//  This means the code is translated and run at the same time, 
// unlike compiled languages which are first translated into machine code before execution. 
// Intepretaor execute code line by line but compiler execute it by one time
// A Just-In-Time (JIT) compiler compiles code into machine code
//  during program execution, rather than beforehand,
//  improving performance by optimizing code for the specific runtime environment. 
//    ///////////////    L-2
let x = 7; // initialise automatic
x = "gigiu"; // not change after automatic change
let money; // money:any;
money = 20;
money = "cfucfyu";
let sunny;
sunny = 67;
sunny = "yfyuf";
console.log(money.toUpperCase());
let val2;
val2 = 20;
val2 = "gugg9";
console.log(val2);
// console.log(val2.toUpperCase());  // no operation to unknown
if (typeof val2 === "string") {
    console.log(val2.toLocaleUpperCase());
}
if (typeof val2 === "number") {
    console.log(val2.toFixed(2));
}
//  unknown is better than any;
// Non primitive datatype :- Array, object, function
let arr = [23, 45, 778, 96, 4446, 9];
let arr2 = [2, 1, 168, 5];
let arr3 = ["uygyuyi", 7, 75, "gi", 4];
let arr4 = ["uygyuyi", 765, 7, "gi", 4];
arr3.push(true);
arr3.push(67);
let arr5 = ["yugyu", 899, false, "ughuig", 76, true, 34];
// tuple :- specially mention everyone
let tuple = ["ihiuui", 54676, 767868, true, "ghiu"];
// During compile ,Compiler convert our code in machine code
// and during runtime compiler give their machine code (binary code) 
// to cpu for execution or run
// js is intermediate language that skip intermediate process by do not converting it into machine language 
// and dirct start executing line by line 
// thats why it is slower than c++ , java in term of execution speed
// c++ compiler convert code into machine language but java compiler convert  
// it into bytes language which is little bit slower than c++ in term of execution
// js used JIT(just in time) compiler which is in between compile time and interpreted 
// let obj1={
let obj1 = {
    name: "rohit",
    age: 9,
    gender: "male"
};
let obj2 = {
    name: "rahul",
    age: 21,
    gender: "male"
};
// 
let person;
person = {
    name: "gugyuyi",
    age: 76,
    gender: "male"
};
let c1 = {
    name: "rahul",
    age: 21,
    gender: "male"
};
// merge all interface but not type
let obj4 = {
    name: "giuguogiu",
    age: 74,
    position: "center",
    id: 5667,
    class: "second",
};
