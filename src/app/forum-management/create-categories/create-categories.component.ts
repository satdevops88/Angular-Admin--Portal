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
  constructor(private forumCategoryApi: ForumCategoryApiService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    if (this.route.params['value'].category == 'new') {
      this.categories = true;
    } else {
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
      var responsePayload = ['_id', 'category', 'slug', 'createdAt',
        { key: 'forum_category_media', fields: ['media_url', 'height', 'width'] }];
      var params = { data: this.categoryForm.value }
      this.forumCategoryApi.createForumCategory(responsePayload, params, this.fileToUpload).then(result => {
        this.toastr.success('Created Successfully', 'Success');
        this.router.navigate(['forum-management/categories']);
      }).catch(error => {
        console.log('error', error);
      })

    }
  }
}
