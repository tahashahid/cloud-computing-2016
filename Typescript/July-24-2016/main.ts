// class Name {
//     name : string;
    
//     constructor(){
//         this.name;
//     }
    
//     eat(a, b){
//         this.name;
//     }
// }

// class Car{
//     door: number;
//     tiers: Tier[] = [];
//     name: string;
//     model: string;
    
//     constructor(name: string, model: string, numOfTiers: number){
//         this.name = name;
//         this.model = model;
//         for (var index = 0; index < numOfTiers; index++) {
//             this.tiers.push(new Tier('xyz'));    
//         }
//     }
//     move(){
        
//     }
// }


// /**
//  * Tier
//  */
// class Tier {
//     companyName: string;
//     constructor(name: string) {
//         this.companyName = name;
//     }
// }

// var car = new Car('abc', '2000', 4);
// // for (var index = 0; index < 4; index++) {
// //     car.tiers.push(new Tier('xyz'));    
// // }
// var car2 = new Car('abc', '2000');

// // car.tiers.push(new Tier('xyz'));
// // car.tiers.push(new Tier('xyz'));
// // car.tiers.push(new Tier('xyz'));
// // car.tiers.push(new Tier('xyz'));

// console.log(car);


// class Human {
    
//     name: string;
    
//     constructor(name: string){
//         this.name = name;
//     }
// }


// let h1 = new Human("");
// let a1 = new Animal("world", 50);
// h1 = new Animal("test", 25);//this is working, but it should not because it is a fresh object with extra properties
// a1 = new Human("zeeshan");//ERROR

// let a2 : {name: string} = new Human('abc');
// class Animal {
//     eat(a){
//         console.log(" is a Human and is eating");
//     }
// }

// let a1: Animal = new Animal();
// a1.eat(1);
// a1 = {eat: ()=>{
    
// }}
// a1.eat();

// /**
//  * Human
//  */
// class Human {
//     name: string;  
// }

// /**
//  * Teacher
//  */
// class Teacher extends Human {
//     teach(){
        
//     }
// }
// /**
//  * Schoolteacher
//  */
// class Schoolteacher extends Teacher {
//     teachingInSChool(){
//         console.log("teaching in school")
//     }
// }

// /**
//  * CollageTeacher
//  */
// class CollageTeacher extends Teacher {
//     teachingInCollage(){
//         console.log("teaching in collage")
//     }
// }
// let schoolTeacher = new Schoolteacher();
// let collageTeacher = new CollageTeacher();

// console.log(schoolTeacher);
// console.log(collageTeacher);

// class Animal {
//     name:string;
//     constructor(theName: string) { 
//         this.name = theName; 
//     }
//     move(meters: number = 0) {
//         console.log(this.name + " moved " + meters + "m.");
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { 
//         super(name); 
//     }
//     move(meters = 5) {
//         console.log("Slithering...");
//         super.move(meters);
//     }
//     bite(){
//         console.log("bites");
//     }
// }


// class Human {
//     name: string;
//     constructor(name: number);
//     constructor(name: string);
//     constructor(name: any){
//         this.name = name;
//     }
    
//     eating(){
        
//     }    
// }

// class Teacher extends Human {
//     subjects: string;
//     constructor(name: string){
//         super(name);
//         this.subjects;
//         super.eating()
//     }
//     eating(){
        
//     }
// }

// let teacher1 = new Teacher('abc');


// abstract class Employee {
//     abstract calcSalary(basic: number): number
// }
// abstract class Manager extends Employee{
//     calcSalary(basic){
//         return basic;
//     }
// }
// let manager = new Manager();