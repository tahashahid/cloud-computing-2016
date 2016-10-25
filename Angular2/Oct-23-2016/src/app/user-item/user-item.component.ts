import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: {name:string, age:number};
  
  editMode : Boolean;
  
  constructor() {
    
   }
saveName(nameTxt, ageTxt){
  console.log(nameTxt.value, ageTxt.value);
  this.name.name = nameTxt.value;
  this.name.age = ageTxt.value;
  this.editMode = false;
}

editName(){
  this.editMode = true;
}

  ngOnInit() {
  }

}
