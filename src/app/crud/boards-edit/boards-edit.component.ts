import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FsService } from '../../fs.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-boards-edit',
  templateUrl: './boards-edit.component.html',
  styleUrls: ['./boards-edit.component.scss']
})
export class BoardsEditComponent implements OnInit {

  boardsForm: FormGroup;
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


  constructor(private router: Router, private route: ActivatedRoute, private fs: FsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBoard(this.route.snapshot.params['id']);
    this.boardsForm = this.formBuilder.group({
      'displayName' : [null, Validators.required],
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'address' : [null, Validators.required],
      'zipCode' : [null, Validators.required],
      'city' : [null, Validators.required],
      'phoneNumber' : [null, Validators.required],
      'email' : [null],
      'uid' : [null],
    });
  }

  getBoard(id) {
    this.fs.getBoard(id).subscribe(data => {
      this.id = data.key;
      this.boardsDetails
      this.boardsForm.setValue({
        displayName: data.displayName,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        zipCode: data.zipCode,
        city: data.city,
        phoneNumber: data.phoneNumber,
        email: data.email,
        uid: data.uid
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.fs.updateBoards(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/boards-details', this.id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  boardsDetails() {
    this.router.navigate(['/boards-details', this.id]);
  }

}