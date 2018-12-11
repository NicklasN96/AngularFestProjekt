import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from "../../core/auth.service";
import { AuthCompanyService } from '../../core/auth-company.service';

type UserFields = 'email' | 'password' | 'email2' | 'password2';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  public show:boolean = true;
  public showLogin: boolean = true;

  userForm: FormGroup;
  // userCompanyForm: FormGroup;
  // newUserCompany = true;
  newUser = true; // to toggle login or signup form
  passReset = false; // set to true when password reset is triggered
  formErrors: FormErrors = {
    'email': '',
    'password': '',
    'email2': '',
    'password2': '',
    
  };

 // userForm = new FormGroup({
  //   $key: new FormControl(null),
  //   email: new FormControl(''),
  //   firstName: new FormControl(''),  
  //   lastName: new FormControl(''),
  //   phoneNumber: new FormControl(''),
  //   zipCode: new FormControl(''),
  //   address: new FormControl(''),
  //   city: new FormControl('')
  // });
  
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

  constructor(private fb: FormBuilder, private authCompany: AuthCompanyService, private auth: AuthService) { }

  ngOnInit() {
    this.buildForm();
    // this.buildCompanyForm();  
  }

  //toggle method for opret bruger
  toggle(){
    this.show = true;
  }

  //toggle method for opret firma
  // toggleFirma(){
  //   this.show = false;
  // }

  //toggle method for login bruger
  toggleLogin(){
    this.showLogin = true;
  }
  
 //toggle method for login firma
  // toggleLoginFirma(){
  //   this.showLogin = false;
  // }

  toggleForm() {
    this.newUser = !this.newUser;
  }

  // toggleFormCompany(){ 
  //   this.newUserCompany = !this.newUserCompany;
  // }

  signup() {
    this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password']);
  }

  // signupCompany() {
  //   this.authCompany.emailCompanySignUp(this.userCompanyForm.value['email'], this.userCompanyForm.value['password']);
  // }

  login() {
    this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
  }

  // loginCompany() {
  //   this.authCompany.emailLoginCompany(this.userCompanyForm.value['email'], this.userCompanyForm.value['password']);
  // }

  resetPassword() {
    this.auth.resetPassword(this.userForm.value['email'])
      .then(() => this.passReset = true);
  }

  buildForm() {
    this.userForm = this.fb.group({
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

    this.userForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }


  // buildCompanyForm() {
  //   this.userCompanyForm = this.fb.group({
  //     'email': ['', [
  //       Validators.required,
  //       Validators.email,
  //     ]],
  //     'password': ['', [
  //       Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
  //       Validators.minLength(6),
  //       Validators.maxLength(25),
  //     ]],
  //   });

  //   this.userCompanyForm.valueChanges.subscribe((data) => this.onValueChangedCompany(data));
  //   this.onValueChangedCompany(); // reset validation messages
  // }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;
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


  // onValueChangedCompany(data?: any) {
  //   if (!this.userCompanyForm) { return; }
  //   const form = this.userCompanyForm;
  //   for (const field in this.formErrors) {
  //     if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
  //       // clear previous error message (if any)
  //       this.formErrors[field] = '';
  //       const control = form.get(field);
  //       if (control && control.dirty && !control.valid) {
  //         const messages = this.validationMessages[field];
  //         if (control.errors) {
  //           for (const key in control.errors) {
  //             if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
  //               this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}
