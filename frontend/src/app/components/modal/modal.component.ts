import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id : number;
  productToDelete: Product;


  constructor(private modalService: ModalService, private productService: ProductService, private router:Router) { }

  ngOnInit() {
    this.productService.getProductByID(this.id).subscribe(data => this.productToDelete = data)
  }

  closeModal(){
    this.modalService.$modal.emit(false)
  }

  backToList(){
    this.router.navigate(['products'])
      .then(() => window.location.reload());
  }

  confirmDelete(){
    console.log("Se elimino la id "+this.id)
    this.productService.deleteProduct(this.id).subscribe(data => this.backToList())
  }

}
