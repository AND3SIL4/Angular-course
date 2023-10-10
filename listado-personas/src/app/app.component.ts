import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Listado personas';

  ngOnInit() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAN36qzKmdO3BB_39P57X_onCaTYxfn6No',
      authDomain: 'listado-personas-27428.firebaseapp.com',
    };
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    return auth;
  }
}
