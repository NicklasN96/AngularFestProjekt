import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { AuthCompanyService } from "../../core/auth-company.service";

@Component({
  selector: 'companylogin',
  templateUrl: './companylogin.component.html',
  styleUrls: ['./companylogin.component.scss']
})
export class CompanyloginComponent implements OnInit {

  constructor(private router: Router,public authCompany: AuthCompanyService) { }

  ngOnInit() {
  }
  
  logoutCompany(){
    this.authCompany.signOut();
 
  }

}
