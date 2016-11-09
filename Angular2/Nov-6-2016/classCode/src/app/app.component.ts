import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  exp = true;
  exp1 = true;
  exp3 = false;

  exp5 = null;
  exp6 = 5;
  exp7 = 6;
  exp4;

  experince = [];
  myObj = {
  };

  bg = localStorage.getItem('bg') || 'red';
  constructor(){
    this.exp4 = this.exp5 || this.exp6 || this.exp7;
  }
  border = true;

  users = [
    {name: 'abc', selected: false},
    {name: 'xyz', selected: false},
    {name: 'hello', selected: false},
  ];
  func(){
    return true;
  }
  
  changebg(color: string){
    this.bg = color;
    localStorage.setItem('bg', color)
  }
}
