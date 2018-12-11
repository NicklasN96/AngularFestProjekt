import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsOfferService } from '../../fs-offer.service';
import {  FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  partyForm: FormGroup;
  nrOfPersons:string='';
  maxPrice:string='';
  date:string='';
  time:string='';
  location:string='';
  type:string='';

  constructor(private router: Router, private fs: FsOfferService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.partyForm = this.formBuilder.group({
      'nrOfPersons' : [null, Validators.required],
      'maxPrice' : [null, Validators.required],
      'date' : [null, Validators.required],
      'time' : [null, Validators.required],
      'location' : [null, Validators.required],
      'type' : [null, Validators.required],
    });
  }

  onFormSubmit(form:NgForm) {
    this.fs.postOffer(form)
      .subscribe(res => {
          let id = res['key'];
          console.log(id)
          this.router.navigate(['', id]);
        }, (err) => {
          console.log(err);
        });
  }

}
