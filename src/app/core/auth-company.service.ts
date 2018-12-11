import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { firebase } from '@firebase/app';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { NotifyService } from './notify.service';

import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';

interface UserCompany {
  uid: string;
  email?: string;
  photoURL?: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  phoneNumber?: string;
  // cvr?: string;
  // contactPerson?: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class AuthCompanyService {
  company: Observable<UserCompany | null>;

  constructor( 
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private notify: NotifyService
    ) {
    this.company = this.afAuth.authState.pipe(
      switchMap(company => {
        if (company) {
          return this.afs.doc<UserCompany>(`usersCompany/${company.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
      // tap(user => localStorage.setItem('user', JSON.stringify(user))),
      // startWith(JSON.parse(localStorage.getItem('user')))
    );
   }

   private handleError(error: Error) {
    console.error(error);
    console.log(error.message)
    this.notify.update(error.message, 'error');
  }

   emailCompanySignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.notify.update('Welcome new user!', 'success');
        return this.updateUserCompanyData(credential.user); // if using firestore
      })
      .catch(error => this.handleError(error));
  }

  emailLoginCompany(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        
        //this.notify.update('Welcome back TEST!', 'success');
        return this.updateUserCompanyData(credential.user);
      })
      .catch(error => this.handleError(error));
  }


  private updateUserCompanyData(company) {
    // Sets user data to firestore on login
    
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`usersCompany/${company.uid}`);

    const data: UserCompany = {
      displayName: company.displayName,
        firstName: company.firstName,
        lastName: company.lastName,
        address: company.address,
        zipCode: company.zipCode,
        city: company.city,
        phoneNumber: company.phoneNumber,
        // cvr: company.cvr,
        // contactPerson: company.contactPerson,
        email: company.email,
        uid: company.uid,
      
    }
    console.log(company.uid)
    return userRef.set(data, { merge: true })

  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login-company']);
    });
  }

    // Sends email allowing user to reset password
    resetPassword(email: string) {
      const fbAuth = auth();
  
      return fbAuth
        .sendPasswordResetEmail(email)
        .then(() => this.notify.update('Password update email sent', 'info'))
        .catch(error => this.handleError(error));
    }
}
