import { Component, ApplicationRef } from '@angular/core';
import {Model} from "./repository.model";
import {Product} from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl:"template.html",
  styles: []
})
export class ProductComponent {
  model: Model = new Model();

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }
}
