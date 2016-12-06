import { Component, OnInit } from '@angular/core';
import{ CalcultorService} from '../services/calculator.service'
import{ DataService } from '../services/data.service'
@Component({
  selector: 'app-compoenent1',
  templateUrl: './compoenent1.component.html',
  providers: [CalcultorService , DataService]
  // styleUrls: ['./compoenent1.component.css']
})
export class Compoenent1Component implements OnInit {
   result : string 
   data :string
  constructor( private calculatorService : CalcultorService,
  private dataService:DataService) { }
     onAdd (num1:string , num2:string){
      this.result= "" + this.calculatorService.add( +num1 , +num2);
     }
     onMultiply(num1:string , num2:string ){
        this.result= "" + this.calculatorService.multiply( +num1 , +num2)
        
     }
     onGetValue(){
       this.data = this.dataService.getValue()
     }
     onInsert(newValue:string){
       this.dataService.Insert(newValue);
     }

  ngOnInit() {
  }

}
