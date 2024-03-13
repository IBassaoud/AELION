package org.aelion.product.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/product")
public class ProductController {
    @Autowired // Autowired instancie automatique le service ProductService, si il est déjà instancié par un autre controller il utilise l'instance en cours. C'est un singleton
    private ProductServiceImpl service;
    @GetMapping
    public List<Product> findAll() {
        return service.findAll();
    }

    @PostMapping
    public List<Product> addProduct(@RequestBody Product data) { return service.addProduct(data);}

    @GetMapping("/{productId}")
    public ResponseEntity<?> findProduct(@PathVariable String productId) {
        return service.findProduct(productId);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<String> removeProduct(@PathVariable String productId) {
        return service.removeProduct(productId);
    }
}
