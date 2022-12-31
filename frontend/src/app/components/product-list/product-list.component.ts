import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[]=[];
  modalSwitch: boolean=false;
  currentId: any;

  constructor(private productService: ProductService, private modalService: ModalService) { }

  openModal(){
    this.modalSwitch = true;
  }

  setCurrentId(id:any){
    this.currentId = id;
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.productList = data;
    })
    this.modalService.$modal.subscribe(value => this.modalSwitch = value)
  }

}
