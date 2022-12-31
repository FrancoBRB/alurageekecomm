import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private urlAPI = ""; // Api base url

  constructor(private http: HttpClient) {
  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.urlAPI);
  }

  getProductByID(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.urlAPI}/${id}`);
  }

  addNewProduct(product: Product):Observable<Object>{
    return this.http.post(`${this.urlAPI}/`, product);
  }

  editProduct(id:number, product: Product):Observable<Object>{
    return this.http.put(`${this.urlAPI}/edit/${id}`,product);
  }

  deleteProduct(id:number):Observable<Object>{
    return this.http.delete(`${this.urlAPI}/delete/${id}`);
  }
}
