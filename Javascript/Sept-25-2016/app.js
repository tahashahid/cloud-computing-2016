var numbers = [10,20,30];
// forEach(numbers, sum);
// console.log(sum(numbers));
// sum(numbers);
console.log(reduce(numbers, multiply, 1));
// reduce(numbers, multiply);

function forEach(array, fn){
    for(var i = 0; i < array.length; i++){
        fn(array[i]);
    }
}

function reduce(array, action, start){
    var total = start;
    forEach(array, function(p1){
        total = action(total, p1);
    });
    return total;
}

function sum(a, b){
    return a + b;
}
function multiply(a, b){
    return a * b
}


// function sum(array) {
//     //implementation
//     var p = 0;
//     forEach(array, action)
    
//     function action(b) {
//         total += b;
//     }
//     return total;
// }

// function sum(b){
//     if(!total){
//         var total = 0;
//     }
//     total += b;
// }

// function func (b){
//     console.log(b * 2);    
// }

// function func2 (b){
//     console.log(b * b);    
// }