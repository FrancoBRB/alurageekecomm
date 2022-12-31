import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId: number = -1;
  productSelected: Product;
  categorySelected: string;
  productsRec: Product[];
  private routeSub: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.productId = params['id'];
    })
      this.productService
      .getProductByID(this.productId)
      .subscribe((data: Product) => (this.productSelected = data))
      NotFoundedProduct;
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }
}

const NotFoundedProduct = new Product(-1, 'Error not found', 0.1, '', '', '');
