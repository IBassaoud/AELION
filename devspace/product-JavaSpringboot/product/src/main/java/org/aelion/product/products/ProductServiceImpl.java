package org.aelion.product.products;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl {
    private final List<Product> productList = new ArrayList<Product>();

    public ProductServiceImpl() {
        // Initialize the list with some default products
        productList.add(new Product("1ea77", "https://media.istockphoto.com/id/184276818/fr/photo/pomme-rouge.jpg?s=612x612&w=0&k=20&c=yk9viCWt8_VHAvSvzPuqZI-A79xkestBMyCf1AEyhrc=", "Pommme", 12));
        productList.add(new Product("234ff", "https://img.cuisineaz.com/660x660/2023/04/12/i192672-pennes-a-la-sauce-tomate-et-moutarde-a-l-ancienne.jpg", "Pâtes", 5));
        productList.add(new Product("ff2a3", "https://img.cuisineaz.com/660x660/2013/12/20/i94808-ravioles-a-la-sauce-tomates-et-aux-herbes-fraiches.jpeg", "Raviolis", 3));
    }
    public List<Product> findAll() {
        return productList;
    }

    public List<Product> addProduct(Product data) {
        productList.add(data);
        return productList;
    };

    public ResponseEntity<?> findProduct(String productId) {
        Optional<Product> foundProduct = productList.stream()
                .filter(product -> product.getId().equals(productId))
                .findFirst();

        if (foundProduct.isPresent()) {
            return new ResponseEntity<>(foundProduct.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<String> removeProduct(String productId) {
        Optional<Product> foundProduct = productList.stream()
                .filter(item -> item.getId().equals(productId))
                .findFirst();

        if (foundProduct.isPresent()) {
            productList.remove(foundProduct.get());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
