import { Injectable, Component } from '@angular/core'


@Injectable()
export class CalcultorService {
    add(num1:number, num2:number){
    return num1 + num2

    
}
multiply(num1:number, num2:number){
    return num1 * num2
}
}





