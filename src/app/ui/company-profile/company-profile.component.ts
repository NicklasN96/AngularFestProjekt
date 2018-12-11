import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthCompanyService } from "../../core/auth-company.service";

@Component({
  selector: 'company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  constructor(private router: Router, public authCompany: AuthCompanyService, public auth: AuthService) { }

  ngOnInit() {
  }

  logoutCompany(){
   this.authCompany.signOut();
 }
}
