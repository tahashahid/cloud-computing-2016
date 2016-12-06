import { Component } from '@angular/core';
import { Product } from './models/products'; 
import {CalcultorService} from './services/calculator.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  

  constructor(){}


}
