// // // // // // // // function sum(a: number, fn: (a: number) => void){
// // // // // // // //     var result: number = a + 2;
// // // // // // // //     fn(result);
// // // // // // // // }
// // // // // // // // function fn(result: string): void{
// // // // // // // //     var total: number = result * 2;
// // // // // // // //     console.log(total);
// // // // // // // // }
// // // // // // // // var num : number = 10;
// // // // // // // // sum(num, fn);

// // // // // // function concate(a: string, b: string, c: string): string;
// // // // // // function concate(a: number, b: number): number;
// // // // // // function concate(a: any, b: any): any {
// // // // // //     return a + b;
// // // // // // }
// // // // // // concate(1,2); //3
// // // // // // concate("a", "b", "c"); // ab
// // // // // // concate([], {}); //error





// // // // // // // function concate(a: any, b: any): any {
// // // // // // //     return a + b;
// // // // // // // }
// // // // // // // concate(1,2); //3
// // // // // // // concate("a", "b"); // ab
// // // // // // // concate([], {}); //error


// // // // // let code : number | string | boolean = "pk";
// // // // // code = 92;
// // // // // code = true;
// // // // // code = {};



// // // // function concate(a: string | number, b: string | number) {
// // // //     return a + b;
// // // // }

// // // // concate(1, 1);
// // // // concate("a", "b");
// // // // concate([], {});

// // // // concate(1, "a");

// // // function sumBy2(num: number | number[]): number{
// // //     if(typeof num === "number"){
// // //         return num + 2;
// // //         num.length
// // //     } else{
// // //         for(var i = 0; i <= num.length; i++){
            
// // //         }
// // //     }
// // // }

// // if("1" == 1){
    
// // }



// // // console.log(sumBy2(2));
// // // console.log(sumBy2([2,3,4,56,5]))

// class Dog { woof() { } }
// class Cat { meow() { } }
// var pet: Dog|Cat = new Dog();
// if(pet instanceof Dog) {//this is also a type guard
//    pet.woof(); // OK
// } else {
//    pet.meow(); // Error
// }
// type mytype = number | string | boolean;
// let num : mytype = 10;
// let num3 : mytype= 10;
// let num4 : number | string | boolean = 10;
// let num5 : number | string | boolean = 10;
// let num6 : number | string | boolean = 10;

// type Callback = (num : number) => void;
// type mytype2 = number[] | string[];
// var arr : number[] | string[] = [];

// let arr : number[] = [1,2,3,4,5];
// let arr2 : string[] = ["a", "b", "c"];
// let arr3 : any[] = [1, "a", "b", {}, function(){}];


// let arr : [string | number, number, boolean] = ["rehan", 20, "hello", 10];