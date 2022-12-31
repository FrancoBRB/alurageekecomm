import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: '', // Api key generated in firebase console
      authDomain: '', // Auth domain generated in firebase console  
    })
  }

}
