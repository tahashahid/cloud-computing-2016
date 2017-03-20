var A = 20;
var a = 15;
console.log('a.js A : ', A)
module.exports.a = a;
module.exports.A = A;
module.exports.myFn = function(a1, a2){
    console.log(a1 + a2);
}