import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CATEGORIES } from '../forum-categories.config';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.scss']
})
export class UpdateCategoriesComponent {
  @ViewChild('f') categoriesForm: NgForm;
  categories: boolean;
  row: any;
  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {
    if (this.route.params['value'].subcategory == 'all') {
      this.categories = true;
      setTimeout(() => {
        this.categoriesForm.setValue({
          name: this.route.params['value'].category,
          details: ''
        })
      }, 100)
    } else {
      this.categories = false;
      setTimeout(() => {
        this.categoriesForm.setValue({
          name: this.route.params['value'].subcategory,
          details: ''
        })
      }, 100)
    }
  }

  onCancel() {
    this.router.navigate(['forum-management/categories']);
  }
  onUpdate() {
    this.router.navigate(['forum-management/categories']);
  }
}
