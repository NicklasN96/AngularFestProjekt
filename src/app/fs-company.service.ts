import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class FsCompanyService {

  ref = firebase.firestore().collection('usersCompany');

  constructor() { }

  getBoardsCompany(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let companys = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          companys.push({
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
            cvr: data.cvr,
            contactPerson: data.contactPerson,
          });
        });
        observer.next(companys);
      });
    });
  }

  getBoardCompany(id: string): Observable<any> {
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
          cvr: data.cvr,
          contactPerson: data.contactPerson,
        });
      });
    });
  }

  postBoardsCompany(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  updateBoardsCompany(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }

  deleteBoardsCompany(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
}
