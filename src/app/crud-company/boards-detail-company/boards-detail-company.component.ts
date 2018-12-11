import { Component, OnInit } from '@angular/core';
import { FsCompanyService } from '../../fs-company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'boards-detail-company',
  templateUrl: './boards-detail-company.component.html',
  styleUrls: ['./boards-detail-company.component.scss']
})
export class BoardsDetailCompanyComponent implements OnInit {

  company = {};

  constructor(private route: ActivatedRoute, private router: Router, private fsCompany: FsCompanyService) { }

  


  ngOnInit() {
    this.getBoardDetailsCompany(this.route.snapshot.params['id']);
  }

  getBoardDetailsCompany(id) {
    this.fsCompany.getBoardCompany(id)
      .subscribe(data => {
        console.log(data);
        this.company = data;
      });
  }
}
