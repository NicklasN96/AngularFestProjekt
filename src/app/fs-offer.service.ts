import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class FsOfferService {

  ref = firebase.firestore().collection('offers');

  constructor() { }

  getOffers(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let users = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          users.push({
            key: doc.id,
            displayName: data.displayName,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            zipCode: data.zipCode,
            city: data.city,
            phoneNumber: data.phoneNumber,
            email: data.email,
            uid: data.uid,
          });
        });
        observer.next(users);
      });
    });
  }

  getOffer(id: string): Observable<any> {
    return new Observable((observer) => {
      console.log(id)
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: id,
          displayName: data.displayName,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          zipCode: data.zipCode,
          city: data.city,
          phoneNumber: data.phoneNumber,
          email: data.email,
          uid: data.uid,
        });
      });
    });
  }

  postOffer(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  updateOffer(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }

  deleteOffer(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
}
