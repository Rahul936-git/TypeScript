"use strict";
// L-3 typescript
// tsc --init   -: initialise the typescript
const num = 188;
const obj = {
    name: "ygiuygi",
    age: 65,
    gender: "male",
};
//  partial < > make all property optional
const obj_c = {
    name: "hguygiu",
    acc_no: 7858755489,
};
//  Required < > make all option required
const obj_r = {
    name: "yugyutdr",
    age: 87,
    acc_no: 7865465468,
};
const obj_ro = {
    name: "fgyufufy",
    age: 67,
    acc_no: 756785874,
};
// obj_ro.name ="uyiguyi";  // error during property change bacuse it is only readable not update or change
// // array of object 
const arrt = [{ name: "Rahul kumar", age: 21, height: 165 }, { name: "gyugyugu", age: 17, height: 172 }];
const arr1 = [{ name: "uhghuigi", age: 76, height: 7756 }];
const arr0 = [{ name: "rahul", age: 21, height: 165, salary: 1500000, id: "665guj76gu" }];
// function in Ts
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(message, value) {
    console.log(message, value);
}
meet('Rahul kumar Shaw', 4);
//  default parameter
function meeting(message = "Hello") {
    console.log(message);
}
meeting();
meeting("huihuii");
// optional parameter
function coading(person) {
    console.log(person || "Me");
}
coading("Rahul");
coading();
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 7));
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
const sqrt = (val) => {
    return val * val;
};
function orderPlace(order, callback) {
    const price = order + 10;
    callback(price);
}
orderPlace(100, (price) => {
    console.log(price);
});
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans += val);
    console.log(ans);
}
total(2, 3, 4, 5, 6, 677, 8, 5434, 3, 54, 5, 7, 6, 66, 6, 5, 7, 8);
;
const objT = {
    name: "ghuiguiu",
    age: 20,
    salary: "jhhhio",
    id: 78665
};
