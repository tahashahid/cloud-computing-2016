

import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl : 'app/app.component.html' 
})
export class AppComponent {
    tasks: Array<string> = ["task 1", "task 2"];
    task: string;
    
    addTask(){
        this.tasks.push(this.task);
        this.task = '';
    }
    
 }
