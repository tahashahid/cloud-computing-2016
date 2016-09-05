// import  c, {add as a, sub} from './main';
// import c from './main';
// import * as abc from './main.ts';
// import * as abc1 from './index.ts';
// export function add(){
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
function Component(obj) {
    return function (target) {
        // save a reference to the original constructor
        var original = target;
        // a utility function to generate instances of a class
        function construct(constructor, args) {
            var c = function () {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            return new c();
        }
        // the new constructor behaviour
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            console.log(obj);
            //  console.log(args)
            //args.push("ABC");
            //  args[0] = "Mr. " + args[0]; 
            return construct(original, args);
        };
        // copy prototype so intanceof operator still works
        f.prototype = original.prototype;
        // return new constructor (will override original)
        return f;
    };
}
var MyPage = (function () {
    function MyPage() {
        this.name = "Rehan";
    }
    MyPage = __decorate([
        Component({
            template: "Mypage",
            selector: "<myapp></myapp>"
        }), 
        __metadata('design:paramtypes', [])
    ], MyPage);
    return MyPage;
}());
var HomePage = (function () {
    function HomePage() {
        this.name = "Home";
    }
    HomePage = __decorate([
        Component({
            template: "HomePage",
            selector: "<home></home>"
        }), 
        __metadata('design:paramtypes', [])
    ], HomePage);
    return HomePage;
}());
var page = new MyPage();
var home = new HomePage();
