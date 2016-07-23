// // if (true) {
// // 	let z = 4;
// // 	//use z
// // }
// // else {
// // 	let z = "string";
// // 	//use z
// // }

// // {
    
// // }

// let myType = { name: "Zia", id: 1 };
// let myType2 = { id: 2,  name: "Tom", age: 10 };
// //Case 1
// myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object
// myType.age

// function person(){
//     this.name = 'hello';
//     function func(){
//         console.log(this.name);
//     }
//     func();
// }
// person()


// function func(){
//     xyz();
//     var xyz = function(){
        
//     }
// }


// function add(a: number|string, b: number|string):number|string{
//     return a;
// }


// let abc = {};

// class Animal {
//     name: string = "animal";
//     age: number = 10;
    
//     eat(){
//         console.log('eating');
//     }
// }

// class Teacher {
//     name: string = "teacher";
    
//     teaching(){
//         console.log('teaching');
//     }
// }

// let obj1 = new Animal();
// let obj2 = new Animal();
// obj1.name = "abc";
// obj2.name = "xyz";
// console.log(obj1.name);
// console.log(obj2.name);

// obj1.eat();

// let teacher = new Teacher();
// teacher.name

class Human {
    name: string;
    assignmentSubmited: number = 0;
    
    constructor(n: string){
        console.log("called");
        this.name = n;
    }
    eat(){
        console.log(this.name + ' is eating');
    }
    assignmentSubmit(){
        this.assignmentSubmited++;
    }
}

let h1 = new Human('abc');
let h2 = new Human('xyz');

// h1.eat()
// h2.eat()
console.log(h1.assignmentSubmited);
h1.assignmentSubmit();
h1.assignmentSubmit();
console.log(h1.assignmentSubmited);
console.log(h2.assignmentSubmited);
