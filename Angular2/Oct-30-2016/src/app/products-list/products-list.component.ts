import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Product } from './../models/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  outputs: ['onProductSelected']
})
export class ProductsListComponent implements OnInit {
  @Input() products;
  onProductSelected: EventEmitter<Product>;

  constructor() {
    this.onProductSelected = new EventEmitter();
   }

  selectProduct(selectedProduct){
    // console.log(selectedProduct);
    this.onProductSelected.emit(selectedProduct);
  }

  ngOnInit() {
  }

}
