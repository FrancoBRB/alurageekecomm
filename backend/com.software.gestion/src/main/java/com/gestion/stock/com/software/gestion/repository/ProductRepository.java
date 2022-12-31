package com.gestion.stock.com.software.gestion.repository;

import com.gestion.stock.com.software.gestion.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}