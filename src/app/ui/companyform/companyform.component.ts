import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from "../../core/auth.service";
import { AuthCompanyService } from '../../core/auth-company.service';

type UserFields = 'email' | 'password' | 'email2' | 'password2';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'companyform',
  templateUrl: './companyform.component.html',
  styleUrls: ['./companyform.component.scss']
})
export class CompanyformComponent implements OnInit {

  public show:boolean = false;
  public showLogin: boolean = false;

 
  userCompanyForm: FormGroup;
  newUserCompany = true;
  passReset = false; // set to true when password reset is triggered
  formErrors: FormErrors = {
    'email': '',
    'password': '',
    'email2': '',
    'password2': '',
    
  };
  
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email',
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    },
};

  constructor(private fb: FormBuilder, private authCompany: AuthCompanyService) { }

  ngOnInit() {
    this.buildCompanyForm();  
  }

  toggleFirma(){
    this.show = false;
  }

  toggleLoginFirma(){
    this.showLogin = false;
  }

  toggleFormCompany(){ 
    this.newUserCompany = !this.newUserCompany;
  }

  signupCompany() {
    this.authCompany.emailCompanySignUp(this.userCompanyForm.value['email'], this.userCompanyForm.value['password']);
  }

  loginCompany() {
    this.authCompany.emailLoginCompany(this.userCompanyForm.value['email'], this.userCompanyForm.value['password']);
   
  }


  resetPassword() {
    this.authCompany.resetPassword(this.userCompanyForm.value['email'])
      .then(() => this.passReset = true);
  }

  buildCompanyForm() {
    this.userCompanyForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
      ]],
    });

    this.userCompanyForm.valueChanges.subscribe((data) => this.onValueChangedCompany(data));
    this.onValueChangedCompany(); // reset validation messages
  }


  onValueChangedCompany(data?: any) {
    if (!this.userCompanyForm) { return; }
    const form = this.userCompanyForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
              }
            }
          }
        }
      }
    }
  }

}
