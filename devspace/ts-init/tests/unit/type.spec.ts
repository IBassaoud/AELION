import { ProductType } from "../../src/utils/types/product-type"

describe("Type test", () => {
    it("Should have an id, label and a stock", () => {
        const product: ProductType = {
            id: "id",
            label: "Product",
            stock: 10
        }
        expect(product.label).toBe("Product");

        const product2 = product;
        product2.id = "id2";
        expect(product.id).toEqual(product2.id);
    })
})