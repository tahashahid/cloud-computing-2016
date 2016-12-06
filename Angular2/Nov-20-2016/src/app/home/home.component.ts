import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

num: string;

  constructor(private route: ActivatedRoute) {
    this.route
      .queryParams //can your params here insteat queryParams
      .subscribe(params => this.num = params['num'] || 'None')
      alert(this.num);
   }

  ngOnInit() {
  }

}
