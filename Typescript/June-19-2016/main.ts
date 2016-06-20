// // // // // // // function sum(a: string, b: string): string {
// // // // // // //     return a + b;
// // // // // // // }

// // // // // // // sum(1,2);
// // // // // // // sum("taha", "shahid");


// // // // // // if(true){
// // // // // //     let a = 1;
// // // // // //     var b = 1;
// // // // // // }
// // // // // // console.log(a)


// // // // // var obj = {name: "xyz", id: 1};
// // // // // obj = {name: 'abc', id: "2"}

// // // // var a : any = 10;
// // // // a = <any> "pakistan";
// // // // a = "karachi"; 

// // // let arr : number[] = [1,2];

// // function buildName(firstName: string, lastName = "Khan") : string {//Named function with optional and default parameters
// //     if (lastName)
// //         return firstName + " " + lastName;
// //     else
// //         return firstName;
// // }


// // console.log(buildName("Bob"));
// // console.log(buildName("Bob", "Adam")); 

// function calc(opr: string, ...restParams: number[]): number{
//     let total = 0;
//     for(var i = 0; i < restParams.length; i++){
//         total += restParams[i];
//     }
//     return total;
// }
// calc("+", 1,2);
// calc(1,2,3);

// var sum = (a, b) => { 
//     return a + b

// };

function func1(){
    this.a = "a";
    function func2(){
        // this.a = "b";
        console.log(this.a);
    }
}