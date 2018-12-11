import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FsCompanyService } from "../../fs-company.service";

@Component({
  selector: 'boards-edit-company',
  templateUrl: './boards-edit-company.component.html',
  styleUrls: ['./boards-edit-company.component.scss']
})
export class BoardsEditCompanyComponent implements OnInit {

  company = {};
  
  boardsCompanyForm: FormGroup;
  id:string = '';
  uid:string = '';
  displayName:string = '';
  firstName:string = '';
  lastName:string = '';
  address:string ='';
  zipCode:string ='';
  city:string ='';
  phoneNumber:string ='';
  email:string = '';
  // cvr:string ='';
  // contactPerson:string ='';


  constructor(private router: Router, private route: ActivatedRoute, private fsCompany: FsCompanyService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBoardCompany(this.route.snapshot.params['id']);

    this.boardsCompanyForm = this.formBuilder.group({
      'displayName' : [null, Validators.required],
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'address' : [null, Validators.required],
      'zipCode' : [null, Validators.required],
      'city' : [null, Validators.required],
      'phoneNumber' : [null, Validators.required],
      // 'cvr' : [null, Validators.required],
      // 'contactPerson' : [null, Validators.required],
      'email' : [null],
      'uid' : [null],
    });
   
  }



  getBoardCompany(id) {
    this.fsCompany.getBoardCompany(id).subscribe(data => {
      this.id = data.key;
      this.boardsDetailsCompany
      this.boardsCompanyForm.setValue({
        displayName: data.displayName,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        zipCode: data.zipCode,
        city: data.city,
        phoneNumber: data.phoneNumber,
        // cvr: data.cvr,
        // contactPerson: data.contactPerson,
        email: data.email,
        uid: data.uid,
      });
    });
  
  }

  onFormSubmitCompany(form:NgForm) {
    this.fsCompany.updateBoardsCompany(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/boards-details-company', this.id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  boardsDetailsCompany() {
    this.router.navigate(['/boards-details-company', this.id]);
  }
}
