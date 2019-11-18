import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CATEGORIES } from '../forum-categories.config';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent {
  @ViewChild('f') categoriesForm: NgForm;
  categories: boolean;
  row: any;
  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {
    if (this.route.params['value'].category == 'new') {
      this.categories = true;
    } else {
      this.categories = false;
    }
  }

  onCancel() {
    this.router.navigate(['forum-management/categories']);
  }
  onCreate() {
    this.router.navigate(['forum-management/categories']);
    this.toastr.success('Created Successfully', 'Success');
  }
}
