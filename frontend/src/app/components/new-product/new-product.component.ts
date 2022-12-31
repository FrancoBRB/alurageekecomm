import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  productImg: string = '';
  productCategory: string = '';
  productName: string = '';
  productPrice: number;
  productDesc: string = '';
  productToAdd: Product;
  validateError : string;
  showError : boolean = false;

  constructor(private productService: ProductService, private router: Router) {}

  addProduct() {
    this.productToAdd = new Product(
      null,
      this.productName,
      this.productPrice,
      this.productCategory,
      this.productImg,
      this.productDesc
    );
    let validation =
      this.validateData(this.productToAdd) === '' ? true : false;
    if (validation) {
      this.productService.addNewProduct(this.productToAdd).subscribe((data) => {
        this.backToList();
      });
    }
  }

  backToList() {
    this.router.navigate(['products']);
  }

  validateData(p: Product) {
    if(!p.price) p.price = -1;
    let result:string = '';
    if (p.name.length <= 3 ) result += ' el nombre debe contener 3 letras como mínimo,';
    if (p.desc.length <= 3 ) result += ' la descripción debe contener 3 letras como mínimo,';
    if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/.test(p.image)) result += ' la url de la imagen no es valida debe ser .png o .jpg,'
    if (!/\d{1,3}[,\\.]?(\\d{1,2})?/g.test(p.price.toString())) result += ' el precio debe ser un número positivo,' 
    if (result != '') {
      result = result.substring(0, result.length - 1);
      result += '.'
      this.showError = true;
    };
    this.validateError = result;
    return result;
  }

  ngOnInit() {}
}
