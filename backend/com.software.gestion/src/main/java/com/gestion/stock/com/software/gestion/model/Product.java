package com.gestion.stock.com.software.gestion.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "price", nullable = false)
    private Float price;

    @Column(name = "ProductDesc", nullable = false)
    private String desc;

    @Column(name = "img")
    private String image;

    public Product() {
    }

    public Product(Long id, String name, String brand, String category, Float price, Integer quantity, String image) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.desc = desc;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getDesc() { return desc; }

    public void setDesc(String desc) { this.desc = desc; }

    public String getImage() { return image; }

    public void setImage(String image) {
        this.image = image;
    }
}
