import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyC1VqKB_yklXygIiapH-smM4eJrwjasK3w",
  authDomain: "festprojekt-c3343.firebaseapp.com",
  databaseURL: "https://festprojekt-c3343.firebaseio.com/",
  projectId: "festprojekt-c3343",
  storageBucket: "festprojekt-c3343.appspot.com",
  messagingSenderId: "163941173694"
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private auth: AuthService) {}
  
  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}
