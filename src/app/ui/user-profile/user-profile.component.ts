import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthCompanyService } from "../../core/auth-company.service";



@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {

  constructor(public auth: AuthService, private router: Router, public authCompany: AuthCompanyService ) { }


  logout() {
    this.auth.signOut();
  }
  
 logoutCompany(){
   this.authCompany.signOut();

 }
}
