"use strict";
class person {
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
    greett() {
        console.log(`h1 ${this.name}`);
    }
}
const obj1 = new person('Rahul', 20);
console.log(obj1);
const obj3 = new person('Yash', 17);
console.log(obj3);
console.log(obj1.name);
obj1.greett();
class customers_F {
    constructor(name, age, id, balance, acc_no, address) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.balance = balance;
        this.acc_no = acc_no;
        this.address = address;
    }
}
const p1 = new customers_F('guiug', 67, 786, 67676767676, 4746746747, "gyufufu");
console.log(p1);
console.log(p1.name);
console.log(p1.age);
console.log(p1.acc_no);
console.log(p1.address);
console.log(p1.id);
console.log(p1.balance);
// 
class customers {
    constructor(name, age, id, balance, acc_no, address) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.balance = balance;
        this.acc_no = acc_no;
        this.address = address;
    }
}
// 
class customers_A {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    // pupu():void{
    //     console.log(this.age);
    // }
    // pupu():number{
    //     this.age=this.age+100;
    //     return this.age;
    // }
    pupu() {
        this.age = this.age + 100;
        return this.age;
    }
}
const p2 = new customers_A('yggigui', 67, 7867868678);
console.log(p2.name);
// console.log(p2.age);
// console.log(p2.id); 
console.log(p2.pupu());
class child extends customers {
    constructor(choclate, name, age, id, balance, acc_no, address) {
        super(name, age, id, balance, acc_no, address);
        this.choclate = choclate;
    }
    complex() {
        console.log(this.name);
        // console.log(this.age);
        console.log(this.id); // Although protected is not accesable outside the class but it is accesable in his child class
    }
    pupu() {
        console.log("Coding and Gym");
        return 10;
    }
}
const E1 = new child(4, "gyuyu", 7, 789, 76868, 7555598789, "guguiiu");
console.log(E1);
console.log(E1.pupu()); // function overide and last function will call
console.log(E1.name);
// Generic : Template
function value(a) {
    return a;
}
console.log(value(10));
// 
function value_v(b) {
    return b;
}
console.log(value_v("ghuii"));
// 
function value_W(b) {
    return b;
}
console.log(value_W([12, 223, 34, 4, 7, 5, 56, 6, 6, 6, 677]));
// 
function value_X(b) {
    return b;
}
console.log(value_X(true));
// Make this function Generic
function value_(G) {
    return G;
}
console.log(value_(10));
console.log(value_("ghuii"));
console.log(value_([12, 223, 34, 4, 7, 5, 56, 6, 6, 6, 677]));
console.log(value_(true));
console.log(value_(["Rahul", "Rohit"]));
const obj9 = {
    name: "yuggi",
    age: 78,
    addhar: 123456789012
};
const obj11 = {
    name: "aweae",
    age: 65,
    addhar: '987654321123'
};
const obj11 = {
    name: "yuggi",
    age: 78,
    addhar: 123456789012,
    salary: 674744477
};
const obj13 = {
    name: "aweae",
    age: 65,
    addhar: '987654321123',
    salary: 758558478
};
