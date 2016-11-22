export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public department: string[],
        public price: number) {
    }
}

export var PRODUCTS : Array<Product> = [
  new Product("12", "12", "12", ["12"], 12),
  new Product("13", "13", "13", ["13"], 13),
  new Product("14", "14", "14", ["14"], 14)
]

export var PRODUCTSHash = {};
for(var i = 0; i < PRODUCTS.length; i++){
    PRODUCTSHash[PRODUCTS[i].sku] = PRODUCTS[i];
}