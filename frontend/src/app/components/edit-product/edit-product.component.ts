import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productImg: string = '';
  productCategory: string = '';
  productName: string = '';
  productPrice: number;
  productDesc: string = '';
  productId: number;
  routeSub: Subscription;
  validateError: string;
  showError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  backToList() {
    this.router.navigate(['products']);
  }

  submitUpdate() {
    let newProduct = new Product(
      this.productId,
      this.productName,
      this.productPrice,
      this.productCategory,
      this.productImg,
      this.productDesc
    );
    let validation =
      this.validateData(newProduct) === '' ? true : false;
    if (validation){
      this.productService
      .editProduct(this.productId, newProduct)
      .subscribe((dato) => {
        this.backToList();
      });
    }
  }

  validateData(p: Product) {
    if (!p.price) p.price = -1;
    let result: string = '';
    if (p.name.length <= 3)
      result += ' el nombre debe contener 3 letras como mínimo,';
    if (p.desc.length <= 3)
      result += ' la descripción debe contener 3 letras como mínimo,';
    if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/.test(p.image))
      result += ' la url de la imagen no es valida debe ser .png o .jpg,';
    if (!/\d{1,3}[,\\.]?(\\d{1,2})?/g.test(p.price.toString()))
      result += ' el precio debe ser un número positivo,';
    if (result != '') {
      result = result.substring(0, result.length - 1);
      result += '.';
      this.showError = true;
    }
    this.validateError = result;
    return result;
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });
    this.productService
      .getProductByID(this.productId)
      .subscribe((data: Product) => {
        this.productImg = data.image;
        this.productCategory = data.category;
        this.productName = data.name;
        this.productPrice = data.price;
        this.productDesc = data.desc;
      });
  }
}
