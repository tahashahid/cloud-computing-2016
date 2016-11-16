var a = 10;
var b;
var c;
function asyncfn (cb){
	setTimeout(function(){
		b = 20;
		cb(b);
	});
}
asyncfn(function(value){
	c = a + value;
	alert(c)
});
