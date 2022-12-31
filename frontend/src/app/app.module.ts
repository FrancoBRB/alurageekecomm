import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { LoginService } from './services/login.service';
import { LoginGuardian } from './guardians/login.guardian';
import { AdminModalComponent } from './components/admin-modal/admin-modal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent, canActivate:[LoginGuardian] },
  { path: 'new-product', component: NewProductComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'edit/:id', component: EditProductComponent },
  { path: 'search/:query', component: ProductSearchComponent },
];

@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProductListComponent,
    NewProductComponent,
    ProductDetailComponent,
    ProductCardComponent,
    EditProductComponent,
    ModalComponent,
    ProductSearchComponent,
    AdminModalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })],
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProductService,
    LoginService,
    LoginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
