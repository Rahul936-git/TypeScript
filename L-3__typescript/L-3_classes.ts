class person{
    name:string;
    age:number;

    constructor(n1:string,n2:number){
        this.name=n1;
        this.age=n2; 
    }

    greett():void{
        console.log(`h1 ${this.name}`); 
    }
}

const obj1 = new person('Rahul',20)
    console.log(obj1);
const obj3 = new person('Yash',17)
    console.log(obj3);

console.log(obj1.name);
obj1.greett();

class customers_F {
    name:string;
    age:number;
    id:number;
    balance:number;
    acc_no:number;
    address:string;

    constructor(name:string,age:number,id:number,balance:number,acc_no:number,address:string){
        this.name=name;
        this.age=age;
        this.id=id;
        this.balance=balance;
        this.acc_no=acc_no;
        this.address=address;
    }
}

const p1=new customers_F('guiug',67,786,67676767676,4746746747,"gyufufu");
console.log(p1);

console.log(p1.name);
console.log(p1.age);
console.log(p1.acc_no);
console.log(p1.address);
console.log(p1.id);
console.log(p1.balance);

// 
class customers {
   public name:string;
   private age:number;
   protected id:number;
    balance:number;
    acc_no:number;
    address:string;

    constructor(name:string,age:number,id:number,balance:number,acc_no:number,address:string){
        this.name=name;
        this.age=age;
        this.id=id;
        this.balance=balance;
        this.acc_no=acc_no;
        this.address=address;
    }
}

// 

class customers_A {
   public name:string;
   private age:number;
   protected id:number;


constructor(name:string,age:number,id:number){
    this.name=name;
    this.age=age;
    this.id=id;
}
    // pupu():void{
    //     console.log(this.age);
    // }

    // pupu():number{
    //     this.age=this.age+100;
    //     return this.age;
    // }

   public pupu():number{
        this.age=this.age+100;
        return this.age;
    }
}

const p2=new customers_A('yggigui',67,7867868678);

console.log(p2.name);
// console.log(p2.age);
// console.log(p2.id); 

console.log(p2.pupu())

class child extends customers{
    choclate:number;

    constructor(choclate:number,name:string, age:number,  id:number, balance:number, acc_no:number , address:string){
        super(name,age,id,balance,acc_no,address);
        this.choclate=choclate;
    }

    complex():void{
        console.log(this.name);
        // console.log(this.age);
        console.log(this.id); // Although protected is not accesable outside the class but it is accesable in his child class
    }

    pupu():number{
        console.log("Coding and Gym");
        return 10;
    }
}

const E1=new child(4,"gyuyu",7,789,76868,7555598789,"guguiiu");
console.log(E1);
console.log(E1.pupu()); // function overide and last function will call
console.log(E1.name);

// Generic : Template

function value(a:number):number{
    return a;
}

console.log(value(10));

// 

function value_v(b:(number|string)):(number|string){
    return b;
}

console.log(value_v("ghuii"));

// 

function value_W(b:(number|string|number[])):(number|string|number[]){
    return b;
}

console.log(value_W([12,223,34,4,7,5,56,6,6,6,677]));

// 

function value_X(b:(number|string|number[]|boolean)):(number|string|number[]|boolean){
    return b;
}

console.log(value_X(true));

// Make this function Generic

function value_<T>(G:T):T{
    return G;
}

console.log(value_(10));
console.log(value_("ghuii"));
console.log(value_([12,223,34,4,7,5,56,6,6,6,677]));
console.log(value_(true));
console.log(value_(["Rahul","Rohit"]));


interface Admin<T>{
    name:string;
    age:number;
    addhar:T
}

const obj9:Admin<number>={
    name:"yuggi",
    age:78,
    addhar:123456789012
}

const obj11:Admin<string>={
    name:"aweae",
    age:65,
    addhar:'987654321123'
}

interface Admin_<T,U>{
    name:string;
    age:number;
    addhar:T
    salary:U
}

const obj11:Admin_<number,number>={
    name:"yuggi",
    age:78,
    addhar:123456789012,
    salary:674744477
}

const obj13:Admin_<string,number>={
    name:"aweae",
    age:65,
    addhar:'987654321123',
    salary:758558478
}