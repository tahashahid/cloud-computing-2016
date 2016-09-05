// import  c, {add as a, sub} from './main';
// import c from './main';
// import * as abc from './main.ts';
// import * as abc1 from './index.ts';
// export function add(){
    
// }

// console.log(abc.add(10, 20));
// console.log(abc.sub(10, 20));

/*
function logClass1(target: any) {

  // save a reference to the original constructor
  var original = target;

  

  // a utility function to generate instances of a class
  function construct(constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }

  // the new constructor behaviour
  var f : any = function (...args) {
    console.log("New: " + original.name);
    console.log("Constructor", original)
    console.log("Date", new Date());
     
    return construct(original, args);
  }

  // copy prototype so intanceof operator still works
  f.prototype = original.prototype;

  // return new constructor (will override original)
  return f;
}

function manupulateClass(target: any) {

  // save a reference to the original constructor
  var original = target;

  // a utility function to generate instances of a class
  function construct(constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }

  // the new constructor behaviour
  var f : any = function (...args) {
     
     console.log(args)
     //args.push("ABC");
     args[0] = "Mr. " + args[0]; 
     
    return construct(original, args);
  }

  // copy prototype so intanceof operator still works
  f.prototype = original.prototype;

  // return new constructor (will override original)
  return f;
}


//apply the decorator to a class
@logClass1
@manupulateClass
class Person { 

  public name: string;
  public surname: string;

  constructor(name : string, surname : string) { 
    
    console.log("arguments in class",   arguments)
    
    this.name = name;
    this.surname = surname;
    
  }
}


var me = new Person("Zia", "Khan");
console.log(me.name);  
// New: Person

// console.log(me instanceof Person); 
*/

function Component(obj : any) {
   
   return function (target: any) {

  // save a reference to the original constructor
  var original = target;

  // a utility function to generate instances of a class
  function construct(constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }

  // the new constructor behaviour
  var f : any = function (...args) {
     console.log(obj);
    //  console.log(args)
     //args.push("ABC");
    //  args[0] = "Mr. " + args[0]; 
     
    return construct(original, args);
  }

  // copy prototype so intanceof operator still works
  f.prototype = original.prototype;

  // return new constructor (will override original)
  return f;
   }
}

@Component({
    template : "Mypage",
    selector : "<myapp></myapp>"
})
class MyPage {
    name = "Rehan"
}


@Component({
    template : "HomePage",
    selector : "<home></home>"
})
class HomePage {
    name = "Home"
}

var page = new MyPage();
var home = new HomePage();

