package com.gestion.stock.com.software.gestion.controller;

import com.gestion.stock.com.software.gestion.exceptions.ResourceNotFoundException;
import com.gestion.stock.com.software.gestion.model.Product;
import com.gestion.stock.com.software.gestion.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "api/v1/",method = {RequestMethod.POST,RequestMethod.GET,RequestMethod.PUT,RequestMethod.DELETE})
@CrossOrigin(origins = "http://localhost:4200/")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @GetMapping("/products")
    public List<Product> allProducts(){
        return repository.findAll();
    }

    @PostMapping("/products/")
    Product newProduct(@RequestBody Product productToAdd){
        return repository.save(productToAdd);
    }


    @GetMapping("/products/{id}")
    Product getProductById(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id not found."));
    }

    @PutMapping("/products/edit/{id}")
    Product editProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        Product product = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Id not found."));
        product.setName(newProduct.getName());
        product.setPrice(newProduct.getPrice());
        product.setCategory(newProduct.getCategory());
        Product updatedProduct = repository.save(product);
        return updatedProduct;
    }

    @DeleteMapping("/products/delete/{id}")
    void deleteProduct(@PathVariable Long id){
        repository.deleteById(id);
    }
}
