import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  starWars: Product[] = [];
  consoles: Product[] = [];
  divers: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      data.forEach((element) => {
        if (element.category === 'stars-wars') {
          this.starWars.push(element);
        }
        if (element.category === 'console') {
          this.consoles.push(element);
        }
        if (element.category === 'divers') {
          this.divers.push(element);
        }
      });
    });
  }
}
