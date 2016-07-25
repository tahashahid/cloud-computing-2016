// class Name {
//     name : string;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
/**
 * Human
 */
var Human = (function () {
    function Human() {
    }
    return Human;
}());
/**
 * Teacher
 */
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        _super.apply(this, arguments);
    }
    Teacher.prototype.teach = function () {
    };
    return Teacher;
}(Human));
/**
 * Schoolteacher
 */
var Schoolteacher = (function (_super) {
    __extends(Schoolteacher, _super);
    function Schoolteacher() {
        _super.apply(this, arguments);
    }
    Schoolteacher.prototype.teachingInSChool = function () {
        console.log("teaching in school");
    };
    return Schoolteacher;
}(Teacher));
/**
 * CollageTeacher
 */
var CollageTeacher = (function (_super) {
    __extends(CollageTeacher, _super);
    function CollageTeacher() {
        _super.apply(this, arguments);
    }
    CollageTeacher.prototype.teachingInCollage = function () {
        console.log("teaching in collage");
    };
    return CollageTeacher;
}(Teacher));
var schoolTeacher = new Schoolteacher();
var collageTeacher = new CollageTeacher();
console.log(schoolTeacher);
console.log(collageTeacher);
