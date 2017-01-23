// import {Observable} from 'rxjs/Rx';
// var button = document.getElementById('button');
// // button.addEventListener('click', function(){
// // })
// var clicks = Observable.fromEvent(button, "click").take(5);
// clicks.subscribe(
//   (x) => alert("clicked"),
//   (err) => alert("error"),
//   () => alert('Completed')
// );
// import {Observable} from 'rxjs/Rx';
// var click = Observable.fromEvent(document, 'click')
// var click1 = click.take(2)
// .filter(function(c: MouseEvent) { 
//     return c.clientX > window.innerWidth / 2; 
// })
// var click2 = click.filter(function(c: MouseEvent) { 
//     return c.clientX > window.innerWidth / 2; 
// })
// // var click3 = click2
// click1.subscribe(function(c: MouseEvent) { 
//     console.log('click 1', c.clientX, c.clientY) 
// })
// click2.subscribe(function(c: MouseEvent) { 
//     console.log('click 2', c.clientX, c.clientY) 
// })
// click2.subscribe(function(c: MouseEvent) { 
//     console.log('click 2 again', c.clientX, c.clientY) 
// })
// import Rx = require('rxjs/Rx');
// /*
// https://github.com/ReactiveX/RxJS/blob/master/MIGRATION.md
// */  
// var observable : Rx.Observable<String> = Rx.Observable.create(
//   function(observer: Rx.Observer<String>) {
//     observer.next('Simon');
//     observer.next('Jen');
//     observer.next('Sergi');
//     observer.complete(); // We are done
//   });
// observable.subscribe(
//     function next(x: String) { console.log('Next: ' + x); },
//     function error(err) { console.log('Error: ' + err); },
//     function complete() { console.log('Completed'); }
// );
//# sourceMappingURL=main.js.map