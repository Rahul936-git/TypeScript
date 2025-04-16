// L-3 typescript

// tsc --init   -: initialise the typescript

const num:number=188;

// tsc -: it also create js file

// tsc --watch

interface person{
    name:string,
    age:number,
    gender:string,
    addhar?:number  // ? make this line optional
}

const obj:person={
    name:"ygiuygi",
    age:65,
    gender:"male",
}

// 

interface customers{
    name:string,
    age:number,
    acc_no:number,
}

//  partial < > make all property optional

const obj_c:Partial<customers> ={
    name:"hguygiu",
    acc_no:7858755489,
}

//  Required < > make all option required

const obj_r : Required<customers>= {
    name:"yugyutdr",
    age:87,
    acc_no:7865465468,
}

const obj_ro : Readonly<customers> ={
    name:"fgyufufy",
    age:67,
    acc_no:756785874,
}

// obj_ro.name ="uyiguyi";  // error during property change bacuse it is only readable not update or change

// // array of object 

const arrt:{name:string,age:number,height:number}[]=[{name:"Rahul kumar",age:21 , height:165},{name:"gyugyugu",age:17,height:172}];

// or

interface people {name:string,age:number,height:number}

const arr1: people[] =[{name:"uhghuigi",age:76,height:7756}];

// 

interface manager {salary:number,id:string}

const arr0: (people | manager)[] = [{name:"rahul",age:21,height:165,salary:1500000,id:"665guj76gu"}];

// function in Ts

function greet(a:number):number{  // first number is argument return type and second one is function return type
    console.log(a);
    return a+5;
}

console.log(greet(10));

function meet(message:string,value:number):void{
    console.log(message,value);
}

 meet('Rahul kumar Shaw',4);

//  default parameter
function meeting (message:string = "Hello"){
    console.log(message);
}

meeting();
meeting("huihuii");

// optional parameter

function coading(person?:string){
    console.log(person||"Me");
}

coading("Rahul");
coading();

const sum = (a:number,b:number):number=>{
    return a+b;
}

console.log(sum(3,7));

function placeOrder(order:number,callback:(amount:number)=>void):void{
    const amount:number=order+10;
    callback(amount);
}

type Bigchill=(amount:number)=>void;

const sqrt=(val:number)=>{
    return val*val;
}

function orderPlace(order:number,callback:Bigchill):void{
    const price:number = order+10;
    callback(price);
}

orderPlace(100,(price)=>{
    console.log(price);
})

function total(...arr:number[]){
    let ans:number=0;
    arr.forEach((val:number)=>ans+=val);
    console.log(ans);
}

total(2,3,4,5,6,677,8,5434,3,54,5,7,6,66,6,5,7,8);

// extende keyword

interface human{
    name:string,
    age:number
};

interface Teacher extends human{
    salary:string,
    id:number,
}

const objT:Teacher={
    name:"ghuiguiu",
    age:20,
    salary:"jhhhio",
    id:78665
}