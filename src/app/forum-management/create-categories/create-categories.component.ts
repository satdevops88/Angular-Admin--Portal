import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForumCategoryApiService } from 'services/forumCategoryApi';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent {
  categoryForm: FormGroup;
  categories: boolean;
  imageLabel: String = "Choose File";
  fileToUpload: any;
  categoryID: String;
  constructor(private forumCategoryApi: ForumCategoryApiService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    if (this.route.params['value'].category == 'new') {
      //Category
      this.categories = true;
    } else {
      //SubCategory
      this.categoryID = this.route.params['value'].category;
      this.categories = false;
    }
    this.categoryForm = this.formBuilder.group({
      category: ['', Validators.required]
    })
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
      this.imageLabel = this.fileToUpload.name;
    }
  }
  onCancel() {
    this.router.navigate(['forum-management/categories']);
  }
  onCreate() {
    if (this.categoryForm.value['category'] == "") {
      this.toastr.warning('Please input Category Name', 'Warning');
    } else {
      if (this.categories) {
        var responsePayload = ['_id', 'category', 'slug', 'createdAt',
          { key: 'forum_category_media', fields: ['media_url', 'height', 'width'] }];
        var params = { data: this.categoryForm.value }
        this.forumCategoryApi.createForumCategory(responsePayload, params, this.fileToUpload).then(result => {
          this.toastr.success('Created Successfully', 'Success');
          this.router.navigate(['forum-management/categories']);
        }).catch(error => {
          console.log('error', error);
        })
      } else {
        console.log('this.categoryForm', this.categoryForm);
        console.log('this.fileToUpload', this.fileToUpload);
        var responsePayload = ['_id', { key: 'categoryId', fields: ['category'] }, 'subcategory',
          { key: 'forum_subcategory_media', fields: ['media_url', 'height', 'width'] }];
        var dataSubCategory: any = {
          categoryId: this.categoryID,
          subcategory: this.categoryForm.value['category']
        }
        var params = { data: dataSubCategory }
        this.forumCategoryApi.createForumSubCategory(responsePayload, params, this.fileToUpload).then(result => {
          console.log('result', result);
          this.toastr.success('Created Successfully', 'Success');
          this.router.navigate(['forum-management/categories']);
        }).catch(error => {
          console.log('error', error);
        })

      }
    }
  }
}
