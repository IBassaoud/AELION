package org.aelion.product.products;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Product {
    /**
     * @var Product id
     */
    private String id;
    /**
     * @var Product img
     */
    private String thumbnail;
    /**
     * @var Product name
     */
    private String label;
    /**
     * @var Product stock
     */
    private int stock;
}
