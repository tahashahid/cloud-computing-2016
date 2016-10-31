import { Component } from '@angular/core';
import { Product } from './models/products'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  products: Array<Product> = [];
  cart: Array<Product> = [];
  pageName: string = 'list';

  constructor(){
    this.products.push(
      new Product(
        'NICEHAT', // sku
        'A Nice Black Hat', // name
        '/resources/images/products/black-hat.jpg', // imageUrl
        ['Men', 'Accessories', 'Hats'], // department
         29.99
      ),
      new Product(
        '123', // sku
        'A Nice Black Hat', // name
        '/resources/images/products/black-hat.jpg', // imageUrl
        ['Men', 'Accessories', 'Hats'], // department
         29.99
      ),
      new Product(
        'xyz', // sku
        'A Nice Black Hat', // name
        '/resources/images/products/black-hat.jpg', // imageUrl
        ['Men', 'Accessories', 'Hats'], // department
         29.99
      )
    )
  }

  getName(product){
    return product.sku + " " + product.name;
  }
  getProducts(){
    return this.products;
  }

  getRecentProducts(){
    return this.products.reverse();
  }

  productWasSelected(p){
    console.log('onProductSelected', p, arguments);
    this.cart.push(p);
  }
  changePage(name){
    this.pageName = name;
  }
}
