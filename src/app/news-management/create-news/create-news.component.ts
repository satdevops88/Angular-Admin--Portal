import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent {

  @ViewChild('f') newsForm: NgForm;

  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {

  }

  onCancel() {
    this.router.navigate(['news-management/news']);
  }
  onCreate() {
    this.router.navigate(['news-management/news']);
    this.toastr.success('Created News Successfully', 'Success');
  }

}
