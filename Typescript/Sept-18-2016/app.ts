/// <reference path="typings/index.d.ts" />

// class Container<T>
// {
//     private _array: T[];
    
//     constructor(){
//         this._array = [];
//     }
    
//     add(item: T){
//         this._array.push(item);
//     }
// }

// class Human {
//   arr: string[];
  
//   push(item){
//     this.
//   }
// }

// class Human {}

// class Humans {
//   private array: Array<Human>;
  
//   push(item){
//     this.array.push(item);
//   };
//   pop(){
//     return this.array.pop();
//   };
// }
// let humans = new Humans();
// humans.push(new Human());

// class LinkList<T> {
//   private array : Array<T> = [];
//   private index : number = 0;
//   add(item: T){
//     this.array.push(item)
//   }
//   next(){
//     this.index++;
//   }
//   prev(){
//     this.index--;
//   }
//   get(){
//     return this.array[this.index];
//   }
// }

// let list = new LinkList<number>();
// list.add(10);
// list.add(20);
// list.add(30);
// console.log(list.get().toString());
// list.next();
// console.log(list.get().toString());


// var arr : number[] = [1,2,3];
// arr[0].toString();

// var a = [
//   1,
//   2,
//   3
// ]

// var b: Array<string> = [];
// var c: Array<number> = [];


// let h: Array<Human> = [new Human(), new Human(), new Human()];
// h.push();

// let c = new Container<string>();
// let c1 = new Container<number>();

// function add(a, b) {
  
// }

// var add1 = function(a, b){};
// var a = add1(1,2);

// var num = (function(a, b){
//   return 10;
// })(1,2);

// class Human {
//   name: string;
// }

// class Employee extends Human {
  
// }

// class Studend extends class {name: string }
// {
  
// }

// let a = new (class {name: string});
// a.name;
// let d3 = window['d3'] || {}; 


// d3.select('#xyz').text('hello');
// d3.abc;
// d3.a;

// function xyz() {
//     xyz();
// }

// xyz();



// function a(num: number) {
//     return function(num2: number){
//         return num + num2;
//     }
// }

// var fn1 = a(10);
// var fn2 = a(5);

// fn1(1);
// fn1(5);
// fn2(2);

// fn1 = a(11);



// var result = "db call" //1000MS
// result //data

// var result = "db call" //1000MS
// result //undefinded

console.log(1);
setTimeout(function(){
    console.log(2);
    
setTimeout(function(){
    console.log(4)
}, 1000);
}, 1000);
console.log(3)