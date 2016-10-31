import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() products;
  // onProductSelected: EventEmitter<Product>;

  constructor() {
    // this.onProductSelected = new EventEmitter();
   }

  selectProduct(selectedProduct){
    // console.log(selectedProduct);
    // this.onProductSelected.emit(selectedProduct);
  }
  ngOnInit() {
  }

}
