import { ProductCollection } from "./../../src/utils/collections/product-collection";
import { Product } from "./../../src/product/product";

describe("Collection test", () => {
  it("Should begin with 1 product and should have 2 products after adding another one", () => {
    const product = new Product();
    product.id = "id";
    product.label = "label";
    product.stock = 5;

    const collection: ProductCollection = new ProductCollection();
    collection.add(product);

    expect(collection.collection.length).toEqual(1);

    collection.addObject(product);

    expect(collection.collection.length).toEqual(2);
});
});
