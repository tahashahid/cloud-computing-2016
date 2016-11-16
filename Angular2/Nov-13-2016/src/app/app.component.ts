import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data;
  selectedData;
  constructor(private http: Http){
    this.http.request('http://jsonplaceholder.typicode.com/posts')
      .subscribe((res: Response) => {
        this.data = res.json();
        console.log(this.data);
      });
      
  }

  clicked(id: number){
     this.http.request('http://jsonplaceholder.typicode.com/posts/'+ id)
      .subscribe((res: Response) => {
        this.selectedData = res.json();
        console.log(this.selectedData);
      });
  }

  deletePost(id: number, index){
     this.http.delete('http://jsonplaceholder.typicode.com/posts/'+ id)
      .subscribe((res: Response) => {
        this.data.splice(index, 1);
      });
  }
  save(){
    var temp = JSON.parse(JSON.stringify(this.selectedData));
    delete temp.id;
    this.http.put(
      'http://jsonplaceholder.typicode.com/posts/'+ this.selectedData.id, 
      JSON.stringify(temp)
      )
      .subscribe((res: Response) => {
        alert('Updated')
      });
  }
}


// class Human{
//   name: string;
//   constructor(n){
//     this.name = n;
//   }
// }