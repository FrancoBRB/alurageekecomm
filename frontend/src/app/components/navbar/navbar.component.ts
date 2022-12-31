import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  searchText: string = '';
  searchBarMobile: boolean = false;

  constructor(private router: Router, private loginService:LoginService) {}

  search(query: string) {
    if (/^[0-9]*$/.test(query)) {
      this.router
        .navigate(['search', this.searchText])
        .then(() => window.location.reload());
    }
    if (query.length >= 3) {
      this.router
        .navigate(['search', this.searchText])
        .then(() => window.location.reload());
    }
  }

  toogleBar(){
    if(this.searchBarMobile === false)
      this.searchBarMobile = true;
    else { this.searchBarMobile = false; }
  }

  logout(){
    return this.loginService.logout();
  }

  isLogedIn(){
    return this.loginService.isLogedIn;
  }
}
