// // // // // function sum(a: string, b: string): string {
// // // // //     return a + b;
// // // // // }
// // // // // sum(1,2);
// // // // // sum("taha", "shahid");
// // // // if(true){
// // // //     let a = 1;
// // // //     var b = 1;
// // // // }
// // // // console.log(a)
// // // var obj = {name: "xyz", id: 1};
// // // obj = {name: 'abc', id: "2"}
// // var a : any = 10;
// // a = <any> "pakistan";
// // a = "karachi"; 
// let arr : number[] = [1,2];
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Khan"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName("Bob"));
console.log(buildName("Bob", "Adam"));
