// // // // // function sum(a: number, fn: (a: number) => void){
// // // // //     var result: number = a + 2;
// // // // //     fn(result);
// // // // // }
// // // // // function fn(result: string): void{
// // // // //     var total: number = result * 2;
// // // // //     console.log(total);
// // // // // }
// // // // // var num : number = 10;
// // // // // sum(num, fn);
// // // function concate(a: string, b: string, c: string): string;
// // // function concate(a: number, b: number): number;
// // // function concate(a: any, b: any): any {
// // //     return a + b;
// // // }
// // // concate(1,2); //3
// // // concate("a", "b", "c"); // ab
// // // concate([], {}); //error
// // // // function concate(a: any, b: any): any {
// // // //     return a + b;
// // // // }
// // // // concate(1,2); //3
// // // // concate("a", "b"); // ab
// // // // concate([], {}); //error
// // let code : number | string | boolean = "pk";
// // code = 92;
// // code = true;
// // code = {};
// function concate(a: string | number, b: string | number) {
//     return a + b;
// }
// concate(1, 1);
// concate("a", "b");
// concate([], {});
// concate(1, "a");
function sumBy2(num) {
    return num + 2;
}
sumBy2(2);
sumBy2([2, 3, 4, 56, 5]);
