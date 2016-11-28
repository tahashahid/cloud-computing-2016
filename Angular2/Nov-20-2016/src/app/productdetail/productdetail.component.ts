import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PRODUCTS, Product, PRODUCTSHash} from '../models/products';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  id : string;
  num: string;
  product : Product;


  constructor(private route: ActivatedRoute) {
     route.params.subscribe(function(params) { 
       this.id = params['id']; 

      this.product = PRODUCTSHash[this.id];
     });

       
       //console.log(PRODUCTSHash[this.id]);
      
      );
  }
  

  ngOnInit() {
    alert(this.num);
  }

}
