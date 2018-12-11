import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsService } from '../../fs.service';
import {  FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-boards-create',
  templateUrl: './boards-create.component.html',
  styleUrls: ['./boards-create.component.scss']
})
export class BoardsCreateComponent implements OnInit {

  boardsForm: FormGroup;
  displayName:string='';
  email:string='';
  uid:string='';

  constructor(private router: Router, private fs: FsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.boardsForm = this.formBuilder.group({
      'displayName' : [null, Validators.required],
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'telefonNummer' : [null, Validators.required],
      'address' : [null, Validators.required],
      'zipCode' : [null, Validators.required],
      'city' : [null, Validators.required],
      'uid' : [null, Validators.required],
      'email' : [null, Validators.required],
    });
  }

  onFormSubmit(form:NgForm) {
    this.fs.postBoards(form)
      .subscribe(res => {
          let id = res['key'];
          this.router.navigate(['/boards-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
