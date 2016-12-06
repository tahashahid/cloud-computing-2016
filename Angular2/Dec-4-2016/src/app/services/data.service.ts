import { Injectable} from '@angular/core'


@Injectable()
export class DataService{
   Data = ["summer", "winter", "autumn", "spring"]
   getValue(){
       let ranNum =Math.floor(Math.random()* this.Data.length)
       
       return this.Data[ranNum]
   }
   Insert(newValue:string){
       this.Data.push(newValue)
   }
}