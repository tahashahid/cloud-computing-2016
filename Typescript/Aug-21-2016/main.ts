// class Human {
//     private name: string;
//     age: number;
//     eat(){
//          console.log(this.name)
//      }
// }
// class Emplyee extends Human {
//     working(){
//         console.log(this.name);
//     }
// }

// var human = new Human();
// console.log(human.name);



// let a : { id : number , name : string } = { id : 1, name : "Rehan" };

// let b = {id : 1}

// let c = { id : 1, name : "Rehan", age : 10 } 

// a = c;

//Ducktyping for Objects
//fresh with less properties = error
//fresh with access propertise = error
//stale with less properties = error
//stale with access properties = correct


// class Human {
//     private name : string
//     age : number
// }

// class Robot {
//     name : string
// }

// class Animal {
//     private name : string
//     age : number    
// }

// let h : Human = new Human();
// h = new Animal();

// let a1 = { name : "", age : 1, name2: "" }

// h = new Animal()

// let r = new Robot()

// r = a1
// r = { name : "", age : 1, name2: "" }
// r = new Animal()

// r.







// var passcode = "secret passcode";

// class Employee {
//     private _fullName: string;

//     get fullName(): string {
//         if(this._fullName){
//             return "MR" + this._fullName;    
//         }    
//     }
	
//     set fullName(newName: string) {
//         this._fullName = newName;
//     }
// }

// var employee = new Employee();
// // employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }

// class Employee {
//     name: string;
//     static incomeTex: string;
// }
// var e = new Employee();
// Employee.incomeTex = "10";
// console.log("e", Employee.incomeTex);

// var e1 = new Employee();
// Employee.incomeTex = "20";
// console.log("e1", Employee.incomeTex)
// console.log(Employee.incomeTex);

// interface Human {
//     name: string;
//     age?: number;
// }

// interface Eat {
//     (abc: string): void;
// }

// interface Arr {
//     [index: number]: string;
//     length : number
// }

// var h : Human = { name: "xyz" };
// var e : Eat = function(abc: number){
    
// }
// var arr: Arr = ["a", "b"];
// arr.length;

// var arr1 : number[];

// arr1.length

// interface Human {
//     name: string;
//     age: number;
//     eat()
// }

// interface Employee extends Human{
//     calcSalary();
// }

// class employee implements Employee {
//     name: string;
//     age: number;
//     eat(){
        
//     }
//     calcSalary(){}
// }


// interface Counter {
//     (start: number): string;//Note there is no name assigned to the function signature
//     interval: number;
//     // reset(): void;
// }

// var c: Counter;
// c(10);
// c.reset();
// c.interval = 5.0;
