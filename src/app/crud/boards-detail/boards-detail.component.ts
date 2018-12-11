import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FsService } from '../../fs.service';
import { ReactiveFormsModule, FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-boards-detail',
  templateUrl: './boards-detail.component.html',
  styleUrls: ['./boards-detail.component.scss']
})
export class BoardsDetailComponent implements OnInit {

  user = {};

  constructor(private route: ActivatedRoute, private router: Router, private fs: FsService) { }

  ngOnInit() {
    this.getBoardDetails(this.route.snapshot.params['id']);
    
  }

  getBoardDetails(id) {
    this.fs.getBoard(id)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      });
  }

  // deleteBoard(id) {
  //   this.fs.deleteBoards(id)
  //     .subscribe(res => {
  //         this.router.navigate(['/boards']);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

}
