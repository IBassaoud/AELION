import { Product } from "../../product/product";
import { Collection } from "./collection";

export class ProductCollection extends Collection<Product> {
  add(object: Product): Collection<Product> {
    this.collection.push(object);
    return this;
  }

  
}
