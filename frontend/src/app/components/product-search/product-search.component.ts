import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
})
export class ProductSearchComponent implements OnInit {
  query: string;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => (this.query = params['query']));
    this.productService.getAllProducts().subscribe((data) => {
      if (this.query === 'todos') {
        this.products = data;
      } else {
        data.forEach((element) => {
          if (
            element.name.toLocaleLowerCase().includes(this.query.toLowerCase())
          )
            this.products.push(element);
          if (
            element.category
              .toLocaleLowerCase()
              .includes(this.query.toLowerCase())
          )
            this.products.push(element);
          if (element.id != null && element.id.toString() === this.query)
            this.products.push(element);
          if (
            this.query.toLowerCase() === 'star wars' &&
            element.category === 'stars-wars'
          )
            this.products.push(element);
        });
      }
    });
  }
}
