import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: Array<{name:string,age:number}>;
  constructor() { 
    // this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    this.names = [{name: 'Ari', age: 10}, {name: 'Carlos', age: 20}];
  }

  saveUser(name, age){
    this.names.push({
      name: name.value, 
      age: age.value});
  }

  ngOnInit() {
  }

}
